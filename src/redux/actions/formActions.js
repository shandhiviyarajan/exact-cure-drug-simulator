

export const FORM = {
  // Intake form
  COVARIANT_FORM_START: 'COVARIANT_FORM_START',
  COVARIANT_FORM_SUCCESS: 'COVARIANT_FORM_SUCCESS',
  COVARIANT_FORM_FAIL: 'COVARIANT_FORM_FAIL',

  // Covariant form
  DOSAGE_FORM_START: 'DOSAGE_FORM_START',
  DOSAGE_FORM_SUCCESS: 'DOSAGE_FORM_SUCCESS',
  DOSAGE_FORM_FAIL: 'DOSAGE_FORM_FAIL',
};


//Covarient form actions
export const covariantForm = (payload) => {

  //filter null values to the reducer
  let filteredPayload = Object.fromEntries(Object.entries(payload).filter(v => v[1] != null));
  return {
    type: FORM.COVARIANT_FORM_START,
    payload: filteredPayload
  };
};

export const covariantFormSuccess = (payload) => {
  return {
    type: FORM.COVARIANT_FORM_SUCCESS,
    payload
  }
}

export const covariantFormFail = (payload) => {
  return {
    type: FORM.COVARIANT_FORM_FAIL,
    payload
  }
}

//dosage form actions
export const dosageFormStart = (payload) => {
  return {
    type: FORM.DOSAGE_FORM_START,
    payload
  };
};

export const dosageFormSuccess = (payload) => {
  return {
    type: FORM.DOSAGE_FORM_SUCCESS,
    payload
  }
}

export const dosageFormFail = (payload) => {
  return {
    type: FORM.DOSAGE_FORM_FAIL,
    payload
  }
}


