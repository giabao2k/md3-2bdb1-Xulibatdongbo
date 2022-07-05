// let money = 10000;
// const buyACar = (car) => {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money >= 10000) {
//                 resolve("can buy " + car);
//             } else {
//                 reject("Do not enough money");
//             }
//         }, 100);
//     }))
// }

// money = 1000001;
// const promise = buyACar("Vinfast").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// })
let money = 500
function buyACar(car){
    let promise = new Promise(function(resolve, reject){
        setTimeout(
            () => {
                if(money>= 1000){
                    resolve(`Bạn đủ tiền mua xe ${car}`)
                }else{
                    reject(`Bạn không đủ tiền mua xe ${car}`)
                }
            },5000)
    })
    promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(value){
        console.log(value);
    })
    .finally(
        () => console.log('done')
    )
}
buyACar('mec')