// a list of error codes from server
// E01 : Invalid username or password
// E02 : Too many attempts
// E03 : Missing data
// Other code : Sonthing went wrong
// Write a funtion that take errorCode and return the according message


function getErrorMessage(errorCode) {
    let message = '';
    switch (errorCode) {
        case 'E01':
            message = "nvalid username or password"
            break;
        case 'E02':
            message = "Too many attempts"
            break;
        case 'E03':
            message = "Missing data"
            break;

        default:
            message = "Something went wrong"
            break;
    }
    return message;
}'free'

console.log(getErrorMessage('E02'));

//homework

// function getTicketPrice(age) {
//   if (age < 0 || age >= 100) return 'error';

//   let price  = '';
//   if (age <= 6 || age >= 80) return 'free ticket'
//   if (age > 6 && age <= 12) {
//     price = '20.000 VND'
//   }else {
//     price = "50.000 VND"
//   }
//   return price;
// }

// console.log(getTicketPrice(3));