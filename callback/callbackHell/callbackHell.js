function savetoDb(data, success, failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}
savetoDb(
     "apna college", ()=>{
    console.log("your data was saved:");
    savetoDb("hello nitish",()=>{
        console.log("success2: data2 saved");
        savetoDb("hello amol",()=>{
            console.log("success3 data3 saved");
            
        },()=>{
            console.log("poor connection: data3 not saved");
            
        })
    },()=>{
        console.log("poor connection: data2 not saved");
        
    })
},
()=>{
    console.log("weak connection,data note saved");
    }
);
 