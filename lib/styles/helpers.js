import * as colors from "./colors";
import { buttonSizes } from "./sizes";

function getColorsOptions() {
  return Object.keys(colors);
}

function getButtonSizesOptions() {
  return Object.keys(buttonSizes);
}

/*
function getTextSizesOptions(){
  return Object.keys(textSizes);
}

function getBorderSizesOptions(){
  return Object.keys(borderSizes);
}

function getRadiusSizesOptions(){
  return Object.keys(radiusSizes);
}

function getBorderTypesOptions(){
  return Object.keys(borderTypes);
}

function getAvatarSizesOptions(){
  return Object.keys(avatarSizes);
}
*/

export { getColorsOptions, getButtonSizesOptions };
