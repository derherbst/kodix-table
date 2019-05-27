import React from 'react';
import { connect } from "react-redux";

import CarAddForm from './car-add-form';
import {carAddedToTable} from '../../actions';
import { withCarsService } from '../hoc';
import { compose } from "../../utils";

import './index.scss';

const CarAddFormContainer = (props) => {
	const defaultCar = {
		title: '',
		description: '',
		year: '',
		color: '',
		status: '',
		price: null
	};

	const statusOptions = [
		{ value: 'in_stock', label: 'В наличии' },
		{ value: 'pending', label: 'Ожидается' },
		{ value: 'out_of_stock', label: 'Нет в наличии' }
	];

	return (
		<CarAddForm car={defaultCar} selectOptions={statusOptions} addCar={props.carAdded}/>
	)
};

const mapDispatchToProps = (dispatch) => {
	return {
		carAdded: (value) => dispatch(carAddedToTable(value))
	}
};

export default compose(
	withCarsService(),
	connect(null, mapDispatchToProps)
)(CarAddFormContainer);