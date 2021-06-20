import {getRequest, IApiResponse} from "../index";
import {IResPlan} from "./response";

function getListPlan():Promise<IApiResponse<IResPlan>>{
  return getRequest(`/plan`)
}
export {
  getListPlan
}