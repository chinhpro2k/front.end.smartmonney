import React, {Component} from 'react';
import {observer} from "mobx-react";
import './addPlan.scss'
import {action, makeObservable, observable} from "mobx";
import {homeStore} from "../homeAdminStore";

class AddPlan extends Component {
  constructor(props:any) {
    super(props);
    makeObservable(this,{
      planName:observable,
      content:observable,
      point:observable,
      setTitle:action,
      setContent:action,
      setPoint:action
    })
  }
  planName:string=''
  content:string=''
  point:number=0;
  setTitle(e:any){
    this.planName=e.target.value
  }
  setContent(e:any){
    this.content=e.target.value
  }
  setPoint(e:any){
    this.point=e.target.value
  }
 async handleCreate(){
    const data={
      "point":this.point,
      "planName": this.planName,
      "content": this.content
    }
   await homeStore.addPlan(data)
  }
  render() {
    return (
      <div className="add-plan">
        <div className="header-question">
          <h2>Thêm kế hoạch</h2>
        </div>
        <div className="form-question">
          <div className="input-question ">
            <p>Tiêu đề:</p>
            <input placeholder="nhập tiêu đề" onChange={(e:any)=>this.setTitle(e)} value={this.planName}/>
          </div>
          <div className="input-question">
            <p>Nội dung:</p>
            <textarea placeholder="nhập tiêu đề" onChange={(e:any)=>this.setContent(e)} value={this.content}/>
          </div>
          <div className="input-question">
            <p>Điểm:</p>
            <input placeholder="Câu trả lời 1" onChange={(e:any)=>this.setPoint(e)} value={this.point}/>
          </div>
        </div>
        <div className="footer">
          <button onClick={()=>homeStore.handleClickAddPlan()}>Trở lại</button>
          <button onClick={()=>this.handleCreate()}>Xác nhận</button>
        </div>
      </div>
    );
  }
}

export default observer(AddPlan);