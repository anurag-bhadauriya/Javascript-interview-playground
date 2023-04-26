// Asysn await of below version present in async-await2.js
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Inside make request ${location}`);
        if (location == 'Google')
            resolve('Google said Hii');
        else
            reject('We can only talk to google');
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('processing request');
        resolve(`Extra information ${response}`);
    })
}

makeRequest('Google').then(resp => {
    console.log(`Resp has been received with msg : ${resp}`);
    return processRequest(resp);
}).then(data => {
    console.log(`Resp has been processed with msg : ${data}`);
}).catch(err => {
    console.log(`Error occured with msg: ${err}`)
})