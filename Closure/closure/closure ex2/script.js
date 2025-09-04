function outer(){
    let name="nitish";
    function inner(){
        let lastName="kumar";
        console.log("outer part printing:- ",name + lastName)
    }
    inner();
    
}
outer();