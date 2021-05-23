export const COVARIANT = {
  // Covariant form
  GET_COVARIANT: 'GET_COVARIANT',
  GET_COVARIANT_SUCCESS: 'GET_COVARIANT_SUCCESS',
  GET_COVARIANT_FAIL: 'GET_COVARIANT_FAIL',

  // Covariant form
  GET_COVARIANT_BYID: 'GET_COVARIANT_BYID',
  GET_COVARIANT_BYID_SUCCESS: 'GET_COVARIANT_BYID_SUCCESS',
  GET_COVARIANT_BYID_FAIL: 'GET_COVARIANT_BYID_FAIL',
};
//get covariant form data
export const getCovariant = (language) => {
  return {
    type: COVARIANT.GET_COVARIANT,
    language
  };
};

export const getCovariantSuccess = () => {
  return {
    type: COVARIANT.GET_COVARIANT_SUCCESS
  }
}

export const getCovariantFail = () => {
  return {
    type: COVARIANT.GET_COVARIANT_FAIL
  }
}

//get covariant form data by drug id actions
export const getCovariantById = (payload,language) => {
  return {
    type: COVARIANT.GET_COVARIANT_BYID,
    payload,
    language
  };
};

export const getCovariantByIdSuccess = (payload) => {

  return {
    type: COVARIANT.GET_COVARIANT_BYID_SUCCESS,
    payload
  }
}

export const getCovariantByIdFail = (payload) => {
  return {
    type: COVARIANT.GET_COVARIANT_BYID_FAIL,
    payload
  }
}


