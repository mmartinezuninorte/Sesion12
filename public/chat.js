const socket = io()

//Logica para obtener elementos del DOM
let message = document.getElementById('message')
let username = document.getElementById('username')
let button = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

 
button.addEventListener('click',()=>{
    socket.emit('chatmensaje', {
        message: message.value,
        username: username.value
    })
})

message.addEventListener('keypress',()=>{
    socket.emit('typing', username.value)
})

socket.on('mensajeServidor',(data)=>{
    actions.innerHTML = ''
    output.innerHTML +=`<p>
        ${data.username} : ${data.message}
    </p>`
})

socket.on('typingServidor',(data)=>{
    actions.innerHTML = `<p>
        ${data} esta escribiendo un mensaje...
    </p>`
})