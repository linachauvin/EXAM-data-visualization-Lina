function twoSum(nums, target) {
    const numIndexMap = new Map();
    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        const requiredNumber = target - currentNumber;
        if (numIndexMap.has(requiredNumber)) {
            return [numIndexMap.get(requiredNumber), index];
        }
        numIndexMap.set(currentNumber, index);
    }
    return [];
}
const nums = [10, 5, 2, 11];
const target = 12;
console.log(twoSum(nums, target));  
