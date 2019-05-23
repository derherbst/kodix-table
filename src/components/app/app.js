import React from 'react';

import CarAddForm from '../car-add-form';
import CarTable from '../car-table';

const App = () => {
	return (
		<div className='app'>
			<div className="app__title">¡Ay caramba!</div>
			<div className="app__form">
				<CarAddForm />
				<CarTable />
			</div>
		</div>
	)
};

export default App;