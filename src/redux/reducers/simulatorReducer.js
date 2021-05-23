import { SIMULATOR } from '../actions/simulatorActions'

const initialState = {
  results: null,
  isSimulating: false,
  error: null,
  isSimulated: false,
  molecule: 0
};

const simulatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMULATOR.SIMULATOR_START:
      return { ...state, results: null, isSimulating: true, error: null, isSimulated: false }

    case SIMULATOR.SIMULATOR_SUCCESS:
      return { ...state, results: action.payload, isSimulating: false, error: null, isSimulated: true }

    case SIMULATOR.SIMULATOR_FAIL:
      return { ...state, error: action.payload, isSimulating: false, isSimulated: false }

    case SIMULATOR.SIMULATOR_RESET:
      return { ...state, error: action.payload, results: action.payload, isSimulating: false, isSimulated: false }

    case SIMULATOR.SET_MOLECULE:
      return { ...state, molecule: action.payload }
    default:
      return state;
  }
}

export default simulatorReducer;
