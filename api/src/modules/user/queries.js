import db from '../../config/database';

const userQueries = {
  register : (user) => {
    console.log('---------------------user', user)
    return new Promise((resolve, reject)=>{
      let sqlQuery= `INSERT INTO users (email, pseudo, password, role) VALUES ("${user.email}", "${user.pseudo}", "${user.hashedPassword}", "player")` 
      //role ="player", role is added as a default for the Enum in the database
      db.query(sqlQuery, (err, result) =>{
        (err) ? reject(err) : resolve(result)
      })
    }) 
  },
  login : (userLogin) =>{
  console.log('---------------------userlogin', userLogin)
  return new Promise((resolve, reject) =>{
    let sqlQuery = `SELECT * FROM users WHERE email = "${userLogin}" OR pseudo = "${userLogin}"`
    db.query(sqlQuery, (err, result) => {
      (err) ? reject(err) : resolve(result[0]) // the result is always an array[0]
    })
  })
  }
}

export default userQueries