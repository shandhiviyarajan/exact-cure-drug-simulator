import { INTAKE } from '../actions/intakeActions'

const initialState = {
  data: null,
  isLoading: false,
  error: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INTAKE.INTAKE_DRUGS_START:
      return { ...state, data: null, isLoading: true, error: null }

    case INTAKE.INTAKE_DRUGS_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false, error: null }

    case INTAKE.INTAKE_DRUGS_FAIL:
      return { ...state, data: action.payload, isLoading: false, error: null }
    default:
      return state;
  }
}

export default searchReducer;
