import React, { Component } from 'react';
import { connect } from "react-redux";

import CarAddForm from './car-add-form';
import {fetchCars, carAddedToTable, carRemovedFromTable} from '../../actions';
import { withCarsService } from '../hoc';
import { compose } from "../../utils";

import './index.scss';

const CarAddFormContainer = () => {
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
		{ value: 'pednding', label: 'Ожидается' },
		{ value: 'out_of_stock', label: 'Нет в наличии' }
	];

	return (
		<CarAddForm car={defaultCar} selectOptions={statusOptions}/>
	)
};

const mapStateToProps = () => {
	return {

	}
};

const mapDispatchToProps = () => {
	return {

	}
};

export default compose(
	withCarsService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CarAddFormContainer);