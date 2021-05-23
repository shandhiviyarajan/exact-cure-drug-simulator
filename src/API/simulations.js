import { HTTP } from '../interceptors/interceptors';
import { SIMULATIONS} from "../services/constants"

export const apiSimulations = (payload) => {
    return HTTP.get(SIMULATIONS.SIMULATIONS(payload))
};

export const apiSimulations_v2 = async (payload) => {
    return await HTTP(SIMULATIONS.SIMULATIONS_V2,'POST',payload)
};