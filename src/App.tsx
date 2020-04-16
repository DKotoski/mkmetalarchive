import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box, Typography } from '@material-ui/core';
import MainPageContainer from './pages/main-page';
import { ROUTES } from './lib/consts';
import { Route } from 'react-router';
import AlbumPage from './pages/album-page';
import BandPageContainer from './pages/band-page';

function App() {
  return (
    <Box>
      <Typography align="center" variant="h2">MK Metal Archive</Typography>
      <Route exact path={ROUTES.BAND_LIST} component={MainPageContainer} />
      <Route exact path={ROUTES.BAND_PAGE} component={BandPageContainer} />
      <Route exact path={ROUTES.ALBUM_PAGE} component={AlbumPage} />
    </Box>
  );
}

export default App;
