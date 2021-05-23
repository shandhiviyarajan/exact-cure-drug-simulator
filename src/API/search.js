import { HTTP } from '../interceptors/interceptors';
import { SEARCH_DRUGS } from "../services/constants";

//search all drugs by query
export const apiSearchDrugs = async (payload) => {
    return await HTTP(SEARCH_DRUGS.DRUGS(payload.search, payload.limit), 'get')
};

//search single drug by id
export const apiSearchDrugById = async (id) => {
    return await HTTP(SEARCH_DRUGS.DRUG(id), 'get');
};