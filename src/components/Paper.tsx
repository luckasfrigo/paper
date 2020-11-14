import React, { DragEvent, FocusEvent, useState } from 'react';
import { AssetInstance } from '../common/types';
import './Paper.css';

function Paper() {
  const titlePlaceholder = 'Add your title here';
  const textPlaceholder = 'Add your text here';
  const [title, setTitle] = useState(titlePlaceholder);
  const [text, setText] = useState(textPlaceholder);
  const [assetInstanceList, setAssetInstanceList] = useState<AssetInstance[]>([]);

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
    const asset = JSON.parse(e.dataTransfer.getData("asset"));
    const pageRect = e.currentTarget.getBoundingClientRect();
    const newAssetInstance = {
      id: `${asset.id}${Date.now()}`,
      src: asset.src,
      name: `${asset.id}_${assetInstanceList.length}`,
      x: e.pageX - pageRect.x - asset.mouseOffset.x,
      y: e.pageY - pageRect.y - asset.mouseOffset.y,
      width: 120,
      height: 120
    };
    setAssetInstanceList([
      ...assetInstanceList,
      newAssetInstance
    ]);
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
      { assetInstanceList.map((instance) => {
        return (
          <img
            key={instance.name}
            src={instance.src}
            className="instance"
            style={{  
              left: instance.x,
              top: instance.y,
              width: instance.width,
              height: instance.height,
            }}
          />
        );  
      })}
    </div>
  );
}

export default Paper;
