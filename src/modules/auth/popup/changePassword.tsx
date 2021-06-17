import React, {Component} from 'react';
import {observer} from "mobx-react";
import './styleChangePass.scss'
import {action, makeObservable, observable} from "mobx";
import {store} from "../store";
class ChangePassword extends Component {
  constructor(props:any) {
    super(props);
    makeObservable(this,{
      passwordValue:observable,
      newPassword:observable,
      reNewPassword:observable

    })
  }
  passwordValue:string=''
  newPassword:string=''
  reNewPassword:string=''
  setPasswordValue(e:any){
    this.passwordValue=e.target.value
  }
  setNewPassword(e:any){
    this.newPassword=e.target.value
  }
  setReNewPassword(e:any){
    this.reNewPassword=e.target.value
  }
  render() {
    return (
      <div className="change-pass">
        <div className="form-change">
          <h2 className="text-center">ĐỔi mật khẩu</h2>
          <div className="old-pass">
            <p>Mật khẩu cũ</p>
            <input placeholder="nhập tài khoản" onChange={(e:any)=>this.setPasswordValue(e)}/>
          </div>
          <div className="password">
            <p>Mật khẩu mới</p>
            <input type="password" placeholder="nhập mật khẩu" onChange={(e:any)=>this.setNewPassword(e)}/>
          </div>
          <div className="re-password">
            <p>Nhập lại mật khẩu mới</p>
            <input type="password" placeholder="nhập mật khẩu" onChange={(e:any)=>this.setReNewPassword(e)}/>
          </div>
        </div>
        <div className="btn-change d-flex justify-content-center">
          <button onClick={()=>store.handleShowChangePass()}>Trở về</button>
          <button>Xác nhận</button>
        </div>
      </div>
    );
  }
}

export default observer(ChangePassword);