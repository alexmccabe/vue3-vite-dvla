import axios, { AxiosResponse } from 'axios';
import { MotTestResponse } from '../types';

const endpoint = 'https://beta.check-mot.service.gov.uk';

const api = axios.create({
  baseURL: endpoint,
  headers: {
    Accept: 'application/json+v6',
    'x-api-key': 'HybH0yr4Hj3eEgybT9pkn6B7PA769YDa8kt4wKdp',
  },
});

/**
 * Format the axios response data. We often don't need the full axios response,
 * so extract the data param
 *
 * @param response
 * @returns MotTestResponse
 */
function formatResponse(response: AxiosResponse) {
  return response.data;
}

/**
 * Get all MOT results for a given vehicle registration.
 *
 * @param registration Vehicle registration
 * @returns MotTestResponse[]
 */
export async function getVehicleMotTests(
  registration: string
): Promise<MotTestResponse[]> {
  return axios.get(
    'https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=VN68EYS',
    {
      headers: {
        Accept: 'application/json+v6',
        'x-api-key': 'HybH0yr4Hj3eEgybT9pkn6B7PA769YDa8kt4wKdp',
      },
    }
  );
  return api
    .get<MotTestResponse>('/trade/vehicles/mot-tests', {
      params: { registration },
    })
    .then(formatResponse);
}
