import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';

// Option defaults:
addDecorator(
  withOptions({
    name: 'StoryBook',
    hierarchyRootSeparator: /\|/
  })
);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
