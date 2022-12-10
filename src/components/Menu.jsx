import React, { useState } from "react";
import Addgrammar from "./AddGrammar";
import Grammar from "./Grammar";
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Menu() {


  let [showGrammar, setShowGrammar] = useState(true);

  function changeToAddGrammar(e) {
    setShowGrammar(false);
  }

  function changeToListOfGrammar(e) {
    setShowGrammar(true);
  }

  return (
    <>
      <div className='container mx-auto text-center pt-5 pb-5'>
        <button className={showGrammar ? 'dark:text-color-10 pr-2 duration-200' : 'pr-2 hover:dark:text-color-10 duration-200'} onClick={changeToListOfGrammar}>List of grammar sentences</button>
        <button className={showGrammar ? 'dark:text-white pl-2 hover:dark:text-color-10 duration-200' : 'pl-2  text-color-10 duration-200'} onClick={changeToAddGrammar}>Create new grammar sentece.</button>
      </div>
      {showGrammar && <Grammar />}
      {!showGrammar && <Addgrammar />}
      <div className="container flex justify-center mt-5 mx-auto">
        <button className="text-xl hover:text-rose" onClick={() => {
          signOut(auth);
        }}>Log out</button>
      </div>
    </>
  )
}