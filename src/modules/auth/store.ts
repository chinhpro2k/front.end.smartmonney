import {action, makeObservable, observable} from "mobx";
import {IResLogin, IResRegister} from "../../api/request/request";
import {getRequest, postRequest} from "../../api";
import axios from "axios";
import {notify} from "../../common/notify/NotifyService";

class LoginStore{
  constructor() {
    makeObservable(this,{
      handleRegister:observable,
      handleShowRegister:action
    })
  }
  handleRegister:boolean=false
  handleShowRegister(){
    if (this.handleRegister){
      this.handleRegister=false
    }else this.handleRegister=true
  }
  async registerMember(data:IResRegister){
    const response=await postRequest(`/members/register`,data);
    if (response.status<400){
      notify.show("Đăng ký thành công","success",3);
      this.handleRegister=false
    }else {

    }

  }
  async login(data:IResLogin){
    const response=await postRequest(`/members/login`,data);
    if (response.status<400){
      notify.show("Đăng nhập thành công","success",3);
    }else {

    }
  }
}
export const store=new LoginStore();