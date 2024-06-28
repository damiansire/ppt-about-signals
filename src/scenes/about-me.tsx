import {
  Circle,
  Gradient,
  Img,
  Path,
  Txt,
  View2D,
  makeScene2D,
} from "@motion-canvas/2d";
import { Color, beginSlide, createRef, waitFor } from "@motion-canvas/core";
import { SetBackground } from "../libs/layout";
import { sliderTemplate2 } from "../assets";

export default makeScene2D(function* (view) {
  _setBackground(view);
});

function _setBackground(view: View2D) {
  const backgroundImg = createRef<Img>();
  view.add(<Img src={sliderTemplate2} ref={backgroundImg} />);
  SetBackground(backgroundImg, view);
  return backgroundImg;
}
