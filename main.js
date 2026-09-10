const{app,BrowserWindow,Menu,shell}=require('electron');const path=require('path');
app.disableHardwareAcceleration();Menu.setApplicationMenu(null);
function createWindow(){const win=new BrowserWindow({width:1200,height:800,minWidth:800,minHeight:600,autoHideMenuBar:true,icon:path.join(__dirname,'assets',process.platform==='win32'?'icon.ico':process.platform==='darwin'?'icon.icns':'icon.png'),title:'Office Toolbox',webPreferences:{nodeIntegration:false,contextIsolation:true,devTools:!app.isPackaged},backgroundColor:'#141414',show:false});win.setMenuBarVisibility(false);win.removeMenu();win.loadFile('index.html');win.once('ready-to-show',()=>win.show());win.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return{action:'deny'};});}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
