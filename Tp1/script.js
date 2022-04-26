



const btnAll = document.querySelectorAll('button');
const left = document.getElementById('leth1');



for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener("click" , function(e){
        var Rpd = e.target.classList[0];
        notification(Rpd,e)
    })

}

    function notification(changeColor,e){
        const ab = document.createElement('div');
       
        var newP = document.createElement('p');
        newP.innerHTML = e.target.innerHTML;
        ab.appendChild(newP);
        
        ab.setAttribute('class', 'footer');
        left.appendChild(ab)
        ab.className = changeColor;
        setInterval((e)=>{
            ab.remove();
        },2500)
    }

    

