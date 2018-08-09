require('electron').ipcRenderer.on('user-data-info', (event, message) => {

    let newH2 = document.createElement('h2')
    let textForH2 = document.createTextNode("Oi, o seu nome e " + message.name + " e a sua idade e " + message.age);  
    newH2.appendChild(textForH2)

    document.body.appendChild(newH2)


  })


   Vue.component('email-input', {
    template: '<input type="email" name="email"></input>'
  })

  Vue.component('password-input', {
    template: '<input type="password" name="password"></input>'
  })

  Vue.component('login-button', {
    template: '<button name="login">Logar</button>'
  })

  Vue.component('register-button', {
    template: '<button name="register">Registrar</button>'
  })

  var app = new Vue({
    el: '#app',
    data: {
          message: 'Hello Vue!'
      }
    })

