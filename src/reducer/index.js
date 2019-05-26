const initialState = {
	cars: []
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
				// loading: true,
				// error: null
			};

		case 'FETCH_CARS_SUCCESS':
			return {
				...state,
				cars: action.payload,
				// loading: false,
				// error: null
			};
		case 'CAR_REMOVED_FROM_TABLE':
			return updateList(state, action.payload, -1);
		default:
			return state;

		// case 'FETCH_CARS_FAILURE':
		// 	return {
		// 		...state,
		// 		books: [],
		// 		loading: false,
		// 		error: action.payload
		// 	};

		// case 'CAR_ADDED_TO_TABLE':
		// 	return updateList(state, action.payload, 1);

		// case 'ALL_BOOKS_REMOVED_FROM_CART':
		// 	const item = state.cartItems.find(({id}) => id === action.payload);
		// 	return updateOrder(state, action.payload, -item.count);
	}
};

export default reducer;