import {action, makeObservable, observable} from "mobx";
import {IReqQuestion} from "../../api/request/request";
import {postRequest} from "../../api";
import {notify} from "../../common/notify/NotifyService";

class HomeAdminStore{
  constructor() {
    makeObservable(this,{
      isAddQuestion:observable,
      handleClickAddQuestion:action
    })
  }
  isAddQuestion:boolean=false
  handleClickAddQuestion(){
    this.isAddQuestion=!this.isAddQuestion
  }
  async addQuestion(data:IReqQuestion){
    const response=await postRequest(`/question/add`,data);
    if (response.status<400){
      notify.show("Thêm câu hỏi thành công","success",3);
    }else {
      notify.show(response.body.message,"warning",3);
    }
  }
}
export const homeStore=new HomeAdminStore()