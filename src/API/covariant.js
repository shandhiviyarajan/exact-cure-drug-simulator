import { HTTP } from "../interceptors/interceptors"
import { COVARIANT } from "../services/constants"

//get covariant form
export const apiGetCovariant = async (language) => {
    return await HTTP(COVARIANT.GET_FORM(language), 'GET', '');

}
//get covariant form by id
export const apiGetCovariantById = async (drugId,language) => {
    return await HTTP(COVARIANT.GET_FORM_BY_ID(drugId,language), 'GET', '');
}