        // document.getElementById("green").onclick=function(){
        //     document.body.style.backgroundColor=`green`
        // }
        //  document.getElementById("orange").onclick=function(){
        //     document.body.style.backgroundColor=`orange`
        // }
        // document.getElementById("red").onclick=function(){
        //     document.body.style.backgroundColor=`red`
        // }
        //  document.getElementById("dark").onclick=function(){
        //     document.body.style.backgroundColor=`gray`
        // }
        //  document.getElementById("yellow").onclick=function(){
        //     document.body.style.backgroundColor=`yellow`
        // }

        //yanha pe closure ka badhiya use hai ham ek clickhandler function bana liye hain and usko bar bar use kar rahe hain!
 function clickHandler(color){
    return function(){
        document.body.style.backgroundColor=`${color}`
    }
 }
 document.getElementById('green').onclick=clickHandler("green")
document.getElementById('orange').onclick=clickHandler("orange")
document.getElementById('red').onclick=clickHandler("red")
 document.getElementById('dark').onclick=clickHandler("gray")
  document.getElementById('yellow').onclick=clickHandler("yellow")



