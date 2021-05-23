

export const SIMULATOR = {
  // Search drugs
  SIMULATOR_START: 'SIMULATOR_START',
  SIMULATOR_SUCCESS: 'SIMULATOR_SUCCESS',
  SIMULATOR_FAIL: 'SIMULATOR_FAIL',
  SIMULATOR_RESET: 'SIMULATOR_RESET',
  SET_MOLECULE:'SET_MOLECULE'
};


export const simulatorStart = (payload) => {

  return {
    type: SIMULATOR.SIMULATOR_START,
    payload
  };
};

export const simulatorSuccess = (payload) => {

  return {
    type: SIMULATOR.SIMULATOR_SUCCESS,
    payload
  }
}

export const simulatorFail = (payload) => {
  return {
    type: SIMULATOR.SIMULATOR_FAIL,
    payload
  }
}

export const simulatorReset = () => {
  const payload = null;
  return {
    type: SIMULATOR.SIMULATOR_RESET,
    payload
  }
}

export const setMoleculeAction = (payload) =>{
  return {
    type:SIMULATOR.SET_MOLECULE,
    payload
  }

}

