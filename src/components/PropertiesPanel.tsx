import React from 'react';
import { AssetInstance } from '../common/types';
import './PropertiesPanel.css';

interface Props {
  instance?: AssetInstance;
}
  
function PropertiesPanel({instance}: Props) {
  if (!instance) {
    return <></>
  }
  
  return (
    <div className="panel">
      <h4>{instance.name}</h4>
      <table>
        <tr>
          <td>x:</td>
          <td>{instance.x}</td>
        </tr>
        <tr>
          <td>y:</td>
          <td>{instance.y}</td>
        </tr>
        <tr>
          <td>width:</td>
          <td>{instance.width}</td>
        </tr>
        <tr>
          <td>height:</td>
          <td>{instance.height}</td>
        </tr>
      </table>
    </div>
  );
}

export default PropertiesPanel;
