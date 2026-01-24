

 function memberCheck(){    
    const login = localStorage.getItem("login");
    
    if(login==="Y"){
        location.href = "./member/member_login.html";
    }if(login==="N" || !login){
        location.href = "./member/member.html";
    }
 }

 function logout(){
    localStorage.setItem("login","N");
    const arr = JSON.parse(localStorage.getItem("memberVoList"));
    const result = arr.findIndex((item)=>item.userId===localStorage.getItem("userID"));
    arr[result].Log = "N";
    
    localStorage.setItem("memberVoList",JSON.stringify(arr));


    localStorage.setItem("userID", null);
    alert("로그아웃 되었습니다.");
 }