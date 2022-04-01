function binarySearchPosition(numbers, target) {
    let left = 0
    let right = numbers.length-1
    let mid = Math.ceil((left+right)/2)
    while(left<=right){
        if(target<numbers[mid]){
            right = mid-1
            mid= Math.ceil((left+right)/2)
        }
        else if (target>numbers[mid]){
            left = mid+1
            mid= Math.ceil((left+right)/2)
        }
        else{
            return mid
        }
    }
    return -1
}
    
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3