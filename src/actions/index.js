const carsRequested = () => {
	return {
		type: 'FETCH_CARS_REQUEST'
	}
};

const carsLoaded = (newCars) => {
	return {
		type: 'FETCH_CARS_SUCCESS',
		payload: newCars
	};
};

const carsError = (error) => {
	return {
		type: 'FETCH_CARS_FAILURE',
		payload: error
	};
};

export const carAddedToTable = (car) => {
	return {
		type: 'CAR_ADDED_TO_TABLE',
		payload: car
	};
};

export const carRemovedFromTable = (carId) => {
	return {
		type: 'CAR_REMOVED_FROM_TABLE',
		payload: carId
	};
};

const fetchCars = (carsService, dispatch) => () => {

	dispatch(carsRequested());
	carsService.getCars()
		.then((data) => dispatch(carsLoaded(data)))
		.catch((err) => dispatch(carsError(err)));
};

export {
	fetchCars
};