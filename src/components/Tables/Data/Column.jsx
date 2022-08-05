import React from 'react';
// Columns of table one
function placeFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        <React.Fragment>
            <a href="javascript:void(0);" className="btn btn-tag">China</a>
            <a href="javascript:void(0);" className="btn btn-tag">United States</a>
            <a href="javascript:void(0);" className="btn btn-tag">India</a>
            <a href="javascript:void(0);" className="btn btn-tag">Africa</a>
        </React.Fragment>
    );
};
function selectAll(cell, row, rowIndex, formatExtraData) {
    return (
        <div className="form-check pl-2">
            <input type="checkbox" value="3" id={`checkbox4${rowIndex}`} />
            <label htmlFor={`checkbox4${rowIndex}`} className=""></label>
        </div>
    );
};
function checkBoxFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        <div className="form-check d-flex align-items-center justify-content-center">
            <input type="checkbox" value="3" id={`checkbox4${rowIndex}`} />
            <label htmlFor={`checkbox4${rowIndex}`} className="no-padding no-margin"></label>
        </div>
    );
};

export const tableThreeColumnsCbox = [{
    dataField: 'trash',
    text: '',
    headerFormatter: selectAll,
    formatter: checkBoxFormatter
}, {
    dataField: 'renderingEngine',
    text: 'NAME',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'browser',
    text: 'FOLDER NUMBER',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'platforms',
    text: 'PLATFORM(S)',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'engineVersion',
    text: 'ENGINE VERSION',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, 
{
    dataField: 'actions',
    text: 'ACTIONS',
    headerStyle: { backgroundColor: '#f0f0f073' },
}];
export const tableOneColumns = [{
    dataField: 'title',
    text: 'TITLE',
    headerTitle: true,
    sort: true
}, {
    dataField: 'places',
    text: 'PLACES',
    headerTitle: true,
    sort: true,
    formatter: placeFormatter,
    headerStyle: (colum, colIndex) => {
        return { width: '20%' };
    }
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
    dataField: 'appName',
    text: 'APP NAME',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true,
    editable: false
}, {
    dataField: 'description',
    text: 'DESCRIPTION',
    headerStyle: { backgroundColor: '#f0f0f073' },
    headerTitle: true,
    sort: true,
    editable: false
}, {
    dataField: 'price',
    text: 'PRICE',
    headerStyle: { backgroundColor: '#f0f0f073' },
    headerTitle: true,
    sort: true,
    editable: false
}, {
    dataField: 'notes',
    text: 'NOTES',
    headerStyle: { backgroundColor: '#f0f0f073' },
    headerTitle: true,
    editable: false
}];

// Columns of table three
export const tableThreeColumns = [{
    dataField: 'renderingEngine',
    text: 'RENDERING ENGINE',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'browser',
    text: 'BROWSER',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'platforms',
    text: 'PLATFORM(S)',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'engineVersion',
    text: 'ENGINE VERSION',
    headerStyle: { backgroundColor: '#f0f0f073' },
    sort: true
}, {
    dataField: 'cssGrade',
    text: 'CSS GRADE',
    headerStyle: { backgroundColor: '#f0f0f073' },
}];

