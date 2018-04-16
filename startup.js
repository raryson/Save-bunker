const electron = require('electron')
const path = require('path')
const url = require('url')


const {ipcRenderer} = require('electron')

const app = electron.app

const browserWindow = electron.BrowserWindow

//deixar a referencia ao objeto da tela principal instanciada para o garbage colector do js nao limpar ela
//sim e gambiarra, mas ta na documentacao do electron assim
let mainWindow

let createWindow = () => {

    //instancia o objeto da janela com um tamanho x
    mainWindow = new browserWindow({width: 800, height: 600})

    locals = {name: "Raryson", age: 22}

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('user-data-info', {name: "Raryson Pereira Rost", age: 22})
      })

    //carrega nesse objeto isntanciado uma view que eu informar
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/home.html'),
        protocol: 'file',
        slashes: true
    }))

    //quando captar o evento da mainwindow fechar, zerar o valor dela,
    // pra ela ter que recarregar quando tu for abrir ela novamente
    mainWindow.on('closed', () => {
        mainWindow = null        
    })

 
}

//preciso entender melhor isso
app.on('ready', createWindow)

//quando todas janelas forem fechadas ele esvazia toda memoria
app.on('window-all-closed', () => {

    if(process.platform !== 'darwin')
        app.quit()

})

//
app.on('activate', () => {
    
    if(mainWindow === null)
        createWindow()

})

