function delayedResultPromise(n1, n2, delayTime) {
    // your code here …
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(n1+n2)},delayTime)
    })
}

delayedResultPromise(4, 5 , 3000).then(console.log) 
// 9 (4+5) will be shown in the console after 3 seconds
    


//You can also try the third way and implement it using async/await this time.
async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    const sum =await delayedResultPromise(5,7,2000)
    console.log(sum)
}
main() // result will be shown in the console after <delayTime> second
