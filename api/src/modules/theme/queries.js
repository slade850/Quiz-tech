import db from '../../config/database';

const themeQueries = {
  getAll : () => {
    return new Promise((resolve, reject)=>{
      let sqlQuery= `SELECT * FROM themes` 
      db.query(sqlQuery, (err, result) =>{
        (err) ? reject(err) : resolve(result)
      })
    }) 
  }
}

export default themeQueries