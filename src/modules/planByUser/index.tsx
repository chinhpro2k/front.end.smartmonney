import React, {Component} from 'react';
import {observer} from "mobx-react";
import './style.scss'
import Suggest from "./popup/suggest";
class PlanUser extends Component {
  render() {
    return (
      <div>
        <Suggest/>
      </div>
    );
  }
}

export default observer(PlanUser);