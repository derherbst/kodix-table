import React from 'react';
import { withFormik } from 'formik';
import { connect } from "react-redux";

import {fetchCars, carAddedToTable, carRemovedFromTable} from '../../actions';
import { withCarsService } from '../hoc';
import { compose } from "../../utils";
import { StatusSelect } from '../UI/';

import './index.scss';

const CarAddForm = (props) => {

	const _handleSelect = selectStatus => {
		return props.setFieldValue("status", selectStatus.value);
	};

	console.log(props.values);

	return (
		<form className='form'
		      onSubmit={props.handleSubmit}
		>
			<div className='form__input-wrapper form__input-wrapper--title'>
				<input type='text'
				       className='form__input'
					   placeholder='Название'
					   value={props.values.title}
					   onChange={props.handleChange}
					   onBlur={props.handleBlur}
					   id='name'
				       name='title'
				/>
				<label className='form__label' htmlFor='name'>Название</label>
			</div>

			<div className='form__input-wrapper form__input-wrapper--price'>
				<input type='text'
				       className='form__input'
					   placeholder='Цена'
					   value={props.values.price}
					   onChange={props.handleChange}
					   onBlur={props.handleBlur}
					   id='price'
				       name='price'
				/>
				<label className='form__label' htmlFor='price'>Цена</label>
			</div>

			<div className='form__input-wrapper form__input-wrapper--year'>
				<input type='text'
				       className='form__input'
					   placeholder='Год'
					   value={props.values.year}
					   onChange={props.handleChange}
					   onBlur={props.handleBlur}
					   id='year'
				       name='year'
				/>
				<label className='form__label' htmlFor='year'>Год</label>
			</div>

			<div className='form__input-wrapper form__input-wrapper--description'>
				<textarea
					className='form__input form__input--textarea'
					placeholder='Описание'
					value={props.values.description}
					onChange={props.handleChange}
					onBlur={props.handleBlur}
					id='description'
					name='description'
				/>
				<label className='form__label' htmlFor='description'>Описание</label>
			</div>

			<div className='form__input-wrapper form__input-wrapper--color'>
				<label className='form__label form__label--color' htmlFor='year'>Цвет</label>
				<div className="form__color-row">
					<input className='form__radio' type='radio' name='color' id='white' value='white'/>
					<label className='form__color' htmlFor='white'><span className='white'></span></label>

					<input className='form__radio' type='radio' name='color' id='black'/>
					<label className='form__color' htmlFor='black'><span className='black'></span></label>

					<input className='form__radio' type='radio' name='color' id='grey'/>
					<label className='form__color' htmlFor='grey'><span className='grey'></span></label>

					<input className='form__radio' type='radio' name='color' id='red'/>
					<label className='form__color' htmlFor='red'><span className='red'></span></label>

					<input  className='form__radio'type='radio' name='color' id='green'/>
					<label className='form__color' htmlFor='green'><span className='green'></span></label>
				</div>
			</div>

			<div className='form__input-wrapper form__input-wrapper--status'>
				<StatusSelect onSelectChange={_handleSelect} name='status' options={props.selectOptions}/>
			</div>

			<button type='submit'
			        className='form__submit btn btn--primary'
			        disabled={props.isSubmitting}
			>
				<span>Отправить</span>
			</button>
		</form>

	)
};

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

};

export default withFormik({
	mapPropsToValues: (props) => {
		console.log(props);
		return {
			title: props.car.title,
			description: props.car.description,
			year: props.car.year,
			color: props.car.color,
			status: props.car.status,
			price: props.car.price,
		}
	},
	handleSubmit: (values, {setSubmitting}) => {
		setTimeout(() => {
			// submit them do the server. do whatever you like!
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},
})(CarAddForm);