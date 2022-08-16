import React, { useState } from 'react'
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './QuilEditorStyle.css';

const quillEditor = (props) => {
    
    const [quilModules] = useState({
        toolbar: [
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'align': [] }],
            ['clean']
        ],
    });
    const [quilFormats] = useState([
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'size',
        'align'
    ]);

    return (
        <ReactQuill 
            value={props.quil} 
            placeholder="type here"
            modules={quilModules}
            formats={quilFormats}
            theme="snow"
            onChange={(value) => props.setQuil(value)} 
        />
    )
}

export default quillEditor
