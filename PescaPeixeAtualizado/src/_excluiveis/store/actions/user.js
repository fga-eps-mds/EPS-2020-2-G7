//import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

// const authBaseURL = 'https://identitytoolkit.googleapis.com/v1/accounts'
// const API_KEY = 'AIzaSyAChV3Im18rbefEfzqh0IzvA2gwbOalbM0'

// export const login = user => {
//     return{
//         type: USER_LOGGED_IN,
//         payload: user
//     }
// }

// export const logout = () => {
//     return{
//         type: USER_LOGGED_OUT
//     }
// }


// export const createUser = user => {
//     return dispatch => {
//         axios.post(`${authBaseURL}:/signupNewUser?key=${API_KEY}`, {
//             email: user.email,
//             password: user.password,
//             returnSecureToken: true
//         })
//         .catch(err => console.log(err))
//         .then(res => {
//             if(res.data.localId){
//                 axios.put(`/users/${res.data.localId}.json`, {
//                     name: user.name
//                 })
//                 .catch(err => console.log(err))
//                 .then(res => {
//                     console.log('Usuário criado com sucesso!')
//                 })
//             }
//         })
//     }
// }

// -----------------------------------------------------------

import axios from 'axios'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyAChV3Im18rbefEfzqh0IzvA2gwbOalbM0'

export const createUser = user => {
 
  const url = `${authUrlBase}/accounts:signUp?key=${API_KEY}`

    const dados = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }
   
    const config = {
      headers: {
          'Content-Type': 'application/json',
      }
    }
    
    return dispatch => {
      axios.post(url, dados, config)    
      .then( res => { 
        console.log(res)
        if (res.data.localId){
          axios.put(`/users/${res.data.localId}.json`, {
            name: user.name
          })        
          .then( res =>{
            console.log('Usuário cadastrado com sucesso')
          })
          .catch(err => console.log(err))
        }
   
      }).catch( err => console.log(err))   
    }
}