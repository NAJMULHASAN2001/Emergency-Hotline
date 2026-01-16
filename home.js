console.log('js file connected')

// function getElement(id){
//     const element =document.getElementById(id);
//     return element;
// }


const heartIcons =document.getElementsByClassName('heart-icon')
for(let heartIcon of heartIcons){
    heartIcon.addEventListener('click', function(){
        const heartCount =document.getElementById('heart-count').innerText;
        const currentCount = Number(heartCount) + 1;
        document.getElementById('heart-count').innerText = currentCount;

    })
}