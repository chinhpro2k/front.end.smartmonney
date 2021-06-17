import React, {Component} from 'react';
import './style.scss'
export default class PageNotfound extends Component {
    render() {
        return (
            <div id="page-404-site" className="container" >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="error_image">
                            <img src="./assets/images/404/404.svg" alt="404 images"/>
                        </div>
                        <div className="error_title text-center">
                            <h2>Xin lỗi!</h2>
                            <p>Trang bạn đang tìm kiếm không tồn tại. Bạn có thể truy cập liên kết sau:</p>
                        </div>
                    </div>
                    <div className="list-cate-notfound">
                    </div>
                    <div className="btn d-flex justify-content-center">
                        <button id="back">Quay lại trang trước</button>
                        <button id="continued">Tiếp tục mua sắm</button>
                    </div>
            </div>
        );
    }
}

