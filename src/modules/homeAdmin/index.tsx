import React, {Component} from 'react';
import {observer} from "mobx-react";
import {store} from "../auth/store";
import "./style.scss"
import AddQuestion from "./popup/addQuestion";
import {homeStore} from "./homeAdminStore";
import AddPlan from "./popup/addPlan";

interface IHomeAdmin{
  history: { length: number, push: (pash: string) => any, location: { search: string }, goBack: () => any },
  location: {
    search: string
  },
}
class HomeAdmin extends Component <IHomeAdmin,any>{
  async componentDidMount() {
    if (!store.admin){
      if (localStorage.getItem("adminId")){
        await store.getAdmin(localStorage.getItem("adminId"))
      }
    }
  }
  handleLogout(){
    this.props.history.push('/login');
  }
  render() {
    if (store.admin){
      return (
        <div className="home-admin">
          <div className="header-home text-center">
            <h1>Trang quản trị</h1>
            <h2>Xin chào {store.admin.firstName} {store.admin.lastName}!</h2>
          </div>
          <div className="middle-home d-flex justify-content-center">
            <div>
              <div className="select">Quản lý người dùng</div>
              <div className="select" onClick={()=>homeStore.handleClickAddPlan()}>Thêm kế hoạch</div>
              <div className="select">Chỉnh sửa thông báo</div>
              <div className="select" onClick={()=>homeStore.handleClickAddQuestion()}>Thêm câu hỏi</div>
            </div>
          </div>
          <div className="footer d-flex justify-content-center">
            <button onClick={()=>this.handleLogout()}>Đăng xuất</button>
          </div>
          {homeStore.isAddQuestion&& <AddQuestion/>}
          {homeStore.isAddPlan&& <AddPlan/>}
        </div>
      );
    }else return null

  }
}

export default observer(HomeAdmin);