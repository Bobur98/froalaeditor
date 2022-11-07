import React from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditor from 'react-froala-wysiwyg';

const Froala = () => {
  return (
    <div>
      Froala
      <FroalaEditor tag="textarea" toolbarButtons={'fontFamily'} />
    </div>
  );
};

export default Froala;
