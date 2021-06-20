import React, {Component} from 'react';
import {observer} from "mobx-react";
import './style.scss'
import ChangePassword from "../auth/popup/changePassword";
import {store} from "../auth/store";
import {Link} from "react-router-dom";

class Home extends Component {
  async componentDidMount() {
    if (localStorage.getItem('userId')){
      await store.getUser(localStorage.getItem('userId'))
    }
  }

  render() {
        return (
            <div className="home text-center">
              <div className="header-home">
                <h2>Tài khoản</h2>
              </div>
              <div className="middle-home d-flex justify-content-center">
              <div>
                <div className="select">
                  <Link to={"/home-user/user"}>Xem thông tin cá nhân</Link></div>
                <div className="select">Sửa thông tin cá nhân</div>
                <div className="select">Ví của tôi</div>
                <div className="select" onClick={()=>store.handleShowChangePass()}>Đổi mật khẩu</div>
              </div>
              </div>
              <div className="footer-home d-flex justify-content-center">
                <div>
                  <i className="fas fa-hand-holding-usd"/>
                  <p>Giao dịch</p>
                </div>
               <div>
                 <i className="fas fa-chart-bar"/>
                 <p>Báo cáo</p>
               </div>
               <div>
                 <i className="fas fa-plus-square"/>
                 <p>Tạo giao dịch</p>
               </div>
               <div>
                 <Link to={"/home-user/question"}>
                   <i className="far fa-calendar-check"/>
                   <p>Lập kế hoạch</p>
                 </Link>
               </div>
               <div>
                 <Link to={"/home-user/user"}>
                   <i className="fas fa-user"/>
                   <p>Tài khoản</p>
                 </Link>
               </div>
              </div>
              {store.handleChangePass&&<ChangePassword/>}
            </div>
        );
    }
}
export default observer(Home);
