import AxiosClient from './Axios'

export const AmbilDataGempa = () => AxiosClient.get('/list/bmkg/')