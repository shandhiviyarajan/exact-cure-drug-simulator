

export const SEARCH = {
    // Search drugs
    SEARCH_DRUGS_START: 'SEARCH_DRUGS_START',
    SEARCH_DRUGS_SUCCESS: 'SEARCH_DRUGS_SUCCESS',
    SEARCH_DRUGS_FAIL: 'SEARCH_DRUGS_FAIL',
    //
    SET_DRUG:'SET_DRUG',
    SET_DRUG_SUCCESS:'SET_DRUG_SUCCESS',
    SET_DRUG_FAIL:'SET_DRUG_FAIL',

    //select single drug
    SELECT_SINGLE_DRUG:'SELECT_SINGLE_DRUG',
    SELECT_SINGLE_DRUG_SUCCESS:'SELECT_SINGLE_DRUG_SUCCESS',
    SELECT_SINGLE_DRUG_FAIL:'SELECT_SINGLE_DRUG_FAIL'
  };
  
  
  export const searchDrugs = (payload) => {

    return {
      type: SEARCH.SEARCH_DRUGS_START,
      payload
    };
  };
  
  export const searchDrugsSuccess = (payload)=>{

    return {
      type:SEARCH.SEARCH_DRUGS_SUCCESS,
      payload
    }
  }
  
  export const searchDrugsFail = (payload)=>{
    return {
      type:SEARCH.SEARCH_DRUGS_FAIL,
      payload
    }
  }

  //search drug by drug id
  export const selectSingleDrug = (payload) => {

    return {
      type: SEARCH.SELECT_SINGLE_DRUG,
      payload
    };
  };
  
  export const selectSingleDrugSuccess = (payload) => {

    return {
      type: SEARCH.SELECT_SINGLE_DRUG_SUCCESS,
      payload
    };
  };
  export const selectSingleDrugFail = (payload) => {

    return {
      type: SEARCH.SELECT_SINGLE_DRUG_FAIL,
      payload
    };
  };

  
  export const setDrug = (payload)=>{
    return {
      type: SEARCH.SET_DRUG,
      payload
    };
  }

  export const setDrugSuccess = (payload)=>{
    return {
      type: SEARCH.SET_DRUG_SUCCESS,
      payload
    };
  }

  export const setDrugFail= (payload)=>{
    return {
      type: SEARCH.SET_DRUG_FAIL,
      payload
    };
  }