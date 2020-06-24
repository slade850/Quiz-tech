import themeService from './service'; 

const themeController = {
  getAll: (req, res )=> {
    themeService.getAll()
    .then(result => res.status(result.status).send(result.result))
    .catch(err => res.status(err.status).send(err.message))
  }
}

export default themeController