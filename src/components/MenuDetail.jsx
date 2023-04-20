import { Container } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const MenuDetail = () => {

    const location =  useLocation();
    console.log(location.state.menu);

  return (
    <Container sx={{minHeight:'100vh', 
                    marginTop:'8em',}}>
        dfs
    </Container>
  )
}
