import userService from './service'; 

const userController = {
  register: (req, res )=> {
    userService.register(req.body)
    .then(result => res.status(result.status).send(result.message))
    .catch(err => res.status(err.status).send(err.message))
  },
  login: (req, res) =>{
    userService.login(req.body)
    .then( result => res.status(result.status).send(result))
    .catch(err => res.status(err.status).send(err.message) )
  }
}

export default userController