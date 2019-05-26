import React, { Component, useState, useEffect } from 'react'

import { connect } from "react-redux";

import {fetchCars, carAddedToTable, carRemovedFromTable} from '../../actions';
import { withCarsService } from '../hoc';

import { compose } from "../../utils";

import './index.scss'

class CarTable extends Component {

    componentDidMount() {
        this.props.fetchCars();
    }

    render() {
        const renderRow = (item, idx) => {
            const { id, title, description, year, color, status, price } = item;
            return (
                <div key={id} className='table__row'>
                    <div className='table__cell table__cell--title'>
                        <span>{title}</span>
                    </div>
                    <div className='table__cell table__cell--descr'>
                    <span className='table__cell-val table__cell-val--descr'>
                        {description}
                    </span>
                    </div>
                    <div className='table__cell table__cell--year'>{year}</div>
                    <div className='table__cell table__cell--color'>
                        <span className={`color color--${color}`}></span>
                    </div>
                    <div className='table__cell table__cell--status'>{status}</div>
                    <div className='table__cell table__cell--price'>{price}</div>
                    <div className='table__cell table__cell--remove'>
                        <button
                            onClick={() => this.props.onRemoveFromTable(id)}
                            className='btn btn--secondary'
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            )
        };

        return (
            <div className='table'>
                <h2 className='table__title'>Автомобили в наличии</h2>
                <div className='table__wrap'>
                    <div className='table__header'>
                        <div className='table__row table__row--header'>
                            <span className='table__header-cell table__header-cell--title'>Название</span>
                            <span className='table__header-cell table__header-cell--year'>Год</span>
                            <span className='table__header-cell table__header-cell--color'>Цвет</span>
                            <span className='table__header-cell table__header-cell--status'>Статус</span>
                            <span className='table__header-cell table__header-cell--price'>Цена</span>
                            <span className='table__header-cell'></span>
                        </div>
                    </div>
                    <div className='table__body'>{this.props.cars.map(renderRow)}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

const mapDispatchToProps = (dispatch, { carsService }) => {
    console.log(carsService);
    return {
        fetchCars: fetchCars(carsService, dispatch),
        onRemoveFromTable: (id) => dispatch(carRemovedFromTable(id))
    };
};

export default compose(withCarsService(), connect(mapStateToProps, mapDispatchToProps))(CarTable);
