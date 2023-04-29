/**
 * https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */


/**
 * Using Hahsmap
 * Time = O(n), Space=O(n)
 */
var containsDuplicate = function(nums) {
    const nums_freq = {};

    for(let elem of nums){
        if( nums_freq[elem] == undefined ){
            nums_freq[elem] = 1;
        } else {
            nums_freq[elem] += 1;
            if( nums_freq[elem] > 1){
                return true;
            }
        }
    }
    return false;
};

/**
 * Using a Set
 * Time = O(n), Space=O(n)
 */

var containsDuplicate2 = (nums) =>{
    let set = new Set(nums);
    const isHavingDuplicate = nums.length != set.size;
    return isHavingDuplicate;
}

let nums = [1,1,1,3,3,4,3,2,4,2];
console.log( containsDuplicate2(nums));