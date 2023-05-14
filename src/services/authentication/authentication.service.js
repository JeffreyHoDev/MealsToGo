
import { signInWithEmailAndPassword } from 'firebase/auth'


export const loginRequest = (auth, email, password) => {
    signInWithEmailAndPassword(auth, "hokahwai@hotmail.com", "wS2021TNTS!@")
    .then((user) => {
      console.log(user)
      setIsAuthenticated(true)
    })
    .catch(console.log)
}