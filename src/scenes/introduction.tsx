import { makeScene2D, Img, View2D, Circle } from "@motion-canvas/2d";
import {
  Color,
  Reference,
  beginSlide,
  createRef,
  waitFor,
} from "@motion-canvas/core";
import sliderTemplate1 from "../../images/template/slider1.png";
import { SetBackground } from "../libs/layout";

export default makeScene2D(function* (view) {
  const backgroundImg = createRef<Img>();
  view.add(<Img src={sliderTemplate1} ref={backgroundImg} />);
  SetBackground(backgroundImg, view);

  const myCircle = new Circle({
    size: 300, // Adjust the radius as needed
    stroke: new Color("#a7a7a7"), // Set the stroke color to red (or any color you want)
    lineWidth: 5, // Adjust the line width as needed
  });

  view.add(myCircle);

  yield* waitFor(1);
  yield* beginSlide("first slide");
});
