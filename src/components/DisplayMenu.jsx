import styled from '@emotion/styled'
import { Box, Button, Typography, Grid, Chip, Stack } from '@mui/material'
import React from 'react'
import theme from '../theme/theme';

export const DisplayMenu = ({tabletScreen,mobileScreen, menu}) => {

  const MenuImage = styled(Box)({
    width: tabletScreen ? '180px':'150px',
    height: tabletScreen ? '180px':'150px',
    borderRadius:8,
    objectFit:'cover',
  });

  const OrderBtn = styled(Button)({
    background:theme.palette.secondary.main,
    padding:'0.5em 2em',
    fontSize:14,
    color:theme.palette.primary.main,
    marginTop:4,
    fontFamily:'Jost',
    '&:hover':{
      background:theme.palette.secondary.main,
    }
  });

  const ViewMore = styled(Button)({
    background:theme.palette.primary.main,
    padding:'0.5em 2em',
    fontFamily:'Jost',
    '&:hover':{
      background:theme.palette.primary.main,
    }
  });

  const MenuCard = styled(Grid)({
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:4,
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)',
    padding:mobileScreen ? '2em' : '2em 0 2em 1.5em',
  })

  console.log(menu);


  return (
    <Box display='flex' flexDirection='column' alignItems='center' my={2}>
      <Box py={2} display='flex' justifyContent='space-between' alignItems='center'
      flexWrap='wrap'>
          <Grid container columnGap={6} justifyContent='center'>
            {menu.slice(0,6).map((menu)=>{
              return (
                <MenuCard container item lg={3} md={5} sm={8} xs={10}
                key={menu.id} columnGap={0}
                my={3} 
                >
                  <Grid item md={5} sm={5} xs={12} display='flex' justifyContent='center'>
                    <MenuImage component='img' alt={menu.title} src={menu.imageUrl}/>
                  </Grid>
                  <Grid item md={7} sm={5} xs={12} display='flex' justifyContent='center'>
                    <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
                      <Typography variant='caption' fontWeight='bolder'
                      fontFamily='Jost' 
                      textAlign='center' gutterBottom>{menu.title}</Typography>
                      <Stack direction="row" spacing={1} display='flex' justifyContent='center' py={1}>
                      {menu.category.map((category)=>{
                        return (
                            <Chip label={category} color='primary' variant='filled' 
                            sx={{fontFamily:'Jost', fontSize:14}} />                      
                        )
                      })}
                      </Stack>
                      <Typography variant='body2' fontWeight='bolder' fontFamily='Jost'>
                        {menu.price}
                      </Typography>
                      <OrderBtn>Order</OrderBtn>
                    </Box>
                  </Grid>
                </MenuCard>
              )
            })}
          </Grid>
          
      </Box>
      <ViewMore color='secondary'>View More</ViewMore>
    </Box>
  )
}
