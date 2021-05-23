import { take, takeLatest, call, put } from "redux-saga/effects";
import {
  SEARCH,
  searchDrugsSuccess,
  setDrugSuccess,
  setDrugFail
} from "../actions/searchActions";

import { apiSearchDrugs, apiSearchDrugById } from "../../API/search";

export function* watchSearchDrugs() {
  while (true) {
    const { payload } = yield take(SEARCH.SEARCH_DRUGS_START);
      const response = yield call(apiSearchDrugs,payload);
      try{
        yield put(searchDrugsSuccess(response));
      }catch(error){
        yield put({type:SEARCH.SEARCH_DRUGS_FAIL, response});
      }
  }
}


export function* watchSearchDrugsById() {
  while (true) {
    const { payload } = yield take(SEARCH.SELECT_SINGLE_DRUG);
      const response = yield call(apiSearchDrugById,payload);
      try{
        yield put(searchDrugsSuccess(response));
      }catch(error){
        yield put({type:SEARCH.SELECT_SINGLE_DRUG_FAIL, response});
      }
  }
}


export function* watchSetDrug() {
  while (true) {
    const { payload } = yield take(SEARCH.SET_DRUG);
      try{
        yield put(setDrugSuccess(payload));
      }catch(error){
        yield put({type:SEARCH.SET_DRUG_FAIL,error});
      }
  }
}