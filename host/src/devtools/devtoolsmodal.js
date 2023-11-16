import React, { useState } from "react";
import { useRemotes } from "../remotes/remotecomponent";
import "./devtools.scss";

function objectMap(obj) {
  const objArray = [];
  Object.keys(obj).forEach((key) => {
    let override = localStorage.getItem(`mf-${key}`);
    if (!override) {
      override = "";
    }
    objArray.push({ name: key, url: obj[key], override: override});
  });
  console.log("OBJARRAY", objArray)
  return objArray;
}

const Pencil = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
}

const DevToolsSelector = ({ onClose, remote, onSave }) => {
  const [editValue, setEditValue] = useState(remote.override ?? "");
  const override = () => {
    remote.override = editValue;
    onSave(remote);
    onClose();
  }
  const clearOverride = () => {
    remote.override = "";
    onSave(remote);
    onClose();
  }
  
  return (
    <div className="modal">
      <div className="modal-content">
        DevTools - Select        
        <span className="close" onClick={()=>onClose()}>&times;</span>
        <div  className="flex noselect">
        <div className="cell40">Name:</div>
        <div className="cell60">{remote.name}</div>
        </div>
        <div  className="flex noselect">
        <div className="cell40">URL:</div>
        <div className="cell60">{remote.url}</div>
        </div>
        <div  className="flex noselect">
        
        <div className="cell40">Override:</div>
        <div className="cell50"><input value={editValue} onChange={(e)=>setEditValue(e.target.value)} /></div>
        <div className="cell10"><button className="small" onClick={()=>setEditValue("")}>&times;</button></div>
        </div>
        <div>
          <button onClick={()=>override()} className="save">Save</button>
          <button onClick={()=>clearOverride()} className="save">Clear</button>
        </div>
      </div>
    </div>
  );
}

const DevToolsModal = ({onClose}) => {
  const { remotes } = useRemotes();
  
  if (!onClose) {
      throw new Error("DevToolsModal requires onClose prop");
  }

  const [selector, setSelector] = useState();

  const onSaveOverride = (remote) => {
    localStorage.setItem(`mf-${remote.name}`, remote.override);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        DevTools - Remote Overrides
        <span className="close" onClick={()=>onClose()}>&times;</span>
        <div>
          {objectMap(remotes).map((remote) => (
            <div  className="flex" key={remote.id}>
              <div className="flexcell cell1">{remote.name}</div>
              <div className="flexcell ">{remote.url}</div>
              <div className="flexcell ">{remote.override}</div>
              <div className="flexcell cell4"><button className="small" onClick={()=>setSelector(remote)}><Pencil /></button></div>
            </div>
          ))}
        </div>
      </div>
      {selector && (<DevToolsSelector remote={selector} onClose={()=>setSelector(undefined)} onSave={onSaveOverride}/>)}
    </div>
  );
};

export default DevToolsModal;
