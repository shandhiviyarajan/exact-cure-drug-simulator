import { take, takeLatest, call, put } from "redux-saga/effects";
import {
  COVARIANT,
  getCovariantByIdSuccess
} from "../actions/covariantActions";

import { apiGetCovariant, apiGetCovariantById } from "../../API/covariant";
export function* watchGetCovariant() {
  while (true) {
    const language = yield take(COVARIANT.GET_COVARIANT);
    const response = yield call(apiGetCovariant, language);
    try {
      yield put({ type: COVARIANT.GET_COVARIANT_SUCCESS, response });
    } catch (error) {
      yield put({ type: COVARIANT.GET_COVARIANT_FAIL, error });
    };
  };
};

export function* watchGetCovariantById() {
  while (true) {
    const { payload,language } = yield take(COVARIANT.GET_COVARIANT_BYID);
    const response = yield call(apiGetCovariantById, payload,language);
    try {
      yield put(getCovariantByIdSuccess(response));
    } catch (error) {
      yield put({ type: COVARIANT.GET_COVARIANT_BYID_FAIL, error });
    };
  };
};

