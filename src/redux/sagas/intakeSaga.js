import { take, takeLatest, call, put } from "redux-saga/effects";
import {
  INTAKE,
  intakeDrugsSuccess,
} from "../actions/intakeActions";

import { apiIntakeDrugs } from "../../API/intake";

export function* watchIntakeForm() {
  while (true) {
    const { payload } = yield take(INTAKE.INTAKE_DRUGS_START);
      const response = yield call(apiIntakeDrugs,payload);
      try{
        yield put(intakeDrugsSuccess(response));
      }catch(error){
        yield put({type:INTAKE.INTAKE_DRUGS_FAIL, response});
      }
  }
}
