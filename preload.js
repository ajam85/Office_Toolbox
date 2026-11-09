const{contextBridge,ipcRenderer}=require('electron');
// lets the page ask the main process to write localStorage to disk right away (protects against losing the last changes on a forced exit)
contextBridge.exposeInMainWorld('otFlush',()=>ipcRenderer.send('ot-flush'));
