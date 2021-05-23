import { take, takeLatest, call, put } from "redux-saga/effects";
import {
  INTERACTIONS

} from "../actions/interactionActions";


export function* watchDrugInteractions() {
  while (true) {
    const { payload } = yield take(INTERACTIONS.DRUG_INTERACTIONS);
      try{
        yield put({type:INTERACTIONS.DRUG_INTERACTIONS_SUCCESS,payload});
      }catch(error){
        yield put({type:INTERACTIONS.GET_COVARIANT_BYID_FAIL, error});
      }
  }
}

export function* watchDrugInteractionsById() {
    while (true) {
      const { payload } = yield take(INTERACTIONS.DRUG_INTERACTIONS_BYID);
        try{
          yield put({type:INTERACTIONS.DRUG_INTERACTIONS_BYID_SUCCESS,payload});
        }catch(error){
          yield put({type:INTERACTIONS.DRUG_INTERACTIONS_BYID_FAIL, error});
        }
    }
  }
  

  export function* watchDrugInteractionsAssociate() {
    while (true) {
      const { payload } = yield take(INTERACTIONS.DRUG_INTERACTIONS_ASSOCIATE);
        try{
          yield put({type:INTERACTIONS.DRUG_INTERACTIONS_ASSOCIATE_SUCCESSS,payload});
        }catch(error){
          yield put({type:INTERACTIONS.DRUG_INTERACTIONS_ASSOCIATE_FAIL, error});
        }
    }
  }
  