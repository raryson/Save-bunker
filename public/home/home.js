require('electron').ipcRenderer.on('user-data-info', (event, message) => {

    let newH2 = document.createElement('h2')
    let textForH2 = document.createTextNode("Oi, o seu nome e " + message.name + " e a sua idade e " + message.age);  
    newH2.appendChild(textForH2)

    document.body.appendChild(newH2)

  })