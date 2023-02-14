

const sortWord = (word) =>{
    return word.split("").sort().join("");
}

const joinAnagram = (inputs) => {
    let anagrams = {};
    for(let i in inputs){
        const word = inputs[i];
        const sorted = sortWord(word);
    if(!!anagrams[sorted]){
        anagrams[sorted].push(word);
    }else{
        anagrams[sorted] = [word];
    }
 }
 return Object.values(anagrams);
}

const result = joinAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(result);
