import { take, takeLatest, call, put } from "redux-saga/effects";
import {
  SIMULATOR,
  simulatorSuccess,
  simulatorFail
} from "../actions/simulatorActions";

import { apiSimulations, apiSimulations_v2 } from "../../API/simulations";

export function* watchSimulator_v2() {
  while (true) {
    const { payload } = yield take(SIMULATOR.SIMULATOR_START);

    try {
      const response = yield call(apiSimulations_v2, payload);
      yield put(simulatorSuccess(response));
    } catch (error) {
      yield put(simulatorFail(error.response.data));
    }
  }
}

export function* watchSimulator() {
  while (true) {
    const { payload } = yield take(SIMULATOR.SIMULATOR_START);
    const response = yield call(apiSimulations, payload);
    try {
      yield put(simulatorSuccess(response));
    } catch (error) {
      yield put({ type: SIMULATOR.SIMULATOR_FAIL, response });
    }
  }
}
