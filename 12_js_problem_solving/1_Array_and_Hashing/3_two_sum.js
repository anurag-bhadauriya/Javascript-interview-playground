/**
 * https://leetcode.com/problems/two-sum/
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */

/**
 * Brute force
 * Time = O(n*n) , Space = O(1)
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for( let j=i+1; j<nums.length; j++){
            if( nums[i]+ nums[j] == target){
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

/**
 * Using Hashmap
 * Time = O(n), Space = O(n)
 */
var twoSum2 = (nums, target) => {
    // Map { key: value } = { array_elem: array_index}
    let  elem_map= new Map();
    for( let i =0; i< nums.length; i++){
        let num = nums[i];
        if( elem_map.get(target -num) !== undefined){
            return [elem_map.get(target -num), i];
        }
        elem_map.set(num, i);
    }
    return [-1, -1];
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum2(nums, target));