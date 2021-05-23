//search api
export const SEARCH_DRUGS = {
    DRUGS: (search, limit) => `/drugs?search=${search}&limit=${limit}`,
    DRUG: (DRUG_ID) => `/drugs/${DRUG_ID}`
};

//intake
export const INTAKE = {
    INTERACTIONS: `/simulations`
};

//simulations 
export const SIMULATIONS = {
    SIMULATIONS: `/simulations`,
    SIMULATIONS_V2: `/v2/simulations`
};
//covariant 
export const COVARIANT = {
    GET_FORM:(language)=>`/covariates?locale=${language}`,
    GET_FORM_BY_ID: (drugId,language) => `/covariates/${drugId}?locale=${language}`
}

//drug interactions
export const INTERACTIONS = {
    DRUGS_INTERACTIONS: `/drugs/interactions`,
    DRUGS_INTERACTIONS_ASSOCIATIVE: `/drugs/interactions/associative`,
    DRUGS_INTERACTIONS_BY_ID: (drugId) => `/drugs/interactions/${drugId}`
}