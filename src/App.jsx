import { useEffect, useContext } from 'react'
import { UserContext } from './components/context/UserContext';
import Header from './components/Header';
import Menu from './components/Menu';
import Login from './components/Login';
import Loading from './components/Loading'

function App() {

  let { user } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [user])

  return (
    <>
      <Header />
      {user && user !== 'login' && <Menu />/*  */}
      {user && user === 'login' && <Login />}
      {!user && <Loading />}
    </>
  )
}

export default App
