import React, { Component } from 'react';
import "./App.css";
import {AppRouter} from "./AppRouter";
import {Suspense} from "react";
import NotifyComponent from "./common/notify/NotifyComponent";


class App extends Component<any, any> {
  static get getAppName(): string {
    return process.env['REACT_APP_NAME'] as string;
  }

  render() {
    return (
      <Suspense fallback={null}>
        <AppRouter/>
        <NotifyComponent/>
      </Suspense>
    );
  }
}

export default App;