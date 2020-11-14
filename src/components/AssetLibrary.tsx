import React, { DragEvent } from 'react';
import energyshield from '../assets/energyshield.svg';
import imageshield from '../assets/imageshield.png';
import lineshield from '../assets/lineshield.svg';
import './AssetLib.css';
  
function AssetLib() {
  const startDrag = (e: DragEvent<HTMLImageElement>) => {
    const assetRect = e.currentTarget.getBoundingClientRect();
    e.dataTransfer.setData(
      "asset",
      JSON.stringify({
        id: e.currentTarget.id,
        src: e.currentTarget.src,
        mouseOffset: { x: e.pageX - assetRect.x, y: e.pageY - assetRect.y },
      })
    );
  }

  return (
    <div className="assetlib">
      <div className="assetlist">
          <img
            id="energyshield"
            alt="A shield with a thunderbolt"
            src={energyshield}
            className="asset"
            draggable="true"
            onDragStart={startDrag}
          />
        <img
          id="imageshield"
          alt="A shield from a png file"
          src={imageshield}
          className="asset"
          draggable="true"
          onDragStart={startDrag}
        />
        <img
          id="lineshield"
          alt="A shield drawn with lines only"
          src={lineshield}
          className="asset"
          draggable="true"
          onDragStart={startDrag}
        />
      </div>
    </div>
  );
}

export default AssetLib;
