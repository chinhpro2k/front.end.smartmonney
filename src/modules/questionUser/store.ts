import {makeObservable, observable} from "mobx";
import {IResQuestion} from "../../api/request/response";
import {getRequest} from "../../api";
import {IReqPlan} from "../../api/request/request";
import {getListPlan} from "../../api/plan";

class QuestionStore{
  constructor() {
    makeObservable(this,{
      dataQuestion:observable,
      pointQuestion:observable,
      successPlan:observable
    })
  }
  dataQuestion:IResQuestion[]=[]
  async getQuestion(){
    const response=await getRequest(`/question`);
    if (response.status<400){
      this.dataQuestion=response.body.question
    }
    else {

    }
  }
  pointQuestion:number=0;
  successPlan:IReqPlan[]=[]
  async getSuccessPlan(point:number){
    const response=await getListPlan();
    if (response.status<400){
      this.successPlan=[]
      response.body.plan.map((value,i)=>{
        if (value.point<(point+3)&&value.point>(point-3)){
          this.successPlan.push(value)
        }
      })
    }else{

    }
  }


}
export const questionStore=new QuestionStore()