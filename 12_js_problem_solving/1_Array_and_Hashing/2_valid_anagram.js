/**
 * https://leetcode.com/problems/valid-anagram/
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 */


/**
 * Approach = Sort & Compare
 * Time = O(n logn + n), Space = O(m + n) = O(n)
 */
var isAnagram = function(s, t) {
    if( s.length != t.length){
        return false;
    } else {
        let s_arr = s.split('').sort();
        let t_arr = t.split('').sort();
        for(let i =0; i< s_arr.length; i++){
            if( s_arr[i] !== t_arr[i]){
                return false;
            }
        }
        return true;
    }
};

/**
 * Approach = Using hashmap
 * Time = O(n), Space = O(n)
 */

var isAnagram2 = (s, t) => {
    let counter_map = {};

    if(s.length !== t.length){
        return false;
    }
    for( let i =0; i< s.length; i++){
        // Operating on s...
        if( counter_map[s.charAt(i)] == undefined){
            counter_map[s.charAt(i)] = 1;
        } else {
            counter_map[s.charAt(i)] += 1;
        }
        // Operating on t...
        if( counter_map[t.charAt(i)] == undefined){
            counter_map[t.charAt(i)] = -1;
        } else {
            counter_map[t.charAt(i)] -= 1;
        }
    }

    for(const key in counter_map){
        if( counter_map[key] !==0 ){
            return false;
        }
    }
    return true;
};


console.log(isAnagram2('cat', 'rat'));
