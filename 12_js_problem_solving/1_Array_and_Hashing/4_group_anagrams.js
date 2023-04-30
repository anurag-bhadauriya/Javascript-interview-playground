/**
 * https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Input: strs = ["a"]
 * Output: [["a"]]
 */

var groupAnagrams = function(strs) {
    let map = new Map();
    for( let str of strs){
        const sorted_str = str.split('').sort().join('');
        
        if( map.has(sorted_str)){
            const values = map.get(sorted_str);
            values.push(str);
            map.set(sorted_str, values);
        } else {
            map.set( sorted_str, [str]);
        }
    }
    const result = [];
    for( let [key,value] of map){
        result.push(value);
    }
    return result;
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));