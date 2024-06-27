import { Img, View2D } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

export function SetBackground(imageRef: Reference<Img>, view: View2D) {
  const img = imageRef(); // Get the Img node
  const { width: imgWidth, height: imgHeight } = img.naturalSize(); // Get original image dimensions
  const { width: screenWidth, height: screenHeight } = view.size(); // Get screen dimensions

  const imgRatio = imgWidth / imgHeight;
  const screenRatio = screenWidth / screenHeight;

  let scale, positionX, positionY;

  // Cover Mode (fills screen, may crop image)
  if (imgRatio > screenRatio) {
    scale = screenWidth / imgWidth;
    positionY = (screenHeight - imgHeight * scale) / 2;
    positionX = 0;
  } else {
    scale = screenHeight / imgHeight;
    positionX = (screenWidth - imgWidth * scale) / 2;
    positionY = 0;
  }

  img.scale([scale, scale]); // Set scale
  img.position([positionX, positionY]); // Set position
}
