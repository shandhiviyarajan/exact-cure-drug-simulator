import { all } from 'redux-saga/effects';
import * as searchSaga from './searchSaga';
import * as formSaga from './formSaga';
import * as covariantSaga from './covariantSaga';
import * as simulatorSaga from './simulatorSaga';


function* rootSaga() {
  yield all([
    searchSaga.watchSearchDrugs(),
    searchSaga.watchSearchDrugsById(),
    searchSaga.watchSetDrug(),
    formSaga.watchFormIntake(),
    formSaga.watchFormCovariant(),
    covariantSaga.watchGetCovariant(),
    covariantSaga.watchGetCovariantById(),
    simulatorSaga.watchSimulator_v2()
  ]);
}

export default rootSaga;
