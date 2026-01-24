function insert(){
    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;
    const userNick = document.querySelector("input[name=userNick]").value;
    const podi = localStorage.getItem("choice");
    let Log = "N";
    let betrayal = "N"

    const vo = {userId,userPw,userNick,podi,Log,betrayal};
    
    let arr = JSON.parse(localStorage.getItem("memberVoList"));
    if(!arr){
        arr = [];
    }
    arr.push(vo);
    localStorage.setItem("memberVoList", JSON.stringify(arr));
    alert("가입완료!");
    location.href = "./member.html"
}

function getPodi(event){
    localStorage.setItem("choice",event.target.value);    
}

function betrayal(){
    const result = confirm("배신하시겠습니까?");  
    
    if(result){
        const arr = JSON.parse(localStorage.getItem("memberVoList"));
        const result = arr.findIndex((item)=>item.userId===localStorage.getItem("userID"));
        arr[result].podi = localStorage.getItem("choice");
        arr[result].betrayal = "Y";
        location.href = "../home.html"
    
    localStorage.setItem("memberVoList",JSON.stringify(arr));
    }else{
        alert("Good choice!");
        location.href = "../home.html"
    }
    
}