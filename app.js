const bar = document.getElementById('bar')

const close = document.getElementById('close')

const nav = document.getElementById('navbar')




if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

const cart = document.getElementById('cart')

const payment = document.getElementById('payment')

const close1 = document.getElementById('close1')

if(cart){
    bar.addEventListener('click', () =>{
        payment.classList.add('active')
    })
}

if(close1){
    bar.addEventListener('click', () =>{
        payment.classList.remove('active')
    })
}



























