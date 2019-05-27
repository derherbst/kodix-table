import React, { Component } from 'react';
import { withFormik } from 'formik';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { carAddedToTable } from '../../actions';
import { withCarsService } from '../hoc';
import { compose } from "../../utils";
import { StatusSelect } from '../UI/';

import './index.scss';

class CarAddForm extends Component {

	state = {
		colorValue: ''
	};

	_handleSelect = selectStatus => {
		return this.props.setFieldValue("status", selectStatus.value);
	};

	_handleRadio = (target) => {

		const radio = target.closest('.form__radio');

		if (radio) {
			console.log(radio);
			this.setState((state) => {
				return {
					colorValue: radio.value
				}
			});
			// return this.setRadioValue(this.props, radio.value)
		}
	};

	render() {

		const { handleSubmit, values, handleBlur, handleChange, isSubmitting, selectOptions } = this.props;

		return (
			<form className='form'
				  onSubmit={handleSubmit}
			>
				<div className='form__input-wrapper form__input-wrapper--title'>
					<input type='text'
						   className='form__input'
						   placeholder='Название'
						   value={values.title}
						   onChange={handleChange}
						   onBlur={handleBlur}
						   id='name'
						   name='title'
					/>
					<label className='form__label' htmlFor='name'>Название</label>
				</div>

				<div className='form__input-wrapper form__input-wrapper--price'>
					<input type='text'
						   className='form__input'
						   placeholder='Цена'
						   value={values.price}
						   onChange={handleChange}
						   onBlur={handleBlur}
						   id='price'
						   name='price'
					/>
					<label className='form__label' htmlFor='price'>Цена</label>
				</div>

				<div className='form__input-wrapper form__input-wrapper--year'>
					<input type='text'
						   className='form__input'
						   placeholder='Год'
						   value={values.year}
						   onChange={handleChange}
						   onBlur={handleBlur}
						   id='year'
						   name='year'
					/>
					<label className='form__label' htmlFor='year'>Год</label>
				</div>

				<div className='form__input-wrapper form__input-wrapper--description'>
				<textarea
					className='form__input form__input--textarea'
					placeholder='Описание'
					value={values.description}
					onChange={handleChange}
					onBlur={handleBlur}
					id='description'
					name='description'
				/>
					<label className='form__label' htmlFor='description'>Описание</label>
				</div>

				<div className='form__input-wrapper form__input-wrapper--color' onClick={(event) => this._handleRadio(event.target)}>
					<label className='form__label form__label--color' htmlFor='year'>Цвет</label>
					<div className="form__color-row">
						<input className='form__radio' type='radio' name='color' id='white' value='white'/>
						<label className='form__color' htmlFor='white'><span className='white'></span></label>

						<input className='form__radio' type='radio' name='color' id='black' value='black'/>
						<label className='form__color' htmlFor='black'><span className='black'></span></label>

						<input className='form__radio' type='radio' name='color' id='grey' value='grey'/>
						<label className='form__color' htmlFor='grey'><span className='grey'></span></label>

						<input className='form__radio' type='radio' name='color' id='red' value='red'/>
						<label className='form__color' htmlFor='red'><span className='red'></span></label>

						<input  className='form__radio'type='radio' name='color' id='green' value='green'/>
						<label className='form__color' htmlFor='green'><span className='green'></span></label>
					</div>
				</div>

				<div className='form__input-wrapper form__input-wrapper--status'>
					<StatusSelect onSelectChange={this._handleSelect} name='status' options={selectOptions}/>
				</div>

				<button type='submit'
						className='form__submit btn btn--primary'
						disabled={isSubmitting}
				>
					<span>Отправить</span>
				</button>
			</form>

		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		carAdded: (values) => dispatch(carAddedToTable(values))
	}
};

export default compose(withFormik({
	mapPropsToValues: (props) => {
		return {
			title: props.car.title,
			description: props.car.description,
			year: props.car.year,
			color: props.car.color,
			status: props.car.status,
			price: props.car.price,
		}
	},
	handleSubmit: (values, {setStatus, setSubmitting, props}) => {
		props.addCar(values);
		alert(JSON.stringify({
			...values,
		}, null, 2));
		setSubmitting(false);
	},
}),
	withCarsService(),
	connect(null, mapDispatchToProps))(CarAddForm);