import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

const DataTable = ({className, hover, bordered, condensed, striped, keyField, ...rest}) => {
    return (
        <BootstrapTable 
            className={ className }
            striped={ striped }
            hover={ hover }
            bordered={ bordered }
            condensed={ condensed }
            keyField={keyField}
            {...rest}
        />
    )
}

export default DataTable
