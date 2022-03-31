function binarySearchPosition(numbers, target) {
    let i = Math.ceil(numbers.length/2)
    while(true){
        if(target<numbers[i]){
            i-=1
            if(i<0){return -1}
        }
        else if (target>numbers[i]){
            i+=1
            if(i>=numbers.length){return -1}
        }
        else{
            return i
        }
    }
    }
    
    console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
    console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3