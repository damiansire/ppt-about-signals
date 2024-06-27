import { makeProject } from "@motion-canvas/core";

import example from "./scenes/introduction?scene";
import slider2 from "./scenes/slider2?scene";

import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";

Code.defaultHighlighter = new LezerHighlighter(
  parser.configure({
    // Provide a space-separated list of dialects to enable:
    dialect: "jsx ts",
  })
);
export default makeProject({
  scenes: [example /*, slider2*/],
});
