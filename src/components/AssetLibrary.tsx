import React, { DragEvent, useState } from 'react';
import energyshield from '../assets/energyshield.svg';
import imageshield from '../assets/imageshield.png';
import lineshield from '../assets/lineshield.svg';
import { Asset } from '../common/types';
import './AssetLib.css';
  
function AssetLib() {
  const [assetList, setAssetList] = useState<Asset[]>([
    {
      id: "energyshield",
      alt: "A shield with a thunderbolt",
      src: energyshield,
    },
    {
      id: "imageshield",
      alt: "A shield from a png file",
      src: imageshield,
    },
    {
      id: "lineshield",
      alt: "A shield drawn with lines only",
      src: lineshield,
    }
  ]);
  const [draggedAssetIndex, setDraggedAssetIndex] = useState(0);

  const startDrag = (e: DragEvent<HTMLImageElement>) => {
    const assetRect = e.currentTarget.getBoundingClientRect();

    e.dataTransfer.setData(
      "asset",
      JSON.stringify({
        id: e.currentTarget.id,
        src: e.currentTarget.src,
        mouseOffset: { x: e.pageX - assetRect.x, y: e.pageY - assetRect.y }
      })
    );

    for(let i = 0; i < assetList.length; i++) {
      if (assetList[i].id == e.currentTarget.id) {
        setDraggedAssetIndex(i);
        break;
      }
    };
  }

  const switchPlaces = (e: DragEvent) => {
    const draggedAsset = assetList[draggedAssetIndex];
    if (e.currentTarget.id !== draggedAsset.id) {
      let currentIndex = 0;
      for(let i = 0; i < assetList.length; i++) {
        if (assetList[i].id === e.currentTarget.id) {
          currentIndex = i;
          break;
        }
      };
      let newAssetList = [...assetList];
      newAssetList[draggedAssetIndex] = assetList[currentIndex];
      newAssetList[currentIndex] = assetList[draggedAssetIndex];
      setDraggedAssetIndex(currentIndex);
      setAssetList(newAssetList);
    }
  }

  return (
    <div className="assetlib">
      <div className="assetlist">
        {assetList.map(asset =>
          <img
            id={asset.id}
            key={asset.id}
            alt={asset.alt}
            src={asset.src}
            className="asset"
            draggable="true"
            onDragStart={startDrag}
            onDragOver={switchPlaces}
          />
        )}
      </div>
    </div>
  );
}

export default AssetLib;
