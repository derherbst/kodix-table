import React from 'react';
import Select from "react-select";

const StatusSelect = (props) => {

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
		<Select
			options={props.options}
			placeholder='Статус'
			className='select'
			classNamePrefix='select'
			id='status'
			styles={customStyles}
			isSearchable={false}
			onChange={props.onSelectChange}
			name={props.name}
		/>
	)
};

export default StatusSelect;