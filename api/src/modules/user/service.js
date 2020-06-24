import bcrypt from 'bcrypt';
import userQueries from './queries'


const userService = {
 register: (body) => {
   return new Promise((resolve, reject) =>{
    let { email, pseudo, password, passConfirm } = body
    console.log('*****body ***', body)
    if (typeof email !== 'string' || typeof pseudo !== 'string' || typeof password !== 'string' || typeof passConfirm !== 'string'){
      reject( {status: 400, message: 'please enter a string in all fields'}) 
    }
    if ( password === passConfirm ){
      bcrypt.genSalt()
      .then(salt => bcrypt.hash(password, salt))
      .then( hashedPassword => userQueries.register({email, pseudo, hashedPassword}))
      .then(user => resolve({status: 201, message : "new user created" }))
      .catch(err => reject({ status: 401, message : err}))
    }
    else { reject( {status: 400, message: "unmatched password"})}
   })
 }
}

export default userService