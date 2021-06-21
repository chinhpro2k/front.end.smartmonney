import React, {Component} from 'react';
import {observer} from "mobx-react";
import './styleForgot.scss'
import {action, makeObservable, observable} from "mobx";
import {store} from "../store";
class ForgotPassword extends Component {
  constructor(props:any) {
    super(props);
    makeObservable(this,{
      typeForgot:observable,
      email:observable,
      otp:observable,
      newPassword:observable,
      reNewPassword:observable,
      error:observable,
      handleRenderForm:action,
      setEmail:action,
      setOtp:action
    })
  }
  email:string=''
  setEmail(e:any){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
      this.error=false;
      this.email=e.target.value
    }else {
      this.error=true;
    }
  }
  otp:number=0
  setOtp(e:any){
    this.otp=e.target.value
  }
  newPassword:string=''
  setNewPass(e:any){
    this.newPassword=e.target.value
  }
  reNewPassword:string=''
  setReNewPass(e:any){
    this.reNewPassword=e.target.value
  }
  typeForgot:'EMAIL'|'OTP'|'CHANGE'='EMAIL'
  error:boolean=false
  handleRenderForm(type:string){
    if (type==='EMAIL'){
      return(
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <p>Nhập email của bạn</p>
          <input placeholder="nhập email" onChange={(e:any)=>this.setEmail(e)}/>
          {this.error&&<p className="error">Vui lòng nhập đúng định dạng email</p>}
        </div>
        <div className="btn-next">
          <i className="fas fa-arrow-circle-right" onClick={()=>this.handleChangeType('OTP')}/>
        </div>
      </div>
      )
    }else {
      if (type==='OTP'){
       return (
         <div className="d-flex align-items-center justify-content-center">
           <div>
             <p>Nhập OPT</p>
             <input placeholder="nhập otp" onChange={(e:any)=>this.setOtp(e)}/>
           </div>
           <div className="btn-next">
             <i className="fas fa-arrow-circle-right" onClick={()=>this.handleChangeType('CHANGE')}/>
           </div>
         </div>
       )
      }else {
        return (
          <div className="form-new-password">
            <div>
              <p>Nhập mật khẩu mới</p>
              <input placeholder="nhập mật khẩu mới"/>
            </div>
            <div>
              <p>Nhập lại mật khẩu mới</p>
              <input placeholder="nhập lại mật khẩu mới"/>
            </div>
          </div>
        )
      }
    }
  }
  handleChangeType(type:'EMAIL'|'OTP'|'CHANGE'){
    if (type==='EMAIL'){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)){

      }
    }
    this.typeForgot=type;
  }
  handleCancel(){
    store.handleForgotPass=!store.handleForgotPass
    this.typeForgot='EMAIL'
  }
  handleChangePassword(){

  }
  render() {
    return (
      <div id={"forgot-password"}>
        <div className="forgot-password-form text-center">
          <div className="title">
            <h2>Quên mật khẩu</h2>
          </div>
         <div className="middle">
           {this.handleRenderForm(this.typeForgot)}
         </div>
          <div className="footer-forgot">
            <button onClick={()=>this.handleCancel()}>Cancel</button>
            {this.typeForgot==='CHANGE'&&<button onClick={()=>this.handleChangePassword()}>Xác nhận</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default observer(ForgotPassword);