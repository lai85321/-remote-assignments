const blockH1 = document.getElementsByTagName('h1')[0]
blockH1.addEventListener('click',()=>{
    blockH1.textContent = "Have a Good Time!"
})

const moreContent =  document.getElementsByClassName('hide')[0]
const btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click',()=>{
    moreContent.style.display = 'flex';
})