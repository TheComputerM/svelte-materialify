const templates = {
  component: {
    index: "export { default } from './{{name}}.svelte';\n",
    variables: "@import '../../styles/variables';",
    scss: "@import './variables';",
    svelte: "<style lang='scss' src='./{{name}}.scss'></style>",
  },
  doc: {
    index:
      "{{#each examples}}export { default as {{this}} } from './{{this}}.svelte';\n{{/each}}",
    svx: `---
title: {{name}}
---

{{#if examples.length}}
<script context="module">
  export async function preload() {
    let sources = await this.fetch('examples/{{folder}}/{{camelCase name}}.json');
    sources = await sources.json();
    return { sources };
  }
</script>
{{/if}}

<script>
{{#if examples.length}}
  import { API, Example, setExamples } from '@shared';
  import * as Examples from '@examples/{{folder}}/{{camelCase name}}';
  export let sources;
  setExamples([sources, Examples]);
{{/if}}
</script>

# {{name}}

{{#each examples}}
### {{titleCase this}}

<Example name="{{this}}" />
{{/each}}`,
  },
};

const paths = {
  materialify: 'packages/svelte-materialify/src',
  docs: 'packages/docs/src/routes',
  examples: 'packages/docs/src/examples',
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${paths.materialify}/components/{{name}}/_variables.scss`,
        template: templates.component.variables,
      },
      {
        type: 'add',
        path: `${paths.materialify}/components/{{name}}/{{name}}.scss`,
        template: templates.component.scss,
      },
      {
        type: 'add',
        path: `${paths.materialify}/components/{{name}}/{{name}}.svelte`,
        template: templates.component.svelte,
      },
      {
        type: 'add',
        path: `${paths.materialify}/components/{{name}}/index.js`,
        template: templates.component.index,
      },
      {
        type: 'append',
        path: `${paths.materialify}/index.js`,
        template: "export { default as {{name}} } from './components/{{name}}';",
      },
    ],
  });

  plop.setGenerator('doc', {
    description: 'create a new doc',
    prompts: [
      {
        type: 'list',
        name: 'folder',
        message: 'type',
        choices: ['components', 'actions', 'styles', 'getting-started'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'title',
      },
      {
        type: 'input',
        name: 'examples',
        message: 'examples (separate with ,)',
        filter: (v) => v.split(',').filter((x) => !!x),
      },
    ],
    actions: ({ examples }) => {
      const actions = [
        {
          type: 'add',
          path: `${paths.docs}/{{folder}}/{{dashCase name}}.svx`,
          template: templates.doc.svx,
        },
      ];
      if (examples.length) {
        actions.push({
          type: 'add',
          path: `${paths.examples}/{{folder}}/{{camelCase name}}/index.js`,
          template: templates.doc.index,
        });
        examples.forEach((example) => {
          actions.push({
            type: 'add',
            path: `${paths.examples}/{{folder}}/{{camelCase name}}/${example}.svelte`,
          });
        });
      }
      return actions;
    },
  });
};
