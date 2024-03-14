const accountId = 154
let accountEmail = "prem@google.com"
var accountPassword = "abc"
let accountCity = "Gurgaon"

/* - prefer not to use var because of scope issues
   - const is used for declaration of constants
   - if variable is only declared then undefined is value assigned to it by default
*/

let accountState;
console.table([accountId, accountCity, accountEmail, accountPassword, accountState])