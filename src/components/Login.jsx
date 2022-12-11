import React, { useState, useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'
import Loading from './Loading';

function Login({ }) {

  let [loading, setLoading] = useState(false);
  let [loginError, setLoginError] = useState(false)

  let userInput = useRef()
  let passwordInput = useRef();

  function resetInputs() {
    userInput.current.value = '';
    passwordInput.current.value = '';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoginError(false);
    setLoading(true);

    let user = e.target['user'].value;
    let passwd = e.target['password'].value;

    signInWithEmailAndPassword(auth, user, passwd).catch(err => {
      /* 
        Error codes:
        -> auth/invalid-email
        -> auth/user-not-found
        -> auth/wrong-password
      */
      setLoading(false);
      setLoginError(true);

      resetInputs();

    })

  }

  return (
    <>
      <div className='container mx-auto flex justify-center w-[400px]'>
        <div>
          <h1 className='text-color-10 text-2xl'>Log in</h1>
          <h2 className='text-rose text-xl'>You must log in to access the content</h2>
          <form onSubmit={handleSubmit} className="pt-4">
            <input type="text" name="user" ref={userInput} placeholder='user' id='user' className='bg-color-30 text-color-10 p-2 placeholder:text-[#8ACB28] rounded w-full' />
            <input type="password" name="password" ref={passwordInput} placeholder='password' id='password' className='bg-color-30 text-color-10 p-2 placeholder:text-[#8ACB28] rounded w-full mt-3' />
            <input type="submit" value="Send" className='bg-color-30 p-2 text-color-10 border-b mt-3 hover:text-rose duration-200' />
          </form>
        </div>
      </div>
      {loading && <Loading />}
      {loginError &&
        <div className='container mx-auto flex justify-center mt-5 text-xl animate__animated animate__shakeX'>
          <h1 className='text-rose font-bold'>Could not log in. Check user and password.</h1>
        </div>
      }
    </>
  )
}

export default Login