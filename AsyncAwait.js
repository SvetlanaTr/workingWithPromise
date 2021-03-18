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
