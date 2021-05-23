import { HTTP } from '../interceptors/interceptors';
import {INTAKE} from "../services/constants";

export const apiIntakeDrugs = (payload) => {
  //sample payload
    let body = {
        "params": {
          "size": "large",
          "start_date": "2021-07-10T00:00:00+02:00",
          "end_date": "2021-07-17T00:00:00+02:00",
          "fullscreen": true,
          "locale": "fr"
        },
        "patient": {
          "gender": 1,
          "birthdate": "1982-08-20",
          "height": 70,
          "weight": 70,
          "renal_function": 90
        },
        "prescription": {
          "cis": "63368332",
          "administration_type": "oral",
          "taken": [
            {
              "dose": 1000,
              "time": "08:12",
              "interval": 6
            }
          ]
        }
      }
    return HTTP(INTAKE.INTERACTIONS,'post',payload)
};
