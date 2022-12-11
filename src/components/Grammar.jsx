import { useState, useEffect, CSSProperties } from 'react'
import {
  collection,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import { db, auth } from "../firebase";
import CreateGrammarTable from './CreateGrammarTable';

function Grammar() {

  let [arrData, setArrData] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'verbs'), orderBy('timestamp', 'desc'))
    const unsub = onSnapshot(q, (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({ id: doc.id, data: doc.data() });
      })
      setArrData(arr);
    }, (err) => {
      console.error(err);
    })

    return () => {
      unsub();
    }

  }, []);

  return (
    <>
      <div className='container mx-auto pt-4'>
        <div className='flex justify-center'>
          {arrData ? <CreateGrammarTable data={arrData} /> : <h2 className='text-color-10'>Getting data...</h2>}
        </div>
      </div>
    </>
  )
}

export default Grammar;