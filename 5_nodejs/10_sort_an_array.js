// Sort Array in ascending order

let arr = [ 9,1,6,2,3,8 ];

// Return index of the maximum element from 0 to end index
function findMax(arr, end){
	let idx;
	for( let i =0; i<= end; i++){
		if( arr[idx] < arr[i]){
			idx = i;
		}
	}
	return idx;
}

// Find Maximum & switch with last element <-- Repeat this
function sortArray( arr){
	let pivotElem = arr.length -1;
	
	while( pivotElem >= 0 ){
		let swapIdx = findMax( arr, pivotElem );
		let temp = arr[swapIdx];
		arr[swapIdx] = arr[pivotElem];
		arr[pivotElem]  = temp;
		pivotElem --;
	}
	return arr;
}

console.log(sortArray(arr));
