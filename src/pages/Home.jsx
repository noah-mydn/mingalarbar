import styled from '@emotion/styled';
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import theme from '../theme/theme';
import { Story } from '../components/Story';
import { TopRatedDish } from '../components/TopRatedDish';

export const Home = ({mobileScreen,tabletScreen}) => {

    const OrderButton = styled(Button) ({
        width:'280px',
        color:'#fff',
        fontWeight:'bolder',
        letterSpacing:'0.12em',
        textShadow:'2px 1px #000',
        border:'2px solid white',
        padding:'0.5em',
        '&:hover':{
            background:'rgba(0,0,0,0.3)',
            color:'#fff',
        }
       
    });

    const ReservationButton = styled(Button) ({
        marginTop: '2em',
        width:'280px',
        color:'#fff',
        fontWeight:'bolder',
        letterSpacing:'0.12em',
        textShadow:'2px 1px #000',
        border:'2px solid white',
        padding:'0.5em',
        '&:hover':{
            background:'rgba(0,0,0,0.3)',
            color:'#fff',
        }
    });

  return (
    <Grid container>
        <Grid item xs={12} position='relative' columnGap={0} rowGap={0}>
            <Box component='img' src='./assets/images/restaurant.jpg'
            alt='interior design of the restaurant' 
            sx={{objectFit:mobileScreen ? 'cover' : ''}}
            width='100%'
            height='100vh'/>

            <Grid item xs={12} 
            width='100%'
            height='100%'
            position='absolute' 
            top={0} 
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Typography variant={mobileScreen ? 'h4' : 'h3'} component={mobileScreen ? 'h4' : 'h3'} color='#ff8c00'
            sx={{textShadow:'3px 1px #420002'}} fontFamily='Courgette, cursive'
            mb={4} textAlign='center'
            >
                Crafted with care, served with pride
            </Typography>
            <OrderButton>
                <Typography variant='h5'
                fontFamily='Mulish'>Order Now</Typography>
            </OrderButton>
            <ReservationButton>
            <Typography variant='h5'
            fontFamily='Mulish'>Book a Table</Typography>
            </ReservationButton>
            </Grid>
        </Grid>
        <Grid item xs={12} px={6} bgcolor={theme.palette.secondary.light} >
            <Typography variant='h4' component='h4'
            textAlign={tabletScreen ? 'center' : 'start'}
            color='primary' gutterBottom={0} mt={2}
            padding={0}>
                Our Story
            </Typography>
            <Story mobileScreen={mobileScreen} tabletScreen={tabletScreen}/>
        </Grid>
        <Grid item xs={12} px={2} py={4} bgcolor={theme.palette.secondary.dark}>
        <Typography variant='h4' component='h4'
            textAlign='center'
            color='primary' gutterBottom={0} mt={2} mb={4}>
                Top-rated Menu
            </Typography>
            <TopRatedDish tabletScreen={tabletScreen}/>
        </Grid>
        <Grid item xs={12} px={2} bgcolor='#fff'>
            <Typography variant='h4' component='h4'></Typography>
        </Grid>
    </Grid>
  )
}
