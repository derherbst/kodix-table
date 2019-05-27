const initialState = {
	cars: []
};

const addCar = (state, car) => {

	const { cars } = state;

	const newCar = {
		...car,
		id: cars[cars.length-1].id + 1
	};

	return {
		...state,
		cars: [
			...cars,
			newCar
		]
	}
};

const updateList = (state, carId, quantity) => {
	const { cars } = state;

	// находим индекс конкретной строки/машины
	const idx = cars.findIndex(({ id }) => id === carId);

	if (quantity === -1 ) {
		return {
			...state,
			cars: [
				...cars.slice(0, idx),
				...cars.slice(idx + 1)
			]
		}
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_CARS_REQUEST':
			return {
				...state,
				cars: [],
			};
		case 'FETCH_CARS_SUCCESS':
			return {
				...state,
				cars: action.payload,
			};
		case 'CAR_REMOVED_FROM_TABLE':
			return updateList(state, action.payload, -1);
		case 'CAR_ADDED_TO_TABLE':
			return addCar(state, action.payload);
		default:
			return state;
	}
};

export default reducer;