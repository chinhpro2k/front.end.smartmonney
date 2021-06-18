import {action, makeObservable, observable} from "mobx";
import {IResLogin, IResRegister, IResUser} from "../../api/request/request";
import {getRequest, postRequest, putRequest} from "../../api";
import axios from "axios";
import {notify} from "../../common/notify/NotifyService";

class LoginStore{
  constructor() {
    makeObservable(this,{
      handleRegister:observable,
      handleChangePass:observable,
      user:observable,
      eyeType:observable,
      handleShowRegister:action,
      handleShowChangePass:action,
      getUser:action
    })
  }
  handleRegister:boolean=false
  handleShowRegister(){
    this.handleRegister = !this.handleRegister;
  }
  handleChangePass:boolean=false;
  handleShowChangePass(){
    this.handleChangePass = !this.handleChangePass;
  }
  eyeType:boolean=false

  async registerMember(data:IResRegister){
    const response=await postRequest(`/members/register`,data);
    if (response.status<400){
      notify.show("Đăng ký thành công","success",3);
      this.handleRegister=false
    }else {

    }

  }
  user?:IResUser
  async login(data:IResLogin){
    const response=await postRequest(`/members/login`,data);
    if (response.status<400){
      notify.show("Đăng nhập thành công","success",3);
      localStorage.setItem("userId",response.body.user.id)
      window.location.href = '/home-user';
    }else {
      notify.show(response.body.message,"warning",3);
    }
  }
  async getUser(userId:string|null){
    const response=await getRequest(`/users/${userId}`);
    if (response.status<400){
      this.user=response.body.user
    }
  }
  async changePassword(userId:string,newPass:string){
    const response=await putRequest(`/members/change/${userId}`,{
      'password':newPass
    })
    if (response.status<400){
      notify.show("Đổi mật khẩu thành công!","success",3);
      this.handleShowChangePass()
    }else {
      notify.show(response.body.message,"warning",3);
    }
  }
}
export const store=new LoginStore();