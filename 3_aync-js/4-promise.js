userLeft = false;
userWatchingCatMeme = true;

function watchPromiseTutorial() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching cat meme',
                message: 'Web dev simplified < Cat'
            });
        } else {
            resolve('Thumbs up and subsribe');
        }
    });
}

watchPromiseTutorial().then(data => {
    console.log('Promise Resolved with data : ', data);
}).catch(err => {
    console.log('promise Rejected with error :', err);
});