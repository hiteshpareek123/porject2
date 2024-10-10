let icon = document.querySelector('.section-icon')

let ul = document.querySelector('ul')

console.log(icon);
console.log(ul);


icon.addEventListener('click',()=>{
    console.log(ul)
    if(ul.style.display == 'none')
    {
        ul.style.display = "block"
        icon.querySelector('i').classList.add('fa-x')
    }

    else{
        ul.style.display = "none"
        icon.querySelector('i').classList.remove('fa-x')

    }


})