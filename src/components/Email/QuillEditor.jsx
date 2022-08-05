import React, { useState } from 'react'
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './QuilEditorStyle.css';

const quillEditor = () => {
    
    const [quil, setQuil] = useState(null);
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
            value={quil} 
            placeholder="type here"
            modules={quilModules}
            formats={quilFormats}
            theme="snow"
            onChange={(value) => setQuil(value)} 
        />
    )
}

export default quillEditor
