import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/";
import pkg from "./package.json";

const tinydate = require("tinydate");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

loadLanguages(["bash", "scss", "typescript"]);
const preprocess = [
  mdsvex({
    extension: ".svx",
    layout: "./src/helpers/Markdown/MDXLayout.svelte",
    remarkPlugins: [
      [
        require("remark-bookmarks"),
        {
          bookmarks: {
            "repl playground":
              "https://svelte.dev/repl/2c55788d8ffd4458bfe9bcb5f58956db",
          },
        },
      ],
      require("remark-sectionize"),
      [
        require("remark-class-names"),
        {
          classMap: {
            "heading[depth=1]": "heading text-h3 mb-4",
            "heading[depth=2]": "heading text-h4 mb-3",
            "heading[depth=3]": "heading text-h5 mb-2",
            "heading[depth=4]": "heading text-h6 mb-2",
            link: "app-link",
          },
        },
      ],
      [
        require("remark-external-links"),
        {
          rel: ["noopener", "noreferrer"],
        },
      ],
      require("remark-slug"),
      [
        require("remark-autolink-headings"),
        {
          content: {
            type: "element",
            tagName: "i",
            properties: { className: ["mdi", "mdi-pound"] },
          },
        },
      ],
    ],
    highlight: {
      highlighter: (code, lang) => {
        function escape(text) {
          return `{@html \`${text.replace(/`/g, "&#96;")}\`}`;
        }

        if (lang && Prism.languages[lang]) {
          const parsed = Prism.highlight(code, Prism.languages[lang]);
          const escaped = escape(parsed);
          const langTag = `language-${lang}`;
          const codeTag = `<code class=${langTag}>${escaped}</code>`;
          const pre = `<pre class=${langTag}>${codeTag}</pre>`;
          return `<Components.CodeBlock lang='${lang}'>${pre}</Components.CodeBlock>`;
        }
        const escaped = escape(code);
        const pre = `<pre><code>${escaped}</code></pre>`;
        return `<Components.CodeBlock>${pre}</Components.CodeBlock>`;
      },
    },
  }),
  sveltePreprocess({
    scss: {
      includePaths: ["theme"],
    },
    postcss: {
      plugins: [require("autoprefixer")],
    },
  }),
];
const extensions = [".svelte", ".svx"];

const replaced = {
  "process.env.NODE_ENV": JSON.stringify(mode),
  CURRENT_DATE: tinydate("{DD}/{MM}/{YYYY}")(),
};

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias({
        entries: [
          { find: "@examples", replacement: "../../examples" },
          { find: "@shared", replacement: "../../shared" },
        ],
      }),
      replace({
        "process.browser": true,
        ...replaced,
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions,
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          babelHelpers: "runtime",
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias({
        entries: [
          { find: "@examples", replacement: "../../examples" },
          { find: "@shared", replacement: "../../shared" },
        ],
      }),
      replace({
        "process.browser": false,
        ...replaced,
      }),
      svelte({
        generate: "ssr",
        hydratable: true,
        dev,
        extensions,
        preprocess,
      }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules
    ),
    preserveEntrySignatures: "strict",
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        ...replaced,
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};
