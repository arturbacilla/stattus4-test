import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TagsContext from '../context/TagsContext';

const pages = ['Home', 'Pontos de Instalação', 'Relatórios'];
const pageIcons = [<HomeOutlinedIcon />, <PodcastsOutlinedIcon />, <DescriptionOutlinedIcon />];
const settings = ['Admin', 'Alterar Senha', 'Parâmetros de configuração', 'Gerenciar TAGs', 'Sair'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { setModalOpen } = useContext(TagsContext);
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openTagsModal = () => {
    setModalOpen(true);
    handleCloseUserMenu();
  };

  const handleClick = (menu) => {
    setSelectedMenu(menu);
    handleCloseUserMenu();
  };

  const settingsActions = [
    handleCloseUserMenu,
    handleCloseUserMenu,
    handleCloseUserMenu,
    openTagsModal,
    handleCloseUserMenu,
  ];

  return (
    <AppBar position="static" style={{ background: '#FAFAFA' }}>
      <Container sx={{ minWidth: '100vw', margin: '0' }}>
        <Toolbar
          disableGutters
          sx={{ minWidth: '100%' }}
        >
          <Box
            component="img"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            alt="logo"
            src="/stattus4.png"
          />
          <Box aria-label="menu sandwich" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="dropdown"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            alt="logo"
            src="/stattus4.png"
          />
          <Box
            aria-label="menu horizontal"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, margin: '0px 30px' }}
          >
            {pages.map((page, i) => (
              <Button
                variant={selectedMenu === page ? 'contained' : 'text'}
                key={page}
                onClick={() => handleClick(page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Box sx={{ display: 'flex' }}>
                  {pageIcons[i]}
                  {page}
                </Box>
              </Button>
            ))}
          </Box>
          <Typography id="nome-cliente">
            CLIENTE
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ExpandCircleDownOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <MenuItem key={setting} onClick={settingsActions[i]}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
