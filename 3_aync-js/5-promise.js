const recordVideoOne = new Promise((resolve, reject)=>{
    resolve('Video 1 recorded');
    // reject('Video 1 upload error');
})

const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve('Video 2 recorded');
    // reject('Video 2 upload error');
})

const recordVideoThree = new Promise((resolve, reject)=>{
    resolve('Video 3 recorded');
    // reject('Video 3 upload error');
})

// To execute all the promises
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then( messages =>{
    console.log('Promises resolved: ', messages);
}).catch(err=>{
    console.log('Promise rejected: ',err);
});

// To execute something as soon as a single promise in array gets resolved
// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then( message =>{
//     console.log('Execute this when one of teh above promises in array get resolved: ', message);
// })

/**
 * Explore these: 
 *  1. Promise.all
 *  2. Promise.allSettled
 *  3. Promise.any
 *  4. promise.race
 */