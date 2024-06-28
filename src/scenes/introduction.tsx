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
import {
  instagramIcon,
  linkedinIcon,
  meExpertImg,
  sliderTemplate1,
  twitterIcon,
} from "../assets";

export default makeScene2D(function* (view) {
  const backgroundImg = _setBackground(view);
  const circleRefs = circleWithContent(view, { x: 511, y: -236 });
  const title = addText(view, "Angular Signals", {
    x: -400,
    y: 0,
    fontSize: 100,
  });
  const subTitle = addText(view, "A deep dive into the new features", {
    x: -450,
    y: 150,
    fontSize: 40,
  });

  const meExpert = createRef<Img>();
  view.add(
    <Img src={meExpertImg} ref={meExpert} scale={0.05} x={-665} y={300} />
  );

  const myText = new Txt({
    text: "Damian Sire\nGoogle Developer Expert\n@damiansire",
    fontFamily: "Arial",
    fontSize: 24,
    fill: "#333333",
    x: -420,
    y: 290,

    lineHeight: 24 + 10,
  });

  view.add(myText);

  const socialNetworks = [
    { icon: linkedinIcon },
    { icon: twitterIcon },
    { icon: instagramIcon },
  ];

  socialNetworks.forEach((element, index) => {
    view.add(<Img src={element.icon} x={0 + index * 96} y={350}></Img>);
  });

  addText(view, "Damian Sire", {
    x: socialNetworks.length * 96 + 70,
    y: 355,
    fontSize: 40,
  });

  //const scale = createSignal(1);
  //yield* all(circleRefs.content[0].fill("#e6a700", 1).to("#e13238", 1));
  //circleRefs.content[0].fill("#e6a700", 1).to("#e13238", 1),
  //circleRefs.content[0].scale(2, 1)
  yield* waitFor(1);
  yield* beginSlide("first slide");
});

function _setBackground(view: View2D) {
  const backgroundImg = createRef<Img>();
  view.add(<Img src={sliderTemplate1} ref={backgroundImg} />);
  SetBackground(backgroundImg, view);
  return backgroundImg;
}

function angularLogoGenerate(view: View2D): Path[] {
  const linearGradient2 = new Gradient({
    type: "linear",
    from: [-211.13, 480.28],
    to: [-208.38, 477.12],
    angle: (Math.atan2(477.12 - 480.28, -208.38 + 211.13) * 180) / Math.PI,
    stops: [
      { offset: 0, color: new Color("#ff31d9") },
      { offset: 1, color: new Color("#ff5be1") },
    ],
  });

  const elements = [
    {
      ref: createRef<Path>(),
      path: "M139.64,33.21l-4.65,69.05L90.49,11.71l49.15,21.49h0Z",
    },
    {
      ref: createRef<Path>(),
      path: "M108.82,122.5l-33.62,18.13-33.62-18.13,6.84-15.66h53.57l6.84,15.66Z",
    },
    {
      ref: createRef<Path>(),
      path: "M75.2,46.08l17.62,40.47H57.57l17.62-40.47h0Z",
    },
    {
      ref: createRef<Path>(),
      path: "M15.36,102.25L10.75,33.21,59.91,11.71,15.37,102.26h0Z",
    },
  ];

  elements.map((element) =>
    view.add(
      <Path
        ref={element.ref}
        lineWidth={4}
        stroke={"#e13238"}
        data={element.path}
        fill={linearGradient2}
        scale={1.2}
      ></Path>
    )
  );

  const elementsRef = elements.map((x) => x.ref());
  return elementsRef;
}

function addText(
  view: View2D,
  text: string,
  props: { x: any; y?: number; fontSize: any }
) {
  const title = createRef<Txt>();
  view.add(
    <Txt
      ref={title}
      x={props.x}
      fontSize={props.fontSize}
      y={props.y}
      fontFamily={""}
    />
  );

  title().text(text);
  return title;
}

function circleWithContent(
  view: View2D,
  center: { x: number; y: number }
): {
  circle: Circle;
  content: Path[];
} {
  const circleRadius = 300;
  const myCircle = new Circle({
    size: circleRadius, // Adjust the radius as needed
    stroke: new Color("#a7a7a7"), // Set the stroke color to red (or any color you want)
    lineWidth: 5, // Adjust the line width as needed
    x: center.x,
    y: center.y,
    fill: "#FFFFFF",
  });

  view.add(myCircle);
  /*
  const angularLogoRef = createRef<Img>();
  view.add(<Img src={angularLogo} ref={angularLogoRef} scale={0.6} />);
*/
  const angularLogoRefs = angularLogoGenerate(view);

  angularLogoRefs.forEach((element) => {
    element.position.x(center.x - 85);
    element.position.y(center.y - 85);
  });

  return {
    circle: myCircle,
    content: angularLogoRefs,
  };
}
