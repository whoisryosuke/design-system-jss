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

GatsbyJS works by creates a GraphQL data layer using the JSON, and then generates the static documentation from the GraphQL. Running the Gatsby build process creates pages for each component, Markdown files, and any Gatsby page components.

### Editing the Sidebar

The sidebar links are generated from the pages array inside `docs/data/sidebar.json`. The array accepts page objects with slug and title parameters (`[ { slug: '/about', title: 'About' }]`).

You can always just override these inside `docs/src/components/sidebar.js`. @todo: Add a render-prop override.

## Todo

### High Priority

- More components

### Low Priority

- Integrate Jest + Storybook for testing

### Thoughts

- Install Lerna to manage sub-packages, allowing users to install specific components (maybe separate branch?)
