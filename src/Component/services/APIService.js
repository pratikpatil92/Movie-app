import axios from 'axios';

// axios.interceptors.response.use(
// 	(response) => {
// 		if (response.status === 401) {
// 			alert('You are not authorized');
// 		}
// 		return response;
// 	},
// 	(error) => {
// 		if (error.response && error.response.data) {
// 			return Promise.reject(error.response.data);
// 		}
// 		return Promise.reject(error.message);
// 	}
// );

export default class APIService {
	constructor(props) {
		this.error = false;
		this.status = 0;
		this.results = {};
		this.message = '';
	}

	/* Headers for the request */
	getHeaders(role, type) {
		let headers = {
			Accept: 'application/json',
			// Authorization: 'Bearer ' + localStorage.getItem('token'),
		};

		if (role === 'admin') {
			headers.Authorization = sessionStorage.getItem('authToken');
		}

		if (type !== 'form-data') {
			let contentType = { 'content-type': 'application/json' };
			headers = { ...headers, ...contentType };
		}

		return { headers };
	}

	/* Checking for errors if any */
	checkErrors = async () => {
		let message = this.message;
		switch (this.status) {
			case 400:
				break;

			case 401:
				window.localStorage.clear();
				window.sessionStorage.clear();
				window.location.replace('/subLogin');
				message = 'Unauthorised user';
				break;

			case 403:
				message = 'Permission Denied';
				break;

			case 404:
				message = 'Results not found';
				break;

			case 405:
				message = 'Method not allowed';
				break;

			case 500:
				message = 'Internal Server Error';
				break;

			default:
				message = 'Something went wrong OR Token Expired';
				// window.localStorage.clear();
				// window.sessionStorage.clear();
				// window.location.replace('/subLogin');
				break;
		}

		this.message = message;
		// return message;
	};

	async get(url, role) {
		await axios
			.get(url, this.getHeaders(role))
			.then((response) => {
				this.status = response.status;
				this.results = response;
			})
			.catch((error) => {
				this.error = true;
			});

		if (!(this.status >= 200 && this.status <= 299)) {
			this.checkErrors();
		}
		return {
			error: this.error,
			results: this.results,
			message: this.message,
		};
	}

	async post(url, data, role) {
		await axios
			.post(url, data, this.getHeaders(role))
			.then((response) => {
				this.status = response.status;
				this.results = response;
			})
			.catch((error) => {
				this.error = true;
				this.status = error.statusCode;
				this.message = error.errorMessage;
			});
		if (!(this.status >= 200 && this.status <= 299)) {
			this.checkErrors();
		}

		return {
			error: this.error,
			results: this.results,
			message: this.message,
		};
	}

	async put(url, data, role) {
		await axios
			.put(url, data, this.getHeaders(role))
			.then((response) => {
				this.status = response.status;
				this.results = response;
			})
			.catch((error) => {
				this.error = true;
			});

		if (!(this.status >= 200 && this.status <= 299)) {
			this.checkErrors();
		}

		return {
			error: this.error,
			results: this.results,
			message: this.message,
		};
	}

	async patch(url, data, role) {
		await axios
			.patch(url, data, this.getHeaders(role))
			.then((response) => {
				this.status = response.status;
				this.results = response;
			})
			.catch((error) => {
				this.error = true;
			});

		if (!(this.status >= 200 && this.status <= 299)) {
			this.checkErrors();
		}

		return {
			error: this.error,
			results: this.results,
			message: this.message,
		};
	}

	async delete(url, role) {
		await axios
			.delete(url, this.getHeaders(role))
			.then((response) => {
				this.status = response.status;
				this.results = response;
			})
			.catch((error) => {
				this.error = true;
			});

		if (!(this.status >= 200 && this.status <= 299)) {
			this.checkErrors();
		}

		return {
			error: this.error,
			results: this.results,
			message: this.message,
		};
	}
}
