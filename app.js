 const button = document.getElementById('handleClick')
 const modalBg = document.getElementById('modal_bg')
 const modalClose = document.getElementById('modal_close')

 button.addEventListener('click', () => {
    modalBg.classList.add('show')
 })

 modalClose.addEventListener('click', () => {
    modalBg.classList.remove('show')
 })