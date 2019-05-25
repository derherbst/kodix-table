import React, { Component } from 'react';
import Select from 'react-select'

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

		const customStyles = {
			control: (provided, state) => ({
				display: 'flex',
				width: '100%',
				borderRadius: 0,
				border: '1px solid #dcdcdc',
				borderBottomWidth: '2px',
				cursor: 'pointer',
				borderBottomColor: state.isFocused ? '#000 !important' : '',
				':hover': {
					borderBottomColor: '#c4092f'
				},
				':focus': {
					borderBottomColor: '#000 !important'
				},
			}),
			menu: (provided) => ({
				...provided,
				margin: '0',
				borderRadius: '0',
				borderWidth: '0 1px 1px 1px',
				borderColor: '#dcdcdc',
				borderStyle: 'solid',
				width: '100%',
				visibility: 'visible',
				boxSizing: 'content-box',
				boxShadow: 'none'
			}),
			indicatorSeparator: () => ({

			}),
			option: (provided, state) => ({
				padding: '10px 0 10px 8px',
				color: '#999',
				cursor: 'pointer',
				':hover': {
					color: '#000',
				},
			}),
			menuList: (provided) => ({

			})
		};

		return (
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
					<Select
						options={options}
						placeholder='Статус'
						className='select'
						classNamePrefix='select'
						id='status'
						styles={customStyles}
						isSearchable={false}
					/>
				</div>

				<button type='submit'
				        className='form__submit btn btn--primary'
				>
					<span>Отправить</span>
				</button>
			</form>
		)
	}
};

export default CarAddForm;