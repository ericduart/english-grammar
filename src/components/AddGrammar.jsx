import { useState, useEffect } from 'react'
import {
  collection,
  addDoc
} from "firebase/firestore";
import { db } from "../firebase";

function Addgrammar() {

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.grammar.value);
    console.log(e.target.meaning.value);

    let grammar = e.target.grammar.value;
    let meaning = e.target.meaning.value;

    try {
      const docRef = await addDoc(collection(db, "verbs"), {
        grammar,
        meaning
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }

  return (
    <div className='container mx-auto flex justify-center'>
      <div>
        <form onSubmit={handleSubmit} className="pt-4">
          <input type="text" placeholder='grammar' id='grammar' required className='bg-color-30 text-color-10 p-2 placeholder:text-[#8ACB28] rounded mr-2' />
          <input type="text" placeholder='meaning' id='meaning' required className='bg-color-30 text-color-10 p-2 placeholder:text-[#8ACB28] rounded ml-2' />
          <br />
          <input type="submit" value="Send" className='bg-color-30 p-2 text-color-10 hover:text-rose duration-200 mt-3' />
        </form>

      </div>
    </div>
  )
}

export default Addgrammar
