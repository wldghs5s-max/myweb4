let selectedCard01 = null;
let selectedCard02 = null;
let v01;
let v02;

function setListenerToCard(){

    const cardAreaArr = document.querySelectorAll(".card-area");
    
    for(const cardArea of cardAreaArr){
        cardArea.addEventListener("click" , function(evt){
            //같은카드 방지
            if(selectedCard01!==null&&selectedCard02===null&&cardArea===selectedCard01){
                return;
            }

            //선택된카드, 선택값 설정
            if(selectedCard01===null && selectedCard02===null){
                selectedCard01 = cardArea;
                v01 = selectedCard01.children[0].children[0].innerHTML;
            }else if(selectedCard01!==null && selectedCard02===null){
                selectedCard02 = cardArea;
                v02 = selectedCard02.children[0].children[0].innerHTML;
            }
            //카드 뒤집어서 숫자할당된 이미지 보여주기
            const temp = evt.currentTarget;
            temp.classList.toggle("flip");
            
            //1번카드, 2번카드 채워져있으면 다시 뒤집기
            if(selectedCard01!==null&&selectedCard02!==null){
                const x = selectedCard01;
                const y = selectedCard02;
                setTimeout(()=>{
                    x.classList.remove("flip");
                    y.classList.remove("flip");
                },1000
                )
            }
            //값 일치하면 숨기기
            if(v01!==null&&v02!==null&&v01===v02){
                const removeCard01 = selectedCard01;
                const removeCard02 = selectedCard02;
                //순차적으로 사라지는현상 때문에 하위자식들도 전부 하이드클래스 적용
                setTimeout(function(){
                    removeCard01.classList.add("hide");
                    removeCard01.children[0].children[0].classList.add("hide");
                    removeCard01.children[0].children[1].classList.add("hide");
                    removeCard01.children[0].classList.add("hide");
                    removeCard02.classList.add("hide");
                    removeCard02.children[0].children[0].classList.add("hide");
                    removeCard02.children[0].children[1].classList.add("hide");
                    removeCard02.children[0].classList.add("hide");

                },1000)
            }
            //카드 두장 골랐으면, 변수 초기화 하기
            if(selectedCard01!==null&&selectedCard02!==null&&v01!==null&&v02!==null){
                selectedCard01 = null;
                selectedCard02 = null;
                v01 = null;
                v02 = null;
            }
      }
        ) 
    }
}

let ma = document.querySelector("#ma");

function generateCardList(){
    const cardCnt = document.querySelector("#cardCnt").value;
    if(cardCnt > 30){
        alert("최대 30개 까지 생성가능")
        return;
    }
    ma.innerHTML = "";

    const cardContentArr = [];
    for(let i = 1; i<= cardCnt; i++){
        cardContentArr.push(i);
    }
    const arr = cardContentArr.concat(cardContentArr);

    const result = shuffleArr(arr);

    const voList = JSON.parse(localStorage.getItem("memberVoList"));
    const re = voList.findIndex((item)=>item.userId===localStorage.getItem("userID"));
    const betrayal = voList[re].betrayal;
    const podi = voList[re].podi;
    if(podi=="po"&&betrayal=="N"){
            for(temp of arr){
        ma.innerHTML += `
            <div class="card-area">
                    <div class="card">
                    <div class="card-back"><img src="../static/po${temp}.png" alt="" width="80px" height="108px"></div>
                    <div class="card-front"><img src="../static/poback.png" alt="" width="80px" height="108px"></div>
                </div>
            </div>
`;
    }
    }
    if(podi=="di"&&betrayal=="N"){
            for(temp of arr){
        ma.innerHTML += `
            <div class="card-area">
                    <div class="card">
                    <div class="card-back"><img src="../static/di${temp}.png" alt="" width="80px" height="108px"></div>
                    <div class="card-front"><img src="../static/diback.png" alt="" width="80px" height="108px"></div>
                </div>
            </div>
`;
    }
    }
    if(podi=="po"&&betrayal=="Y"){
            for(temp of arr){
        ma.innerHTML += `
            <div class="card-area">
                    <div class="card">
                    <div class="card-back"><img src="../static/po${temp}.png" alt="" width="80px" height="108px"></div>
                    <div class="card-front"><img src="../static/skul.png" alt="" width="80px" height="108px"></div>
                </div>
            </div>
`;
    }
    }
    if(podi=="di"&&betrayal=="Y"){
            for(temp of arr){
        ma.innerHTML += `
            <div class="card-area">
                    <div class="card">
                    <div class="card-back"><img src="../static/di${temp}.png" alt="" width="80px" height="108px"></div>
                    <div class="card-front"><img src="../static/besin.png" alt="" width="80px" height="108px"></div>
                </div>
            </div>
`;
    }
    }

}

function shuffleArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return arr;
}

function handleClick(){
    generateCardList();
    setListenerToCard();
}




