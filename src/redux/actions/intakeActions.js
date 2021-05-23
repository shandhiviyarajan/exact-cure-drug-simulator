

export const INTAKE = {
    // Search drugs
    INTAKE_DRUGS_START: 'INTAKE_DRUGS_START',
    INTAKE_DRUGS_SUCCESS: 'INTAKE_DRUGS_SUCCESS',
    INTAKE_DRUGS_FAIL: 'INTAKE_DRUGS_FAIL',
  };
  
  
  export const intakeDrugs = (payload) => {
    return {
      type: INTAKE.INTAKE_DRUGS_START,
      payload
    };
  };
  
  export const intakeDrugsSuccess = (payload)=>{

    return {
      type:INTAKE.INTAKE_DRUGS_SUCCESS,
      payload
    }
  }
  
  export const intakeDrugsFail = (payload)=>{
    return {
      type:INTAKE.INTAKE_DRUGS_FAIL,
      payload
    }
  }
  

  