import colors from "./colors";
import * as mixins from "./mixins";

export const container = {
  display: "flex",
  flex: 1,
  backgroundColor: colors.background,
  alignItems: "center",
  minHeight: "100vh",
  flexDirection: "column",
};

export const box = {
  marginTop: 50,
};

export const input = {
  width: mixins.width(200),
  height: mixins.height(30),
  borderRadius: 5,
  paddingLeft: 10,
};

export const button = {
  width: mixins.width(80),
  height: mixins.height(35),
  borderRadius: 5,
  color: "#fff",
};

export const select = {
  width: mixins.width(200),
  height: mixins.height(35),
  borderRadius: 5,
  paddingLeft: 10,
};

export const table = { marginTop: 10 };
