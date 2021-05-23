import { HTTP } from "../interceptors/interceptors"
import { INTERACTIONS } from "../services/constants"

//get interactions form
export const apiGetInteractionForm = async (payload) => {
    //payload  is a json obj
    await HTTP(INTERACTIONS.DRUGS_INTERACTIONS,'GET',payload);

}
//get interactions form   by drug id
export const apiGetInteractionFormById = async (drug_id, payload) =>{
    //payload is a json obj
    await HTTP(INTERACTIONS.DRUGS_INTERACTIONS_BY_ID(drug_id),'POST',payload)
}

//get interactions form by associative
export const apiGetInteractionAssociative = async (payload) =>{
    //payload is a json obj
    await HTTP(INTERACTIONS.DRUGS_INTERACTIONS_ASSOCIATIVE,'POST',payload)
}

