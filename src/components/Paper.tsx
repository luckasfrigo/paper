import React, { DragEvent, FocusEvent, useState } from 'react';
import './Paper.css';

function Paper() {
  const titlePlaceholder = 'Add your title here';
  const textPlaceholder = 'Add your text here';
  const [title, setTitle] = useState(titlePlaceholder);
  const [text, setText] = useState(textPlaceholder);

  const titleClassName = title === titlePlaceholder ? 'placeholder' : ''
  const textClassName = text === textPlaceholder ? 'placeholder' : ''

  const removeTitlePlaceholder = () => {
    if (title === titlePlaceholder) {
      setTitle('');
    }
  }

  const addTitlePlaceholderIfEmpty = (e: FocusEvent<HTMLHeadingElement>) => {
    const content = e.currentTarget.innerHTML;
    if (content) {
      setTitle(content);
    } else {
      setTitle(titlePlaceholder);
    } 
  }
  const removeTextPlaceholder = () => {
    if (text === textPlaceholder) {
      setText('');
    }
  }

  const addTextPlaceholderIfEmpty = (e: FocusEvent<HTMLParagraphElement>) => {
    const content = e.currentTarget.innerHTML;
    if (content) {
      setText(content);
    } else {
      setText(textPlaceholder);
    } 
  }
  
  const drop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("assetId");
    console.log(e);
  }

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  }

  return (
    <div className="paper" onDrop={drop} onDragOver={allowDrop}>
      <h1
        className={titleClassName}
        contentEditable="true"
        onFocus={removeTitlePlaceholder}
        onBlur={addTitlePlaceholderIfEmpty}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p
        className={textClassName}
        contentEditable="true"
        onFocus={removeTextPlaceholder}
        onBlur={addTextPlaceholderIfEmpty}
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
}

export default Paper;
