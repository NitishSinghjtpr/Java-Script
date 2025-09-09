

const react={
    createElement:function(tag,style,paragraph){
       const element= document.createElement(tag);
       element.innerText=paragraph;
       for(let key in style){
        element.style[key]=style[key];
       }
       return element;
    }
}

const header=react.createElement("h1",{color:"red",backgroundColor:"blue"},"hello nitish");
const header2=react.createElement("h2",{color:"blue",backgroundColor:"red"},"kaise ho");


// let element=document.createElement("h1");
// element.innerText="hello";
//  element.style.color="red";
// element.style.backgroundColor="blue";



//const root=document.getElementById("root");
root.append(header);
root.append(header2);