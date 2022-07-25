const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
   });
   promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
   