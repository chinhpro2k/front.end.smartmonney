import React, {Component} from 'react';
import {IResQuestion} from "../../../api/request/response";
import {Radio, Space} from 'antd';
import './questionStyle.scss'

interface IQuestion {
  data: IResQuestion,
  onSelect:(data:number,question:string)=>any
}

interface IState {
  valueState: number
}

class Question extends Component<IQuestion, IState> {
  constructor(props: IQuestion) {
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
    this.props.onSelect(this.state.valueState,this.props.data.title);
  };

  render() {
    const {valueState} = this.state
    if (this.props.data) {
      return (
        <div id="answer">
          <div className="title">
            {this.props.data.title}
          </div>
          <div className="content">
            {this.props.data.content}
          </div>
          <div className="answer">
            <div className="d-flex align-items-center">
              <Radio.Group onChange={this.onChange} value={valueState}>
                <Space direction="vertical">
                  {this.props.data.answer.map((value1) => {
                    return (
                      <Radio value={value1.point}> {value1.content}</Radio>
                    )
                  })}
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
      );
    } else return null
  }
}

export default Question;