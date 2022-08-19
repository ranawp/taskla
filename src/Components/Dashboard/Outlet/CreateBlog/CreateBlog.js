// import React, { useState } from 'react';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import { convertToHTML } from 'draft-convert';
// import DOMPurify from 'dompurify';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const createBlog = () => {
//     const [editorState, setEditorState] = useState(
//         () => EditorState.createEmpty(),
//     );

//     console.log(editorState)
//     const [convertedContent, setConvertedContent] = useState(null);
//     const handleEditorChange = (state) => {
//         setEditorState(state);
//         convertContentToHTML();
//     }
//     const convertContentToHTML = () => {
//         let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//         setConvertedContent(currentContentAsHTML);
//     }
//     const createMarkup = (html) => {
//         return {
//             __html: DOMPurify.sanitize(html)
//         }
//     }
//     return (
//         <div className='mx-6'>
//             <h1 className='text-center my-3 text-lg'>Create Blog</h1>
//             <Editor
//                 editorState={editorState}
//                 onEditorStateChange={handleEditorChange}
//                 wrapperClassName="wrapper-class"
//                 editorClassName="editor-class"
//                 toolbarClassName="toolbar-class"
//             />
//             <div className="preview mt-10 bg-slate-400 py-8 px-4" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
//         </div>
//     );
// };

// export default createBlog;