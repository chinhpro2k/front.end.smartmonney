import React, {lazy} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

interface IHistory {
  action: 'PUSH' | 'POP'
  goBack: () => any
  push: (path: string, state?: { [key: string]: any }) => any
}

export const AppRouter: React.FC<any>=()=> {
  const setHistory = (instance: BrowserRouter | null) => {
    // @ts-ignore
    if (instance && instance['history']) {
      // @ts-ignore
      history = instance['history'];
    }
  }
  return (
    <BrowserRouter ref={instance => setHistory(instance)}>
      <Switch>
        {/*Default*/}
        <Redirect exact path={"/"} to={"/home"}/>
        {/*Login Page*/}

        {/*home Page*/}
        <Route path={"/home"} component={lazy(() => import("./modules/auth/index"))}/>

        {/*404 notfound*/}
        <Route path={"/404.html"} component={lazy(() => import("./modules/404/index"))}/>
        {/*router customer*/}

      </Switch>
    </BrowserRouter>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let history: IHistory | null = null;