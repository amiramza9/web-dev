let arr=[313231,53453,[76576,654645],87876,"trtetr",true];
console.log(arr)
function main(inp,errorHandler){
    if (inp<10){
        errorHandler();
    }
}
function numericErrors(){
    console.log("numericErrors");
}
function stringErrors(){
    console.log("stringErrors");
}
