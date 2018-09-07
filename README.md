# JSS Design System Boilerplate

Boilerplate Design System using JSS and ReactJS

## Development

This project primarily uses StorybookJS for development.

### Quick Start

1. `git clone` this project
1. `npm install`
1. `npm run storybook` or `npm run dev`

### Creating components

Make a new folder in the components folder, make sure the folder name is unspaced and Pascal Case (ExampleComponentName). Create a JS file with the same folder name (or appropriate variation).

Requirements

- Documented PropTypes and default props.
- Storybook examples are labeled with a `.story.js` filename.

### Project Structure

The goal is to keep the package as lightweight and minimal as possible, so there's not much to it. If you look at the `package.json`, you'll see a few dev dependencies like Babel, React, and Storybook.

In terms of actual dependencies, we only have React-JSS, since it's used in the actual components. React and react-dom are peer-deps (since the project's using this will be react-based).

#### Folder Structure

- /components/
- /components/ComponentName/
- /components/ComponentName/ComponentName.js
- /components/ComponentName/index.js - contains exports of all components in folder
- .babelrc - env and react Babel presets.

## Documentation

### Getting Started

1. Generate new JSON file containing component docs from the project: `npm run docs:generate`
1. Run the documentation development server: `cd docs && npm run develop`

### Process

The documentation is built using a combination of GatsbyJS and React-Docgen. A JSON file of all the component documentation is generated with a Node script that uses react-docgen. React-docgen parses components for any JSDoc formatted comments and props, and the Node script saves this output to a JSON file (`docs/data/components.json`).

GatsbyJS works by creates a GraphQL data layer using the JSON, and then generates the static documentation from the GraphQL. Running the Gatsby build process creates pages for each component, Markdown files, and any Gatsby page components. Inside the `gatsby-node.js` you'll find the scripts that generate pages from GraphQL queries.

Component documentation pages are generated from any MDX files inside component folders (e.g. `/src/components/Button/Button.mdx`).

Regular pages are generated from either MDX files contained in the `/docs/pages/` or JSX files in `/docs/src/pages/`.

### Adding Component Documentation

Component documentation is automatically generated from any MDX files inside the component's folder (e.g. `/src/components/Button/Button.mdx`).

MDX files at the minimum require:

- Frontmatter with title and menu attributes
- Any local imports must be appended with `../../../../` (see below)

```markdown
---
name: Button
menu: Components
---

import Button from '../../../../src/components/Button/Button'

# Button

Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them.

### Best practices

- Group buttons logically into sets based on usage and importance.
- Ensure that button actions are clear and consistent.
- The main action of a group set can be a primary button.
- Select a single button variation and do not mix them.

## Properties

## Basic usage

<Button>Click me</Button>
```

#### Local component imports

Since gatsby-mdx creates a cache for the parsed MDX for located in `docs/.cache/`, you have to append any local imports with the appropriate amount of `../`. For example, the <Button> would be: `import Button from '../../../../src/components/Button/Button'`.

> Ideally you'd either create a Webpack config to account for this, or add the design system as a dependency to the documentation and import from there. The latter hinders development, as any local component edits won't be reflected in docs until pushed to production.

### Editing the Sidebar

The sidebar page links are automatically generated from the pages array inside the `gatsby-config.json`. The array accepts page objects with slug and title parameters (`[ { slug: '/about', title: 'About' }]`).

The component pages are automatically generated from any MDX files imported from component folders. The frontmatter contains the title and menu "category". The title is generated from the filename, and the category is appended to the filename to generate page slugs (e.g. `/<category>/<filename>` = `/elements/button/`)

You can always just override these inside `docs/src/components/sidebar.js`. @todo: Add a render-prop override.

## Todo

### High Priority

- More components

### Low Priority

- Integrate Jest + Storybook for testing

### Thoughts

- Install Lerna to manage sub-packages, allowing users to install specific components (maybe separate branch?)
