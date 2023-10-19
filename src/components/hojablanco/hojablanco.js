import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './hoja-style.css';

function HojaEnBlanco() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'es-ES';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      
      if (transcript === 'okay click') {
        console.log("escuchando")
        startWritingMode();
      } else if (isListening) {
        handleVoiceCommand(transcript);
        console.log("por si las moscas")
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [isListening]);


  const startWritingMode = () => {
    setIsListening(true);
  };

  const handleVoiceCommand = (command) => {
    
    const contentState = ContentState.createFromText(command);
    console.log("editando")
  
    
    const newContentState = Modifier.insertText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      contentState.getPlainText()
    );
  
    const newEditorState = EditorState.push(editorState, newContentState, 'insert-fragment');
    
    setEditorState(newEditorState);
  };

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  return (
    <div>
      <div className="main-content">
        <button onClick={handleBoldClick}>Negrita</button>
        <button onClick={handleItalicClick}>Cursiva</button>
        
        
        <div className="editor-container">
          <Editor
            editorState={editorState}
            onChange={(newEditorState) => setEditorState(newEditorState)}
          />
        </div>
      </div>
    </div>
  );
}

export {HojaEnBlanco};