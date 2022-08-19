import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import NoteListItem from './NoteListItem';

const NoteLists = (props) => {
    if(props.list){
        return (
            <PerfectScrollbar component="ul">
                { /* BEGIN Note Item */ }
                {props.list.map((note, index) => {
                    return (
                        <NoteListItem 
                            key={index}
                            inputId={note.id}
                            content={note.content}
                            textContent={note.textContent}
                            date={note.date}
                            checkItem={props.check}
                            shouldTrash={props.trash}
                            editNoteNav={props.editNav}
                        />
                    )
                })}
                { /* END Note List */ }
			</PerfectScrollbar>
        )
    } else {
        return <p>Loading..</p>
    }
}

export default NoteLists