import { Box, Typography } from "@mui/material";
import React from "react";
import {
  ShadowContainer,
  MainContainer,
  LearnMoreButton,
} from "../styledComponents/story";
import theme from "../theme/theme";

export const Story = ({ mobileScreen, tabletScreen }) => {
  return (
    <Box
      width="100%"
      height={tabletScreen ? "auto" : "70vh"}
      display="flex"
      justifyContent="space-between"
      sx={{
        backgroundImage: tabletScreen
          ? "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.80)), url(./assets/images/about_one.png)"
          : "",
      }}

      //flexDirection={tabletScreen ? "column" : "row"}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        my={3}
        ml={tabletScreen ? 0 : 4}
      >
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color={theme.palette.tertiary.main}
          gutterBottom={0}
          my={4}
        >
          Our Story
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="#fff"
          py={tabletScreen ? 2 : 0}
          width={mobileScreen ? "80%" : tabletScreen ? "50%" : "48%"}
        >
          {" "}
          Our restaurant is a Burmese eatery that opened its doors in 2016, with
          a focus on offering a unique dining experience that showcases the rich
          flavors of Burma.
        </Typography>
        <LearnMoreButton>Learn more</LearnMoreButton>
      </Box>
      <Box
        component="img"
        src="./assets/images/about_one.png"
        display={tabletScreen ? "none" : "block"}
      />

      {/* <Typography
        variant="subtitle1"
        color="#fff"
        py={tabletScreen ? 2 : 0}
        width={mobileScreen ? "100%" : tabletScreen ? "85%" : "50%"}
      >
        Our restaurant is a Burmese eatery that opened its doors in 2016, with a
        focus on offering a unique dining experience that showcases the rich
        flavors of Burma. Our specialty is Burmese salads and noodles, and we
        take pride in using only the freshest ingredients to create authentic
        dishes that transport your taste buds straight to Myanmar. Come and
        savor the flavors of Burma with us today.
      </Typography>*/}
    </Box>
  );
};
