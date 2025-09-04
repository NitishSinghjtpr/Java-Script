function outer(){
    let a=4;
   function inner(){
       
        let b=6;
        console.log(a+b);
        
    }
    return inner;
}
let inner =outer();
inner();
