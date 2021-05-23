import { COVARIANT } from '../actions/covariantActions';

const initialState = {
  form: null,
  form_by_drug_id: null,
  isLoading: false,
  error: null
};

const covariantReducer = (state = initialState, action) => {
  switch (action.type) {
    case COVARIANT.GET_COVARIANT:
      return { ...state, form: null, isLoading: true, error: null }

    case COVARIANT.GET_COVARIANT_SUCCESS:
      return { ...state, form: action.payload, isLoading: false, error: null }

      case COVARIANT.GET_COVARIANT_FAIL:
        return { ...state, form: action.payload, isLoading: false, error: null }

    case COVARIANT.GET_COVARIANT_BYID:
      return { ...state, form: null, isLoading: true, error: null }

    case COVARIANT.GET_COVARIANT_BYID_SUCCESS:
      return { ...state, form: action.payload, isLoading: false, error: null }

    case COVARIANT.GET_COVARIANT_BYID_FAIL:
      return { ...state, form: action.payload, isLoading: false, error: null }
    default:
      return state;
  };
};

export default covariantReducer;
