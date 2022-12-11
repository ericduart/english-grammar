import { useState, useRef } from 'react'
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../firebase";
import Loading from './Loading';
import toast, { Toaster } from 'react-hot-toast';

function Addgrammar() {

  let [loading, setLoading] = useState(false);

  let grammarInput = useRef();
  let meaningInput = useRef();

  function emptyInputs() {
    grammarInput.current.value = '';
    meaningInput.current.value = '';
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    let grammar = e.target.grammar.value;
    let meaning = e.target.meaning.value;

    const docRef = addDoc(collection(db, "verbs"), {
      grammar,
      meaning,
      timestamp: serverTimestamp()
    });
    docRef.then(data => {
      emptyInputs();
      setLoading(false);
      toast.success('New row added successfully.')
    }).catch(err => toast.error('Oops! Something went wrong.'));

  }

  return (
    <>
      <div className='container mx-auto flex justify-center'>
        <div>
          <form onSubmit={handleSubmit} className="pt-4">
            <input type="text" ref={grammarInput} placeholder='grammar' id='grammar' required className='bg-color-30 text-color-10 p-2 placeholder:text-[#8ACB28] rounded mr-2' />
            <input type="text" ref={meaningInput} placeholder='meaning' id='meaning' required className='bg-color-30 text-color-10 p-2 placeholder:text-[#8ACB28] rounded ml-2' />
            <br />
            <input type="submit" value="Send" className='bg-color-30 p-2 text-color-10 hover:text-rose duration-200 mt-3' />
          </form>

        </div>
      </div>
      {loading && <Loading />}
      <Toaster position="bottom-center" />
    </>
  )
}

export default Addgrammar
