const gethtml = document.querySelector('html').onload = relogio()

function relogio() {
    const dateIst = new Date()
    const hora    = dateIst.getHours()
    const theme       = document.querySelector('#theme')
    const mensageHora = document.querySelector('#mensageHora')
    const greetings   = document.querySelector('#greetings') 
    const imageHora   = document.querySelector('#imageHora')

    if (hora >= 5 && hora <= 11) {
        theme.classList.add('theme_manha')
        greetings.innerHTML = 'Bom Dia !'
        imageHora.src = 'assets/manha.jpg'
    }else if (hora >= 12 && hora <= 18) {
        theme.classList.add('theme_tarde')
        greetings.innerHTML = 'Boa Tarde !'
        imageHora.src = 'assets/tarde.jpg'
    } else {
        theme.classList.add('theme_noite')
        greetings.innerHTML = 'Boa noite !'
        imageHora.src = 'assets/noite.jpg'
    }
    mensageHora.innerHTML = `Hora atual ${hora}H`
    mensageHora.appendChild(greetings)
} 