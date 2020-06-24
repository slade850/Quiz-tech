import themeQueries from './queries';


const themeService = {
 getAll: () => {
  return new Promise((resolve, reject) =>{
    themeQueries.getAll()
      .then(result => resolve({status: 200, result: result }))
      .catch(err => reject({ status: 400, message : err}))
  })
 }
}

export default themeService