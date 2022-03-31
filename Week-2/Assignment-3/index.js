function count(input) {
    let obj={}
    for(let  char of input){    
        if(Object.keys(obj).includes(char)){
            obj[char]+=1
        }
        else{
            obj[char] = 1
        }
    }
    return obj
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    let obj={}
    for(let i=0;i<input.length;i++){   
        if(Object.keys(obj).includes(input[i].key)){
            obj[input[i].key]+= input[i].value
        }
        else{
            obj[input[i].key] = input[i].value
        }
    }
    return obj
}
let input2 = [
     {key: 'a', value: 3},
     {key: 'b', value: 1},
     {key: 'c', value: 2},
     {key: 'a', value: 3},
     {key: 'c', value: 5}
]
console.log(groupByKey(input2));
//should print {a:6, b:1, c:7}