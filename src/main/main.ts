import { app, BrowserWindow, Menu } from 'electron'
import * as path from 'path'
import * as url from 'url'
import contextualMenu from './config/contextualMenu'
import './services/p2pService'

let win: BrowserWindow | null

const createWindow = async () => {
  win = new BrowserWindow({ 
    width: 800, 
    height: 600
  })

  const menu = Menu.buildFromTemplate(contextualMenu)
  Menu.setApplicationMenu(menu)

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
    win.loadURL(`http://localhost:2003`)
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  win.on('closed', () => { win = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
