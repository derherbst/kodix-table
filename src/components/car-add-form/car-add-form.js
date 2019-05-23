import React, { Component } from 'react';

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
		return (
			<form className='form'
			      onSubmit={this.onSubmit}
			>
				<div className='form__input-wrapper'>
					<label className='form__label' htmlFor='name'>Название</label>
					<input type='text'
					       className='form__input'
					       onChange={this.onLabelChange}
					       placeholder='Название'
					       value=''
					       id='name'
					/>
				</div>

				<div className='form__input-wrapper'>
					<label className='form__label' htmlFor='price'>Цена</label>
					<input type='text'
					       className='form__input'
					       onChange={this.onLabelChange}
					       placeholder='Цена'
					       value={this.state.label}
					       id='price'
					/>
				</div>

				<div className='form__input-wrapper'>
					<label className='form__label' htmlFor='year'>Год</label>
					<input type='text'
					       className='form__input'
					       onChange={this.onLabelChange}
					       placeholder='Год'
					       value={this.state.label}
					       id='year'
					/>
				</div>

				<div className='form__input-wrapper'>
					<label className='form__label' htmlFor='description'>Описание</label>
					<textarea
					       className='form__input'
					       onChange={this.onLabelChange}
					       placeholder='Описание'
					       value={this.state.label}
					       id='description'
					/>
				</div>

				<div className='form__color-wrapper'>
					<input className='form__radio' type='radio' name='color' id='white' value='white'/>
					<label htmlFor='white'><span className='white'></span></label>

					<input className='form__radio' type='radio' name='color' id='black'/>
					<label htmlFor='black'><span className='black'></span></label>

					<input className='form__radio' type='radio' name='color' id='grey'/>
					<label htmlFor='grey'><span className='grey'></span></label>

					<input className='form__radio' type='radio' name='color' id='red'/>
					<label htmlFor='red'><span className='red'></span></label>

					<input  className='form__radio'type='radio' name='color' id='green'/>
					<label htmlFor='green'><span className='green'></span></label>
				</div>
				
				<div className='form__select-wrapper'>
					<select name='status' id='status'>
						<option value='Статус' disabled selected>Статус</option>
						<option value='В наличии'>В наличии</option>
						<option value='Ожидается'>Ожидается</option>
						<option value='Нет наличии'>Нет наличии</option>
					</select>
				</div>

				<button type='submit'
				        className='btn btn-outline-secondary'
				>Отправить</button>
			</form>
		)
	}
};

export default CarAddForm;