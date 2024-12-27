// 1.更新提示文字
// 搜尋指定元素("搜尋的元素");
// document.querySelector("名稱");
const tip=document.querySelector(".tip");
tip.textContent="請輸入1~100內的數字";

// 2.隨機設定答案跟最大最小值
let answer = Math.random()*100 +1;
answer=Math.floor(answer);
console.log("答案:",answer);
let min=1,max=100;

// 3.取得確認按鈕(增加監聽器 addEventListener )並獲得輸入的數字
document.querySelector("#ok").addEventListener('click', function(){
    console.log("點集確認按鈕");
    let number = document.querySelector("#number").value;
    console.log(number);

    // 更新提示文字
    if (number == answer){
        tip.textContent="恭喜答對囉!";
    }
    else if (number > answer){
        tip.textContent=`請輸入${min}~${number}內的數字`;
        max=number;
    }
    else{
        tip.textContent=`請輸入${number}~${max}內的數字`;
        min=number;
    }

});