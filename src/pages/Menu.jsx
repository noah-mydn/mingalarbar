import React from 'react'
import theme from '../theme/theme'
import { CardMedia,  Grid,} from '@mui/material'
import { useSelector } from 'react-redux'
import { beveragesMenuSelector, menuSelector, noodleMenuSelector, otherMenuSelector, saladMenuSelector } from '../redux/selector/selector'
import styled from '@emotion/styled'

export const Menu = ({mobileScreen,tabletScreen}) => {

  
  //Selector collections
  const allMenu = useSelector(menuSelector);
  const noodleMenu = useSelector(noodleMenuSelector);
  const saladMenu = useSelector(saladMenuSelector);
  const beveragesMenu = useSelector(beveragesMenuSelector);
  const otherMenu = useSelector(otherMenuSelector);  

  const [Category, setCategory] = React.useState('All');
  const [menuItems, setMenuItems] = React.useState(allMenu);

  const categories = [
    {id:1, 
    category:"All", 
    image:"https://www.onmycanvas.com/wp-content/uploads/2020/12/shan-traditional-meal-burmese-food.jpeg"},

    {id:2, 
    category:"Noodles", 
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kaw_yay_khauk_swe.jpg/1200px-Kaw_yay_khauk_swe.jpg"},
    
    {id:3, 
    category:"Salads", 
    image:"https://i.ytimg.com/vi/YECgymJRsdI/maxresdefault.jpg"},

    {id:4, 
    category:"Beverages", 
    image:"https://lepetitjournal.com/sites/default/files/2019-08/Shwe%20Yin%20Aye.jpg"},

    {id:5, 
    category:"Other", 
    image:"https://www.thefooddictator.com/wp-content/uploads/2018/03/samosas.jpg"},
  ];

  
  const MenuCard = styled(Grid)({
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:4,
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)',
    padding:mobileScreen ? '2em' : '2em 0 2em 1.5em',
  });

  const CategoryBox = styled(CardMedia)({
    width:'100%',
    height:250,
    objectFit:'cover',
    objectPosition:'center',
    
  })

  return (
    <Grid container sx={{background:'#fff', 
                        minHeight:'100vh',
                        justifyContent:'center',
                        background:theme.palette.secondary.main,
                        paddingTop:'7em'}}>
      

        
    </Grid>
  )
}
