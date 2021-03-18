// const promiseFunction = new Promise(function (resolve, reject) {
//     const add = function (a, b) { a + b };
//     resolve(add(2, 2));
// });

// promiseFunction.then(function (response) {
//     console.log(response);
// }).catch(function (error) {
//     console.log(error);
// });
console.log('Request data...');
let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Prepearing data...');
        const backendData = {
            user: 'Lana',
            port: 2021
        };
        resolve(backendData);
    }, 2000);
});
p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    });
});
p.then(clientData => {
    console.log('Data received: ', clientData);
    clientData.fromPromise = true;
    return clientData;
});
p.catch(err => console.error('Error: ', err));

//always will be typing 'finally', even if catch Error
p.finally(() => console.log('Finally'));

//______________sleep func_____________
let sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    });
};
/*
sleep(1000).then(() => console.log('After 1 sec'));
sleep(2000).then(() => console.log('After 2 sec'));
sleep(3000).then(() => console.log('After 3 sec'));
sleep(1000).then(() => console.log('After 3 sec'));// but 1
*/

//________wait when all promises run_______
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises');
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises');
});
