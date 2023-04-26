// Shows asynchronous behaviour of the code means 
// Refer its callback version in callback2.js
let fetchedData;

const fetchData =()=>{
    setTimeout(()=>{
        fetchedData= {name: 'John', age: 25};
    }, 3000);
}

const displayData =()=>{
    console.log('fetched data: ',fetchedData);
}

console.log('Main called');
fetchData();
displayData();