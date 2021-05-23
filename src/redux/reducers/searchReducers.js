import { SEARCH } from '../actions/searchActions'

const initialState = {
  drugs: null,
  selectedDrug: null,
  isLoading: false,
  error: null,
  drug: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.SEARCH_DRUGS_START:
      return { ...state, drugs: null, isLoading: true, error: null }

    case SEARCH.SEARCH_DRUGS_SUCCESS:
      return { ...state, drugs: action.payload.data, isLoading: false, error: null }

    case SEARCH.SEARCH_DRUGS_FAIL:
      return { ...state, drugs: action.payload, isLoading: false, error: null }

    case SEARCH.SELECT_SINGLE_DRUG:
      return { ...state, drug: null, isLoading: true, error: null }

    case SEARCH.SELECT_SINGLE_DRUG_SUCCESS:
      return { ...state, drug: action.payload.data, isLoading: false, error: null }

    case SEARCH.SELECT_SINGLE_DRUG_FAIL:
      return { ...state, drug: action.payload, isLoading: false, error: null }

    case SEARCH.SET_DRUG:
      return { ...state, selectedDrug: null, isLoading: true, error: null }

    case SEARCH.SET_DRUG_SUCCESS:
      return { ...state, selectedDrug: action.payload, isLoading: false, error: null }

    case SEARCH.SET_DRUG_FAIL:
      return { ...state, selectedDrug: action.payload, isLoading: false, error: null }

    default:
      return state;
  }
}

export default searchReducer;
