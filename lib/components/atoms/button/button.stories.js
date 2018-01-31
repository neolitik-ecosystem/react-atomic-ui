import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, select } from "@storybook/addon-knobs";

import Button from "./index";
import {
  getColorsOptions,
  getButtonSizesOptions
} from "../../../styles/helpers";

const buttonStories = storiesOf("Button", module);
buttonStories.addDecorator(withKnobs);
buttonStories.add(
  "Basic button",
  withInfo("About my component")(() => <Button />)
);

buttonStories.add(
  "Button playground",
  withInfo("About my component")(() => (
    <Button
      onClick={action("clicked")}
      bgColor={select("Backgound color", getColorsOptions(), "danger")}
      size={select("Size", getButtonSizesOptions(), "medium")}
      fontColor={select("Font color", getColorsOptions(), "darkSmoke")}
    >
      I'm a button you can play with
    </Button>
  ))
);
