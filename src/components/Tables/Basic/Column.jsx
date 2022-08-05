import React from 'react';

function placeFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        <React.Fragment>
            <a href="javascript:void(0);" onClick={(e) => e.preventDefault()} className="btn">United States</a>
            <a href="javascript:void(0);" onClick={(e) => e.preventDefault()} className="btn">Africa</a>
        </React.Fragment>
    );
}

function trashFormatter(column, colIndex) {
    return (
        <button aria-label="" className="btn btn-link">
            <i className="pg-icon">trash_alt</i>
        </button>
    );
}

function checkBoxFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        <div className="form-check d-flex align-items-center justify-content-center">
            <input type="checkbox" value="3" id={`checkbox4${rowIndex}`} />
            <label htmlFor={`checkbox4${rowIndex}`} className="no-padding no-margin"></label>
        </div>
    );
}

// Columns of table one
export const tableOneColumns = [{
    dataField: 'trash',
    text: '',
    headerFormatter: trashFormatter,
    formatter: checkBoxFormatter
}, {
    dataField: 'title',
    text: 'TITLE',
    headerTitle: true,
    sort: true
}, {
    dataField: 'places',
    text: 'PLACES',
    headerTitle: true,
    sort: true
}, {
    dataField: 'activities',
    text: 'ACTIVITIES',
    headerTitle: true,
    sort: true,
    headerStyle: (colum, colIndex) => {
        return { width: '30%' };
    }
}, {
    dataField: 'status',
    text: 'STATUS',
    headerTitle: true,
    sort: true
}, {
    dataField: 'lastUpdate',
    text: 'LAST UPDATE',
    headerTitle: true,
    sort: true
}];

// Columns of table two
export const tableTwoColumns = [{
    dataField: 'title',
    text: 'TITLE',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'places',
    text: 'PLACES',
    headerStyle: { backgroundColor: '#f0f0f073' },
    headerTitle: true,
    sort: true,
    formatter: placeFormatter
}, {
    dataField: 'activities',
    text: 'ACTIVITIES',
    headerTitle: true,
    sort: true,
    headerStyle: (colum, colIndex) => {
        return { width: '40%' };
    }
}];

// Columns of table three
export const tableThreeColumns = [{
    dataField: 'title',
    text: 'TITLE',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'key',
    text: 'KEY',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'condensed',
    text: 'CONDENSED',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}];