import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import NoteListItem from './NoteListItem';

const NoteLists = (props) => {
    if (props.list) {
        return (
            <PerfectScrollbar component="ul">
                { /* BEGIN Note Item */}
                {props.list.map((note, index) => {
                    console.log(props.list);
                    return (
                        <NoteListItem
                            key={index}
                            inputId={note.id.toString()}
                            content={note.note}
                            textContent={note.note}
                            date={new Date(note.createdAt).toLocaleDateString()}
                            checkItem={props.check}
                            shouldTrash={props.trash}
                            editNoteNav={props.editNav}
                        />
                    )
                })}
                { /* END Note List */}
            </PerfectScrollbar>
        )
    } else {
        return <p>Loading..</p>
    }
}

export default NoteLists