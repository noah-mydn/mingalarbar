import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';

export const Reviews = ({tabletScreen}) => {

    var settings = {
        dots: false,
        infinite: true,
        speed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'',
        prevArrow:'',
      };

      const ReviewContainer = styled(Box)({
        width:'80%',
        padding:'1em',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'column',
      });

      const Review = (url) => {
        return (
            <ReviewContainer>
                <Box component='img' src={url} alt='customer-profile-picture'
                width='50px' height='50px'/>
                <Typography variant='h6' component='h6'>Customer Name</Typography>
                <Typography variant='body2' component='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum veritatis nemo?</Typography>
            </ReviewContainer>
        )
      }



  return (
    <Slider {...settings}
    className='slick-review'
    centerMode={true}
    centerPadding='2em'
   >
        <Review url="https://travelfoodatlas.com/wp-content/uploads/2022/09/Mohinga.jpg"/>
        <Review url="https://raffimatcha.files.wordpress.com/2017/06/390ac-img_6975.jpg" />
        <Review url="https://leprosymission.contentfiles.net/media/images/TheLeprosyMIssionRecipeClub_ShanN.2e16d0ba.fill-1200x630.jpg"/>
        <Review url="https://live.staticflickr.com/5602/14962115693_56a30ace3d_b.jpg"/>
    </Slider>
  )
}
