import defaultTheme, {
  ColorType,
  ColorIndex,
  ThemeProps,
  SpaceIndex,
  FontSize,
  LineHeight,
} from "./theme";
// import { fontSize } from "./selectors";

function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getColor(
  type: ColorType,
  index: ColorIndex,
  props?: ThemeProps
) {
  return getTheme(props).colors[type][index];
}

export function getSpace(index: SpaceIndex, props?: ThemeProps) {
  return getTheme(props).space[index] + "px";
}

export function getFontSize(fontSize: FontSize, props?: ThemeProps) {
  return getTheme(props).fontSize[fontSize] / 16 + "rem";
}

export function getLineHeight(lineHeight: LineHeight, props?: ThemeProps) {
  return getTheme(props).lineHeight[lineHeight] / 16 + "rem";
}
