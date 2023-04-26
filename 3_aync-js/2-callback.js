const fetchData =(cb)=>{
    setTimeout(()=>{
        let fetchedData= {name: 'John', age: 25};
        cb(fetchedData);
    }, 2000);
}

const displayData =(data)=>{
    console.log('fetched data: ',data);
}

console.log('Starts here');
fetchData(displayData);
console.log('Ends here');