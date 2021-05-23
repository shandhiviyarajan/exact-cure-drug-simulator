

export const INTERACTIONS = {
    // drug interactoins
    DRUG_INTERACTIONS: 'DRUG_INTERACTIONS',
    DRUG_INTERACTIONS_SUCCESS: 'DRUG_INTERACTIONS_SUCCESS',
    DRUG_INTERACTIONS_FAIL: 'DRUG_INTERACTIONS_FAIL',


    //drug interactions by id
    DRUG_INTERACTIONS_BYID: 'DRUG_INTERACTIONS_BYID',
    DRUG_INTERACTIONS_BYID_SUCCESS: 'DRUG_INTERACTIONS_BYID_SUCCESS',
    DRUG_INTERACTIONS_BYID_FAIL: 'DRUG_INTERACTIONS_BYID_FAIL',


    //drug interactions associate
    DRUG_INTERACTIONS_ASSOCIATE: 'DRUG_INTERACTIONS_ASSOCIATE',
    DRUG_INTERACTIONS_ASSOCIATE_SUCCESSS: 'DRUG_INTERACTIONS_ASSOCIATE_SUCCESS',
    DRUG_INTERACTIONS_ASSOCIATE_FAIL: 'DRUG_INTERACTIONS_ASSOCIATE_FAIL',

};



//drug interactions 
export const drugInteractions = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS,
        payload
    };
};

export const drugInteractionsSuccess = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_SUCCESS,
        payload
    }
}

export const drugInteractionsFail = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_FAIL,
        payload
    }
}


//drug interactions by id
export const drugInteractionsById = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_BYID,
        payload
    };
};

export const drugInteractionsByIdSuccess = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_BYID_SUCCESS,
        payload
    }
}

export const drugInteractionsByIdFail = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_BYID_FAIL,
        payload
    }
}

//drug interaction associate

export const drugInteractionsAssociate = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_ASSOCIATE,
        payload
    };
};

export const drugInteractionsAssociateSuccess = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_ASSOCIATE_SUCCESS,
        payload
    }
}

export const drugInteractionsAssociateFail = (payload) => {
    return {
        type: INTERACTIONS.DRUG_INTERACTIONS_ASSOCIATE_FAIL,
        payload
    }
}