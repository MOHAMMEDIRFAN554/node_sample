function revStr(str){
    let rev= "";
    for (let i= str.length -1; i >= 0; i--){
        rev += str[i];
        
    }
    console.log(`reversed string of ${str} is ${rev}`);
}



revStr("hello");
revStr("javaScript");
revStr("mearn");
revStr("kerala");
revStr("12345");