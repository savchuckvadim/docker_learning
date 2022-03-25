

const title = document.getElementById('title')
let i = 0
console.log('after')
const changeTitle = () => {
    console.log('changeTitle')
    if(i<1){
        i++
        title.style.color = 'orange'
    }else{
        i=0
        title.style.color = 'blue'
    }
}



setInterval(changeTitle, 3000)