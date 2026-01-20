function insertBook(){
    const title = document.querySelector("input[name=title]").value;
    const price = document.querySelector("input[name=price]").value;
    
    if(!title||!price){
        alert("입력오류");
        return;
    }
    const vo = {title,price};

    let arr = JSON.parse(localStorage.getItem("BookVoList"));
    console.log(arr);
    
    if(!arr){arr=[];}
    console.log(arr);
    arr.push(vo);

    localStorage.setItem("BookVoList", JSON.stringify(arr));
    alert("저장완료!");
    document.querySelector("input[name=title]").value = "";
    document.querySelector("input[name=price]").value = "";
}

window.onload = function(){
    selectList();
}

function selectList(){
    const arr = JSON.parse(localStorage.getItem("BookVoList"));

    let str ="";
    for(let i=0; i<arr.length; ++i){
        str += `
            <tr>
                <td>${arr[i].title}</td>
                <td>${arr[i].price}</td>
                <td><input type="checkbox" value="${i+1}"></td>
            </tr>                
        `
    }
    document.querySelector("#bookList").innerHTML = str;
}

function deleteBook(){
    const trTagList = document.querySelector("#bookList").children;
    const targetNoArr = [];
    console.log(trTagList);
        for(const trTag of trTagList){
        const inputTag = trTag.children[2].children[0];
        if(inputTag.checked){
            targetNoArr.push(inputTag.value);
        }
    }
    targetNoArr.reverse();
    const BookVoList = JSON.parse(localStorage.getItem("BookVoList"));
    for(no of targetNoArr){
        BookVoList.splice(no-1,1);
    }
    localStorage.setItem("BookVoList",JSON.stringify(BookVoList));
    selectList();

}



