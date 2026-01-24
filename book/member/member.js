function login(){
    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;

    let arr = JSON.parse(localStorage.getItem("memberVoList"));
    let vo = {};
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].userId===userId && arr[i].userPw===userPw){
            localStorage.setItem("login", "Y");
            localStorage.setItem("choice",arr[i].podi);
            localStorage.setItem("userID", arr[i].userId);
            vo = {
                "userId" : arr[i].userId, 
                "userPw" : arr[i].userPw , 
                "userNick" : arr[i].userNick, 
                "podi" : arr[i].podi,
                "Log" : "Y",
                "betrayal" : arr[i].betrayal};
            alert("로그인 성공!"+arr[i].userNick+"님 환영합니다.")
        }
    }

    const result = arr.findIndex((item)=>item.userId===localStorage.getItem("userID"));
    arr.splice(result,1);
    arr.push(vo);
    localStorage.setItem("memberVoList",JSON.stringify(arr));

    location.href = "../home.html";

}
