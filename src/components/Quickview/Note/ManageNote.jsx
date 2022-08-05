import React, { useState } from 'react'

const ManageNote = (props) => {
    const [isActiveTrash, setIsActiveTrash] = useState(false)
    return (
        <div className="toolbar clearfix">
            <ul className="pull-right ">
                <li>
                    <a href="javascript:void(0);" 
                        onClick={() => {
                            props.readyTrash()
                            setIsActiveTrash(prevState => !prevState)
                        }} 
                        className={`delete-note-link ${isActiveTrash ? 'selected' : ''}`}
                    >
                        <i className="pg-icon">trash_alt</i>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" onClick={() => props.onAdd()} className="new-note-link" data-navigate="view" data-view-port="#note-views" 
                        data-view-animation="push">
                            <i className="pg-icon">add</i>
                    </a>
                </li>
            </ul>
            <button className={`btn-remove-notes btn btn-xs btn-block ${ props.shouldTrash ? '' : 'hide'}`} onClick={ () => props.onRemove() }>
                <i className="fa fa-times"></i> Delete
            </button>
        </div>
    )
}

export default ManageNote