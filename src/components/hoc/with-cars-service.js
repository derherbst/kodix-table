import React from 'react';
import { CarsServiceConsumer } from '../cars-service-context';

const withCarsService = () => (Wrapped) => {

	return (props) => {
		return (
			<CarsServiceConsumer>
				{
					(carsService) => {
						return (<Wrapped {...props}
						                 carsService={carsService}/>);
					}
				}
			</CarsServiceConsumer>
		);
	}
};

export default withCarsService;
