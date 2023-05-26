import { styled } from "@mui/system";

export const MyPageWrapper = styled("div")({
  height: "calc(100vh - 80px)",

  "@media screen and (min-width: 1200px)": {
    display: "flex",
    width: "100%",
  },
});
