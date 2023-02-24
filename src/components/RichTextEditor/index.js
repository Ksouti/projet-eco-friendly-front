import React from 'react';
import ReactQuill from 'react-quill';
import './styles.scss';

class RichTextEditor extends React.Component {
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  };

  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          modules={this.modules}
        />
      </div>
    );
  }
}

export default RichTextEditor;
