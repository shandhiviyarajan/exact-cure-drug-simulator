import { take, takeLatest, call, put } from "redux-saga/effects";
import {
  FORM,
  covariantFormSuccess,
  dosageFormSuccess

} from "../actions/formActions";

export function* watchFormIntake() {
  while (true) {
    const { payload } = yield take(FORM.COVARIANT_FORM_START);
      try{
        yield put({type:FORM.COVARIANT_FORM_SUCCESS,payload});
      }catch(error){
        yield put({type:FORM.COVARIANT_FORM_FAIL, error});
      }
  }
}

export function* watchFormCovariant() {
    while (true) {
      const { payload } = yield take(FORM.DOSAGE_FORM_START);
        try{
          yield put(dosageFormSuccess(payload));
        }catch(error){
          yield put({type:FORM.DOSAGE_FORM_FAIL, error});
        }
    }
  }
  
