function duplicateEncode(word){
    let arr = "";
    let wordarr = word.toLowerCase();

    for( let i = 0; i < wordarr.length; i++){
        // let newword = wordarr.slice();
        // newword.splice(i, 1)
        // if(newword.includes(wordarr[i])){
        if(wordarr.split(wordarr[i]).length > 2){
            arr +=")";
        }else{
            arr +="(";
        }
        
    }
    return arr;
}
console.log(duplicateEncode("recede"));

// function duplicateEncode(word){
//     let arr = "";
// let wordarr = word.toLowerCase().split("");

// for( let i = 0; i < wordarr.length; i++){
//     let newword = wordarr.slice();
//     newword.splice(i, 1)
//     if(newword.includes(wordarr[i])){
//         arr +=")";
//     }else{
//         arr +="(";
//     }
    
// }
// return arr;
// }