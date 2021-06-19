import React, {Component} from 'react';
import {questionStore} from "./store";
import {observer} from "mobx-react";


class QuestionUser extends Component {

  async componentDidMount() {
    await questionStore.getQuestion();
  }

  // handleChangeCheckbox = async (e: any) => {
  //   console.log('radio checked', e.target.value);
  //   // this.setState({
  //   //   valueState:{
  //   //     title: e.target.value.title,
  //   //     point: e.target.value.point
  //   //   },
  //   // });
  //  await this.setState(prevState => {
  //     let valueState = Object.assign({}, prevState.valueState);    // tạo một bản sao của user
  //     valueState.title = e.target.value.title              // cập nhật , gán giá trị mới
  //     valueState.point=e.target.value.point
  //     return { valueState };                                 // trả về object user mới
  //   })
  //   console.log(this.state.valueState)
  // };

  render() {
    try {
      if (questionStore.dataQuestion.length !== 0) {
        return (
          <div className="question-user">
            <div className="header-question">

            </div>
            <div className="list-question" >
              {questionStore.dataQuestion.map((value, i) => {
                return (
                  <div key={i}>
                    <div className="title">
                      {value.title}
                    </div>
                    <div className="content">
                      {value.content}
                    </div>
                    <div className="answer">
                      {value.answer.map((value1)=>{
                        return(
                          <div className="d-flex align-items-center">
                           <form>
                             <input type={"radio"} id={value.title} value={value1.content}/>
                             <label htmlFor={value.title}>{value1.content}</label>
                           </form>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      } else return null;
    } catch (e) {
      console.log(e)
    }
  }
}

export default observer(QuestionUser);