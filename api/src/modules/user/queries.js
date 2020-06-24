import db from '../../config/database'

const userQueries = {
  register : (user) => {
    return new Promise((resolve, reject)=>{
      let sqlQuery= `INSERT INTO users (email, pseudo, password, role) VALUES ("${user.email}", "${user.pseudo}", "${user.password}", "player")` 
      //role ="player", role is added as a default for the Enum in the database
      db.query(sqlQuery, (err, result) =>{
        (err) ? reject(err) : resolve(result)
      })
    }) 
  }

}

export default userQueries