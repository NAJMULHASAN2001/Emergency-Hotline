console.log('js file connected')

function getElement(id){
    const element =document.getElementById(id);
    return element;
}
function getClass(className){
    const element = document.getElementsByClassName(className);
    return element;
}


const heartIcons = getClass('heart-icon')
for(let heartIcon of heartIcons){
    heartIcon.addEventListener('click', function(){
        const heartCount =document.getElementById('heart-count').innerText;
        const currentCount = Number(heartCount) + 1;
        document.getElementById('heart-count').innerText = currentCount;

    })
}

const callButtons = getClass('call-btn')
for(let callButton of callButtons){
    callButton.addEventListener("click", function(){
        const getTitle = callButton.parentNode.parentNode.children[0].innerText
        const getNum = callButton.parentNode.parentNode.children[2].innerText
        const getCoinNum =Number(getElement('coin-count').innerText);
        //-----------------------------------------------------
        const getHistory = getElement('history-container')
        const newHistory =document.createElement('div')
        const time =new Date().toLocaleTimeString()
       

        if(getCoinNum >=20){
            const currentCoin = getCoinNum - 20;
            getElement('coin-count').innerText = currentCoin;
            alert(`📞calling ${getTitle+' '+ getNum}`)
            //add history--------------
             newHistory.innerHTML =`
        <div class="bg-[#f3f0f0] rounded-xl shadow-md p-2 flex justify-between mb-3">
                    <div class="w-2/3">
                        <p class="font-bold">${getTitle}</p>
                        <p>${getNum}</p>
                    </div>
                    <div class="my-auto">
                        <p>${time}</p>
                    </div>

                </div>
        `
        getHistory.append(newHistory)

        }
        else{
            alert("❌You don't have sufficient coin")
            return;
        }
       // console.log(getTitle, getNum, getCoinNum)
       
    })
}

getElement('clear-btn').addEventListener('click', function(){
    const getHistory = getElement('history-container')
    getHistory.innerHTML ="";

})

const copyButtons =document.getElementsByClassName('copy-btn')

for(let copyButton of copyButtons){
    copyButton.addEventListener('click', function(){
        const getNum = copyButton.parentNode.parentNode.children[2].innerText
        const copyCount =document.getElementById('copy-count').innerText;
        const currentCount = Number(copyCount) + 1;
        document.getElementById('copy-count').innerText = currentCount;
        alert(`The Number has copied ${getNum}`)

    })
}
