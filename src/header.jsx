import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import  Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';  


function Header() {
    return (    
  <>
      <AppBar position='relative' >
        <Toolbar sx={{height:'100px'}}>
        <Typography variant='h3' component="div" className='logo' mx={9}>
          TMA
        </Typography>
        <Typography variant='h6'  mt={9} mx={1} sx={{color:'#ececec'}}>
          <div>
            <li type="none" href="#">Trang chủ</li>
          </div>
        </Typography>
        <Typography variant='h6'  mt={9} mx={4} sx={{color:'#ececec'}}>
        <div>
            <li type="none">Giới thiệu</li>
          </div>
        </Typography>
        <Box><Typography variant='h6'  mt={9} mx={2} sx={{color:'#ececec'}}>
        <div>
            <li type="none">Thông tin phòng trọ</li>
          </div>
        </Typography></Box>
        <Typography variant='h6'  mt={9} mx={3} sx={{color:'#ececec'}}>
        <div>
            <li type="none">Liên hệ</li>
          </div>
        </Typography>
        <Typography variant='h4' sx={{m:-29,color:'#ececec'}}>
          <div style={{fontSize:'30px'}}>CHO THUÊ PHÒNG TRỌ</div>
        </Typography>
        <Typography  mt={9} mx={25}/>
        <Typography mt={7} >
        <Button variant="contained" color="success">Đăng tin
        <AddCircleOutlineIcon sx={{ fontSize: 25 }}/>
        </Button>
        </Typography>
        <Typography mx={1} mt={7}>
        <div>
            <li type="none">Đăng nhập</li>
          </div>
        </Typography>
        <Typography mx={1} mt={7}>
        <div>
            <li type="none">Đăng ký</li>
          </div>
        </Typography>
        </Toolbar>
      </AppBar>
  </>
    );
  }
  export default Header;