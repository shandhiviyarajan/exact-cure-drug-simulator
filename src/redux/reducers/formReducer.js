import { FORM } from '../actions/formActions'

const initialState = {
  dosage_form: null,
  covarient_form:null,
  isLoading: false,
  error: null
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM.COVARIANT_FORM_START:
      return { ...state, covarient_form: null, isLoading: true, error: null }

    case FORM.COVARIANT_FORM_SUCCESS:
      return { ...state, covarient_form: action.payload, isLoading: false, error: null }

    case FORM.COVARIANT_FORM_FAIL:
      return { ...state, covarient_form: action.payload, isLoading: false, error: null }

      case FORM.DOSAGE_FORM_START:
        return { ...state, dosage_form: null, isLoading: true, error: null }
  
      case FORM.DOSAGE_FORM_SUCCESS:
        return { ...state, dosage_form: action.payload, isLoading: false, error: null }
  
      case FORM.DOSAGE_FORM_FAIL:
        return { ...state, dosage_form: action.payload, isLoading: false, error: null }

    default:
      return state;
  }
}

export default formReducer;
