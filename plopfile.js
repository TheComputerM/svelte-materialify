module.exports = (plop) => {
  const components = 'packages/svelte-materialify/src';
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
        path: `${components}/components/{{name}}/_variables.scss`,
        template: "@import '../../styles/variables';",
      },
      {
        type: 'add',
        path: `${components}/components/{{name}}/{{name}}.scss`,
        template: "@import './variables';",
      },
      {
        type: 'add',
        path: `${components}/components/{{name}}/{{name}}.svelte`,
        template: "<style lang='scss' src='./{{name}}.scss'></style>",
      },
      {
        type: 'add',
        path: `${components}/components/{{name}}/index.js`,
        template: "export { default } from './{{name}}.svelte';\n",
      },
      {
        type: 'append',
        path: `${components}/index.js`,
        template: "export { default as {{name}} } from './components/{{name}}/';",
      },
    ],
  });

  const docs = 'packages/docs/src/routes';
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
        message: 'title of page',
      },
      {
        type: 'confirm',
        name: 'example',
        message: 'are there examples?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${docs}/{{folder}}/{{dashCase name}}.svx`,
        template: `---
title: {{name}}
---

{{#if example}}
<script context="module">
export async function preload() {
  let examples = await this.fetch('examples/{{folder}}/{{camelCase name}}.json');
  examples = await examples.json();
  return { examples }
}
</script>
{{/if}}

<script>
  {{#if example}}
  import { Example, API } from '@shared';
  import * as Examples from '@examples/styles/{{camelCase name}}';
  export let examples;
  {{/if}}
</script>

# {{name}}`,
      },
    ],
  });

  const examples = 'packages/docs/src/examples';
  plop.setGenerator('examples', {
    description: 'create new examples',
    prompts: [
      {
        type: 'list',
        name: 'folder',
        message: 'type',
        choices: ['components', 'actions', 'styles', 'getting-started'],
      },
      {
        type: 'input',
        name: 'name of folder',
        message: 'name',
      },
      {
        type: 'input',
        name: 'examples',
        message: 'examples (separated by ,)',
        filter: (value) => value.replace(/ /g, '').split(','),
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: `${examples}/{{folder}}/{{camelCase name}}/index.js`,
          template:
            "{{#each examples}}export { default as {{this}} } from './{{this}}.svelte';\n{{/each}}",
        },
      ];

      data.examples.forEach((example) => {
        actions.push({
          type: 'add',
          path: `${examples}/{{folder}}/{{camelCase name}}/${example}.svelte`,
        });
      });

      return actions;
    },
  });
};
