import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme/theme'

export const Story = ({mobileScreen,tabletScreen}) => {
  return (
   <Box display='flex' justifyContent='space-between'
   alignItems='center' width='100%' mt={tabletScreen ? 2 : 0}
   flexDirection={tabletScreen ? 'column-reverse' : 'row'}>
        <Typography variant='subtitle1' color='#fff' 
        py={tabletScreen ? 2 : 0}
        width={mobileScreen ? '100%' : tabletScreen ? '85%' : '50%'}>
        Our restaurant is a Burmese eatery that opened its doors in 2016, with a focus on offering a unique dining experience that showcases the rich flavors of Burma. Our specialty is Burmese salads and noodles, and we take pride in using only the freshest ingredients to create authentic dishes that transport your taste buds straight to Myanmar. Come and savor the flavors of Burma with us today.
        </Typography>
        <Box component='img' src='./assets/images/story.png'
        alt='Burmese pickled tea leaf salad'
        width={mobileScreen ? '70%': tabletScreen ? '50%' :'32%'}/>
   </Box>
  )
}
