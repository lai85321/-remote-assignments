function twoSum(nums, target) {
        for (let i=0; i<nums.length; i++){
            let tmp = target-nums[i]
            if(nums.includes(tmp)&&nums.indexOf(tmp)!==i){
                return [i, nums.indexOf(tmp)]
            }
        }
    }

console.log(twoSum([3,2,4], 6))

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/