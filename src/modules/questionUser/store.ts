import {makeObservable, observable} from "mobx";
import {IResQuestion} from "../../api/request/response";
import {getRequest} from "../../api";

class QuestionStore{
  constructor() {
    makeObservable(this,{
      dataQuestion:observable
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

}
export const questionStore=new QuestionStore()