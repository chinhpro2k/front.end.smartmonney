import React, {Component} from 'react';
import {questionStore} from "./store";
import Question from "./components/question";
import {observer} from "mobx-react";
import { makeObservable, observable, runInAction} from "mobx";
import './style.scss'
interface IQuestion{
  history:{push:(path:string)=>any}
}

class QuestionUser extends Component<IQuestion,any> {
  constructor(props:any) {
    super(props);
    makeObservable(this,{
      question:observable,
      prevAnswer:observable
    })
  }
  async componentDidMount() {
    runInAction(()=>{
      questionStore.pointQuestion=0;
    })
    await questionStore.getQuestion();
  }

  question:string=''
  prevAnswer:number=0;
  async handleSelect(data:number,question:string){
    if (this.question!==question){
      runInAction(()=>{
        this.question=question
      })
      runInAction(()=>{
       this.prevAnswer=data
      })
      runInAction(()=>{
        questionStore.pointQuestion+=data;
      })
    }else {
      runInAction(()=>{
        questionStore.pointQuestion-=this.prevAnswer;
      })
      runInAction(()=>{
        questionStore.pointQuestion+=data;
      })
      runInAction(()=>{
        this.prevAnswer=data
      })
    }
  }
  async handlePlan(){
    await questionStore.getSuccessPlan(questionStore.pointQuestion)
    if (questionStore.successPlan.length!==0){
      this.props.history.push('/home-user/question/plan');
    }
  }
  render() {
    try {
      if (questionStore.dataQuestion.length !== 0) {
        return (
          <div className="question-user">
            <div className="header-question text-center">
              <h2>Câu hỏi</h2>
            </div>
            <div className="list-question" >
              {questionStore.dataQuestion.map((value, i) => {
                return (
                <Question data={value} key={i} onSelect={(data:number,question:string)=>this.handleSelect(data,question)}/>
                )
              })}
            </div>
            <div className="footer-question d-flex justify-content-end">
              <button onClick={()=>this.props.history.push('/home-user')}>Trở về</button>
              <button onClick={()=>this.handlePlan()}>Tiếp tục <i className="fas fa-chevron-right"/></button>
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