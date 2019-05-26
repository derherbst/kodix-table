import React, { Component } from 'react';
import Select from 'react-select';
import { Formik } from 'formik';

import { StatusSelect } from '../UI/';

import './index.scss';

class CarAddForm extends Component {

	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		this.setState({
			label: ''
		})
	};

	render() {

		const options = [
			{ value: 'in_stock', label: 'В наличии' },
			{ value: 'pednding', label: 'Ожидается' },
			{ value: 'out_of_stock', label: 'Нет в наличии' }
		];

		return (

			<Formik>
				{({values, handleSubmit}) => (
					<form className='form'
					      onSubmit={this.onSubmit}
					>
						<div className='form__input-wrapper form__input-wrapper--title'>
							<input type='text'
							       className='form__input'
								// onChange={this.onLabelChange}
								   placeholder='Название'
								// value=''
								   id='name'
							/>
							<label className='form__label' htmlFor='name'>Название</label>
						</div>

						<div className='form__input-wrapper form__input-wrapper--price'>
							<input type='text'
							       className='form__input'
								// onChange={this.onLabelChange}
								   placeholder='Цена'
								// value={this.state.label}
								   id='price'
							/>
							<label className='form__label' htmlFor='price'>Цена</label>
						</div>

						<div className='form__input-wrapper form__input-wrapper--year'>
							<input type='text'
							       className='form__input'
								// onChange={this.onLabelChange}
								   placeholder='Год'
								// value={this.state.label}
								   id='year'
							/>
							<label className='form__label' htmlFor='year'>Год</label>
						</div>

						<div className='form__input-wrapper form__input-wrapper--description'>
					<textarea
						className='form__input form__input--textarea'
						// onChange={this.onLabelChange}
						placeholder='Описание'
						// value={this.state.label}
						id='description'
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
							<StatusSelect options={options}/>
						</div>

						<button type='submit'
						        className='form__submit btn btn--primary'
						>
							<span>Отправить</span>
						</button>
					</form>
				)}
			</Formik>

		)
	}
}

export default CarAddForm;