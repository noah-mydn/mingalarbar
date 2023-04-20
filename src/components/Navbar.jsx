import { AppBar, Box, Drawer, IconButton, Link, 
    List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme/theme'
import styled from '@emotion/styled';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { NavTabs, mobileNav } from '../navigationData/navigationData';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = (props) => {

    const [isNavTransparent, setIsNavTransparent] = React.useState(true);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const { WINDOW } = props;
    const tabletScreen = props.tabletScreen;
  

    //Styling Navigation
    const NavigationLink = styled(Link) ({
        display:'block',
        paddingBottom:'15px',
        textTransform:'uppercase',
        textDecoration:'none',
        position:'relative',
        fontSize:'1rem',
        cursor:'pointer',
        fontFamily:theme.typography.fontFamily,
        '&:hover': {
            color:theme.palette.text.main,
        },
        '&::before' : {transition:'all 0.5s'},
        '&::after':{
            position:'absolute',
            width:0,
            content:"''",
            background:theme.palette.primary.main,
            color:'transparent',
            height:'2px',
            right:0,
            bottom:0,
            left:0,
            transition:'all 0.5s'
        },
        '&:hover::after': {
            width:'100%'
        }
    });

    //Styling mobile navtext

    const CustomListItemText = styled(ListItemText)({
        color:theme.palette.primary.main,
        fontSize:14,
        textAlign:'center',
       
    });

    //Menu
    const CustomMenu = styled(Menu)({
        '& .MuiPaper-root':{
            background:theme.palette.secondary.main,
            padding:'1em 0.2em',
            
        }
    })

    //Menu Login 
    const CustomMenuItem = styled(MenuItem)({
        color:theme.palette.primary.main,
    })

    const handleLoginClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleLoginClose = () => {
        setAnchorEl(null);
      }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const showLoginPage = () => {
        console.log('logged in');
    }

    const drawer = (
        <Box py={2}
        bgcolor='transparent' 
        display='flex' 
        flexDirection='column' 
        justifyContent='space-between'
        sx={{minHeight:'90vh'}}>
            <Box display='flex' justifyContent='flex-end' px={1}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon color='primary'/>
                </IconButton>
            </Box>
              <List sx={{marginBottom:'auto'}}>
                {mobileNav.map((mobileNav)=>{
                    return (
                        <ListItem key={mobileNav.id}>
                            <ListItemButton>
                                <CustomListItemText>{mobileNav.navText}</CustomListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
              </List>
              
              <Typography variant='body2' color='primary' px={1} textAlign='center' fontStyle='italic'>
                "Food may be essential as fuel for the body, but good food is fuel for the soul"<br/><br/>
                <strong>- Malcolm Forbes</strong>
              </Typography>
            
        </Box>
    );

    
    
    
    React.useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          if (scrollTop > 0) {
            setIsNavTransparent(false);
          } else {
            setIsNavTransparent(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const container = WINDOW !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar 
    sx={{background:isNavTransparent ? 'transparent' : theme.palette.info.main,
        transition: 'background 0.5s ease-in-out'}}
    elevation={0} 
    px={1}>
            <Box display='flex' justifyContent='space-between' alignItems='center' p={1}>
                
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{display : tabletScreen ? 'block' : 'none'}}
            >
                <MenuIcon color='primary'/>
                </IconButton>

                <Box component='img' src='./assets/images/mingalarbar.png' width='120px' height='70px'/>
                <Box display={tabletScreen ? 'none':'flex'} alignItems='center'>
                    {NavTabs.map((nav,index)=>{
                        return(
                           <NavigationLink key={index} mx={2} color='primary'>{nav}</NavigationLink>
                        )
                    })}
                </Box>
                <Box display='flex'>
                    {/* <Box display='flex' alignItems='center' px={1}>
                        <LoginIcon color='primary' sx={{display:tabletScreen ? 'none' : 'block'}}/>
                        <Typography variant='body2' color='primary' pl={1}>
                            LogIn
                        </Typography>
                        <ArrowDropDownIcon color='primary' 
                        id="login-btn"
                        aria-controls={open ? 'login-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={tabletScreen ? handleLoginClick : showLoginPage}
                        sx={{display:tabletScreen ? 'block' : 'none',
                            cursor:'pointer'}}/>

                        <CustomMenu
                            elevation={0}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            id="login-menu"
                            MenuListProps={{
                            'aria-labelledby': 'login-btn',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleLoginClose}>
                                <CustomMenuItem onClick={handleLoginClose} disableRipple>
                                    <LoginIcon/>&nbsp;Log in</CustomMenuItem>
                                <CustomMenuItem onClick={handleLoginClose} disableRipple>
                                    <PersonIcon/>&nbsp;Sign up</CustomMenuItem>
                            </CustomMenu>
                            
                        
                    </Box>
                    <Box display={tabletScreen ? 'none':'flex'} alignItems='center' px={1}>
                            <PersonIcon color='primary'/>
                        <Typography variant='body2' color='primary' pl={1}>
                            SignUp
                        </Typography>
                    </Box> */}
                    <IconButton>
                        <ShoppingCartIcon color='primary'/>
                    </IconButton>
                </Box>
            </Box>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': 
                { boxSizing: 'border-box',
                backdropFilter:'blur(15px)',
                background:'transparent', 
                width: 230 },
            }}
            >
            {drawer}
        </Drawer>
    </AppBar>
  )
}
