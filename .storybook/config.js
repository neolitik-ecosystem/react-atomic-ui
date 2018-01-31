import { configure } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [
    /* Components used in story */
  ], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
  styles: {}, // Overrides styles of addon
  maxPropsIntoLine: 1 // Max props to display per line in source code
});

// addon-options
setOptions({
  name: "Playground",
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sidebarAnimations: true
});

const req = require.context("../lib", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
