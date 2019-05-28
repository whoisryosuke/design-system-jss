import { addParameters, configure } from "@storybook/react";

// Option defaults:
addParameters({
  options: {
    /**
     * Name to display in the top left corner
     * @type {String}
     */
    name: "JSS Design System",
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: "https://github.com/whoisryosuke",
    /**
     * Show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * Display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: "bottom",
    /**
     * Sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * Regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * Sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: undefined
  }
});

const req = require.context(
  "../src/components/",
  true,
  /(\.story\.js$)|(\.story\.jsx$)/
);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
