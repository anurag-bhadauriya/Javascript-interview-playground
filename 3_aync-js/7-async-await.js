// Asysn await of version present in async-await.js
function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Inside make request ${location}`);
        if(location =='Google')
            resolve('Google said Hii');
        else
            reject('We can only talk to google');
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('processing request');
        resolve(`Extra information ${response}`);
    })
}

async function doWork(){
    try{
        const resp = await makeRequest('Google');
        console.log(`Resp received: ${resp}`);
        const processResp = await processRequest(resp);
        console.log(`request processed: ${processResp}`);
    } catch(err) {
        console.log(`Error occured with message: ${err}`);
    }
}

doWork();