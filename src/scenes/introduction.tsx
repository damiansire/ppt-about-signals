import { makeScene2D, Code, lines, Circle, Line, Txt } from "@motion-canvas/2d";
import {
  beginSlide,
  createRef,
  createSignal,
  DEFAULT,
  Vector2,
  waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  view.fill("#000000");
  view.add(
    <Code
      ref={code}
      fontSize={28}
      offsetX={-1}
      x={-400}
      code={`\
function hello() {
  console.log('Hello');
}`}
    />
  );

    // select all instances of "hello" (case-insensitive)
  yield* code().selection(code().findAllRanges(/hello/gi), 1);
  yield* waitFor(1);
  yield* beginSlide("first slide");



});
