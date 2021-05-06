import React from 'react';
import MenuComponent from './components/menu/menu.component';
import TestPage from './pages/test/test.page';
import HomePage from './pages/home/home.page';
import { Route, Switch } from 'react-router-dom';
import { AppWrapper } from './App.styles';


function App() {
  return (
    <AppWrapper>
      <header>
        <MenuComponent />
      </header>
      <section className={'page'}>
        <Switch>
          <Route path={'/'} exact component={HomePage} />
          <Route path={'/pages/:id'} component={TestPage} />
        </Switch>
      </section>
    </AppWrapper>
  );
}

export default App;

