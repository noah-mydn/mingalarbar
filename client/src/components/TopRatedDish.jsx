import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import CircleIcon from "@mui/icons-material/Circle";

export const TopRatedDish = ({ tabletScreen }) => {
  const [isHover, setIsHover] = React.useState(null);

  const handleHover = (text) => {
    setIsHover(text);
  };

  const resetHover = () => {
    setIsHover(null);
  };
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <ArrowForwardIosIcon color="text" />,
    prevArrow: <ArrowBackIosIcon color="text" />,

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const ImageWrapper = styled(Box)({
    position: "relative",
    overflow: "hidden",
    borderRadius: 4,
    marginBottom: "2em",
    width: tabletScreen ? "230px" : "280px",
    height: tabletScreen ? "230px" : "280px",
    "&:hover .slide-in": {
      transform: "translateY(0)",
    },
  });

  const SliderImage = ({ url, text }) => {
    return (
      <ImageWrapper
        onMouseOver={() => handleHover(text)}
        onMouseLeave={resetHover}
      >
        <Box
          component="img"
          src={url}
          alt={text}
          borderRadius={4}
          display="block"
          sx={{
            width: "100%",
            height: "100%",
            objectPosition: "center",
            objectFit: "cover",
            filter: isHover === text ? "blur(2px)" : "",
            transition: "0.5s ease-in-out",
          }}
        />
        <Typography
          variant="subtitle1"
          component="subtitle1"
          color="#fff"
          className="slide-in"
          sx={{
            position: "absolute",
            inset: 0,
            fontSize: "1.5em",
            fontWeight: "bolder",
            textShadow: "1px 1px #000",
            padding: "0.3em",
            background: "rgba(0, 0, 0, 0.75)",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.5s ease-in-out",
            transform: "translateY(-100%)",
          }}
        >
          {text}
        </Typography>
      </ImageWrapper>
    );
  };

  return (
    <Slider
      {...settings}
      className="slick"
      centerMode={true}
      centerPadding="15px"
    >
      <SliderImage
        url="https://cdn.pixabay.com/photo/2018/08/10/12/17/mohinga-3596735_1280.jpg"
        text="Mohinga"
      />
      <SliderImage
        url="https://raffimatcha.files.wordpress.com/2017/06/390ac-img_6975.jpg"
        text="Thick Rice Noodle"
      />
      <SliderImage
        url="https://leprosymission.contentfiles.net/media/images/TheLeprosyMIssionRecipeClub_ShanN.2e16d0ba.fill-1200x630.jpg"
        text="Shan Noodle"
      />
      <SliderImage
        url="https://live.staticflickr.com/5602/14962115693_56a30ace3d_b.jpg"
        text="Pickled Tea leaf salad"
      />
    </Slider>
  );
};
