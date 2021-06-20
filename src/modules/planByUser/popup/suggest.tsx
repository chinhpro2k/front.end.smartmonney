import React, {Component} from 'react';
import './styleSuggest.scss'
import {observer} from "mobx-react";
import {questionStore} from "../../questionUser/store";
import {Radio, Space} from "antd";
interface IState {
  valueState: number
}

class Suggest extends Component<any,IState>{
  constructor(props: any) {
    super(props);
    this.state = {
      valueState: 0
    }
  }
  onChange = async (e: any) => {
    // console.log('radio checked', e.target.value);
    await this.setState({
      valueState: e.target.value,
    });
  };
  render() {
    const {valueState}=this.state
    if (questionStore.successPlan.length!==0){
      return (
        <div id={"suggest-plan"}>
          <Radio.Group onChange={this.onChange} value={valueState}>
            <Space direction="vertical">
              {questionStore.successPlan.map((value,i)=>{
                return(
                  <Radio value={value.point} className="d-flex">
                    <div style={{marginLeft:"12px"}}>
                      <div className="title">
                        <p>{value.planName}</p>
                      </div>
                      <div className="content">
                        <p>{value.content}</p>
                      </div>
                    </div>
                  </Radio>

                )
              })}
            </Space>
          </Radio.Group>
        </div>
      );
    }else return null

  }
}

export default observer(Suggest);