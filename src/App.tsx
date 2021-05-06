import React from 'react';
import MenuComponent from './components/menu/menu.component';
import TestPage from './pages/test/test.page';
import HomePage from './pages/home/home.page';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import ModalComponent from './components/modal/modal.component';
import { Location } from 'history';
import { AppWrapper } from './App.styles';

type LocationState = {
  background: Location
}

function App() {
  const location = useLocation<LocationState>();
  const background = location.state && location.state.background;
  const modalFallback = '/pages/1';

  return (
    <AppWrapper>
      <header>
        <MenuComponent />
      </header>
      <section className={'page'}>
        <Switch location={background || location}>
          <Route path={'/'} exact component={HomePage} />
          <Route path={'/pages/:id'} component={TestPage} />
        </Switch>
        <Route path={'/modal'}>
          { background ?
            <ModalComponent background={background} /> :
            <Redirect to={modalFallback} />
          }
        </Route>
      </section>
    </AppWrapper>
  );
}

export default App;

