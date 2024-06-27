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
  yield* code().selection(code().findAllRanges(/hello/gi), 0.6);
  yield* waitFor(0.3);
  yield* beginSlide("first slide");

  // select line 1
  yield* code().selection(lines(1), 0.6);
  yield* waitFor(0.3);
  yield* beginSlide("second slide");

  // reset the selection
  yield* code().selection(DEFAULT, 0.6);
  yield* waitFor(0.3);
  yield* beginSlide("trhi slide");

  yield* waitFor(0.3);
  const radius = createSignal(0);
  const area = createSignal(() => Math.PI * radius() * radius());
  const difX = 230;
  const scale = 20;
  const textStyle = {
    fontWeight: 700,
    fontSize: 11,
    offsetY: -1,
    padding: 20,
    cache: true,
  };

  yield* radius(10, 3).to(3, 2);
  yield* waitFor(1);
  yield* beginSlide("four slide");
});
