let btn = document.querySelectorAll("button");
let input = document.getElementById("input");

let btnsArray = Array.from(btn);
let str = "";

btnsArray.forEach((btn) => {
    btn.addEventListener("click",(e)=>{

        if(e.target.innerHTML == "DEL"){
            str = str.substring(0,str.length-1);
            input.value = str;
        }else if(e.target.innerHTML == "AC"){
            str = ""
            input.value = str;
        }else if(e.target.innerHTML == "="){
            str = eval(str);
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }

    })
});
