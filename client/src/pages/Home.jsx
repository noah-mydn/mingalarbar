import styled from "@emotion/styled";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import { Story } from "../components/Story";
import { TopRatedDish } from "../components/TopRatedDish";
import { DisplayMenu } from "../components/DisplayMenu";
import { Reviews } from "../components/Reviews";
import { Blogs } from "../components/Blogs";
import { useSelector } from "react-redux";
import { menuSelector } from "../redux/selector/selector";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { LeftBox, RightBox } from "../styledComponents/home";

export const Home = ({ mobileScreen, tabletScreen }) => {
  const [greeting, setGreeting] = React.useState("");
  const menu = useSelector(menuSelector);

  const ButtonHome = styled(Button)({
    display: "flex",
    width: tabletScreen ? "230px" : "270px",
    margin: "1em 0",
    padding: "0.8em 1em",
    borderRadius: 16,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: ".15rem",
    transition: "all .3s",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    //boxShadow: "1px 1px 5px 1px #000",

    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: theme.palette.secondary.main,
      borderRadius: 16,
      zIndex: -2,
    },
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0%",
      height: "100%",
      background: theme.palette.info.main,
      transition: "all .3s",
      borderRadius: 16,
      zIndex: -1,
    },
    "&:hover": {
      color: "#000",
      //boxShadow: "1px 1px 5px 1px #000",

      "&:before": {
        width: "100%",
        borderRadius: 12,
      },
    },
  });

  React.useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 4 && hours < 12) {
      setGreeting("Good morning!");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Good afternoon!");
    } else if (hours >= 18 && hours < 24) {
      setGreeting("Good evening!");
    } else {
      setGreeting("Are you looking for a midnight snack?");
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} position="relative" columnGap={0} rowGap={0}>
        <Box
          component="img"
          src={
            mobileScreen
              ? "./assets/images/home-mobile.png"
              : tabletScreen
              ? "./assets/images/home-tablet.png"
              : "./assets/images/home-desktop.jpg"
          }
          alt="home page banner"
          sx={{
            objectFit: "cover",
          }}
          width="100%"
          height="100vh"
        />

        <Grid
          item
          md={7}
          xs={12}
          width="100%"
          height="100%"
          position="absolute"
          top={0}
          display="flex"
          flexDirection="column"
          justifyContent={mobileScreen ? "flex-start" : "center"}
          alignItems={mobileScreen ? "center" : "start"}
          ml={mobileScreen ? 0 : 4}
          mt={mobileScreen ? 12 : 0}
        >
          <Typography
            variant={mobileScreen ? "h5" : "h4"}
            component={mobileScreen ? "h5" : "h4"}
            color={theme.palette.tertiary.main}
            sx={{ textShadow: "1px 1px 2px #888" }}
            width={mobileScreen ? "100%" : tabletScreen ? "85%" : "90%"}
            textTransform="uppercase"
            fontFamily="Courgette, cursive"
            mb={mobileScreen ? 0 : 4}
            textAlign={mobileScreen ? "center" : "left"}
          >
            A Taste of Burma, <br /> Right at Your Table!
          </Typography>

          <ButtonHome>
            <Typography
              variant={tabletScreen ? "body1" : "h6"}
              fontFamily="Jost"
              textAlign="left"
            >
              Order Now &nbsp;
            </Typography>
            <ArrowRightAltIcon />
          </ButtonHome>
          <ButtonHome>
            <Typography
              variant={tabletScreen ? "body1" : "h6"}
              fontFamily="Jost"
              textAlign="left"
            >
              Book a Table &nbsp;
            </Typography>
            <ArrowRightAltIcon />
          </ButtonHome>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={-2} bgcolor={theme.palette.secondary.main}>
        <Story mobileScreen={mobileScreen} tabletScreen={tabletScreen} />
      </Grid>
      <Grid item xs={12} px={2} py={4} bgcolor={theme.palette.secondary.dark}>
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color={theme.palette.tertiary.main}
          gutterBottom={0}
          mt={2}
          mb={4}
        >
          Top-rated Menu
        </Typography>
        <TopRatedDish tabletScreen={tabletScreen} />
      </Grid>
      <Grid item xs={12} bgcolor="white">
        <Typography
          variant="h4"
          component="h4"
          my={2}
          textAlign="center"
          color="secondary"
        >
          {greeting}
        </Typography>
        <DisplayMenu
          tabletScreen={tabletScreen}
          mobileScreen={mobileScreen}
          menu={menu}
        />
      </Grid>
      <Grid item xs={12} px={2} py={4} bgcolor={theme.palette.secondary.dark}>
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color="primary"
          gutterBottom={0}
          mt={2}
          mb={4}
        >
          Our Blogs
        </Typography>
        <Blogs />
      </Grid>
    </Grid>
  );
};
