import React, {Component} from 'react';
import {observer} from "mobx-react";
import "./addQuestionStyle.scss"
import {homeStore} from "../homeAdminStore";
import {action, makeObservable, observable} from "mobx";
import {IReqQuestion} from "../../../api/request/request";
class AddQuestion extends Component {
  constructor(props:any) {
    super(props);
    makeObservable(this,{
      title:observable,
      content:observable,
      answer1:observable,
      answer2:observable,
      answer3:observable,
      answer:observable,
      setTitle:action,
      setContent:action,
      setAnswer1:action,
      setAnswer2:action,
      setAnswer3:action,
      resetQuestion:action
    })
  }
  title:string=''
  content:string=''
  answer1:string='';
  answer2:string='';
  answer3:string='';
  answer: {
    content:string,
    point:number
  }[]=[]
  setTitle(e:any){
    this.title=e.target.value
  }
  setContent(e:any){
    this.content=e.target.value
  }
  setAnswer1(e:any){
    this.answer1=e.target.value
  }
  setAnswer2(e:any){
    this.answer2=e.target.value
  }
  setAnswer3(e:any){
    this.answer3=e.target.value
  }
  handleSendQuestion(){
    this.answer.push({
      "content":this.answer1,
      "point":1
    });
    this.answer.push({
      "content":this.answer2,
      "point":2
    });
    this.answer.push({
      "content":this.answer3,
      "point":3
    });

    const data:IReqQuestion={
      "answer":this.answer,
      "title": this.title,
      "content": this.content
    }
    homeStore.addQuestion(data).then()

  }
  componentDidMount() {
    this.resetQuestion()
  }
  resetQuestion(){
    this.title='';
    this.content='';
    this.answer1='';
    this.answer2='';
    this.answer3='';
  }

  render() {
    return (
      <div className="add-question">
        <div className="header-question">
          <h2>Thêm câu hỏi</h2>
        </div>
        <div className="form-question">
          <div className="input-question ">
            <p>Tiêu đề:</p>
            <input placeholder="nhập tiêu đề" onChange={(e:any)=>this.setTitle(e)} value={this.title}/>
          </div>
          <div className="input-question">
            <p>Nội dung:</p>
            <textarea placeholder="nhập tiêu đề" onChange={(e:any)=>this.setContent(e)} value={this.content}/>
          </div>
          <div className="input-question">
            <p>Câu trả lời 1(1 Điểm):</p>
            <input placeholder="Câu trả lời 1" onChange={(e:any)=>this.setAnswer1(e)} value={this.answer1}/>
          </div>
          <div className="input-question">
            <p>Câu trả lời 2(2 Điểm):</p>
            <input placeholder="Câu trả lời 2" onChange={(e:any)=>this.setAnswer2(e)} value={this.answer2}/>
          </div>
          <div className="input-question">
            <p>Câu trả lời 3(3 Điểm):</p>
            <input placeholder="Câu trả lời 3" onChange={(e:any)=>this.setAnswer3(e)} value={this.answer3}/>
          </div>
        </div>
        <div className="footer">
          <button onClick={()=>homeStore.handleClickAddQuestion()}>Trở lại</button>
          <button onClick={()=>this.handleSendQuestion()}>Xác nhận</button>
        </div>
      </div>
    );
  }
}

export default observer(AddQuestion);