import {action, makeObservable, observable} from "mobx";
import {IReqPlan, IReqQuestion} from "../../api/request/request";
import {postRequest} from "../../api";
import {notify} from "../../common/notify/NotifyService";

class HomeAdminStore{
  constructor() {
    makeObservable(this,{
      isAddQuestion:observable,
      isAddPlan:observable,
      handleClickAddQuestion:action,
      handleClickAddPlan:action
    })
  }
  isAddQuestion:boolean=false
  handleClickAddQuestion(){
    this.isAddQuestion=!this.isAddQuestion
  }

  isAddPlan:boolean=false
  handleClickAddPlan(){
    this.isAddPlan=!this.isAddPlan
  }
  async addQuestion(data:IReqQuestion){
    const response=await postRequest(`/question/add`,data);
    if (response.status<400){
      notify.show("Thêm câu hỏi thành công","success",3);
    }else {
      notify.show(response.body.message,"warning",3);
    }
  }

  async addPlan(data:IReqPlan){
    const response=await postRequest(`/plan/create`,data);
    if (response.status<400){
      notify.show("Thêm câu hỏi thành công","success",3);
    }else {
      notify.show(response.body.message,"warning",3);
    }
  }
}
export const homeStore=new HomeAdminStore()