import axios from 'axios';

const AxiosClient = axios.create({
	baseURL: 'http://feriirawan-api.herokuapp.com',
	headers: {
		'Content-Type': 'multipart/form-data/application/x-www-form-urlencoded'
	},
	crossDomain: true
});




export default AxiosClient;
