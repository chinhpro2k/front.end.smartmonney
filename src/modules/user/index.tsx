import React, {Component} from 'react';
import './style.scss'
import {observer} from "mobx-react";
import {makeObservable} from "mobx";
import {store} from "../auth/store";
interface IUser{
  history: { length: number, push: (pash: string) => any, location: { search: string }, goBack: () => any },
  location: {
    search: string
  },
}
class User extends Component<IUser,any> {
  constructor(props:any) {
    super(props);
    makeObservable(this,{

    })
  }
  async componentDidMount() {
    if (!store.user){
      if (localStorage.getItem('userId')){
        await store.getUser(localStorage.getItem('userId'))
      }
    }
  }

  handleSignOut(){
    this.props.history.push('/login')
  }
  render() {
    if (store.user){
      return (
        <div className="user">
          <div className="header-user text-center position-relative">
            <div className="btn-back position-absolute d-flex align-items-center" onClick={this.props.history.goBack}>
              <i className="fas fa-arrow-left"/>
            </div>
            <div className="title">
              <h2>Thông tin cá nhân</h2>
            </div>
          </div>
          <div className="middle-user d-flex justify-content-center">
            <div className="">
              <div className="image-user d-flex align-items-center justify-content-center">
                <p>{store.user.lastName[0]}</p>
              </div>
              <div className="information">
                <div className="d-flex ">
                  <p>Họ</p>
                  <p>{store.user.firstName}</p>
                </div>
                <div className="d-flex ">
                  <p>Tên</p>
                  <p>{store.user.lastName}</p>
                </div>
                <div className="d-flex ">
                  <p>Tuổi</p>
                  <p>21</p>
                </div>
                <div className="d-flex ">
                  <p>Ngày sinh</p>
                  <p>14/7/2000</p>
                </div>
                <div className="d-flex ">
                  <p>Số điện thoại</p>
                  <p>0123456789</p>
                </div>
                <div className="d-flex ">
                  <p>Email</p>
                  <p>{store.user.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-user d-flex flex-column justify-content-center align-items-center">
            {/*<button>Cập nhập thông tin</button>*/}
            <button onClick={()=>this.handleSignOut()}>Đăng xuất</button>
          </div>
        </div>
      );
    }else {
      return null
    }

  }
}

export default observer(User);