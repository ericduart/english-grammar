import { useState, useEffect, CSSProperties } from 'react'
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
import CreateGrammarTable from './CreateGrammarTable';

function Grammar() {

  let [arrData, setArrData] = useState(null);

  const override = {
    borderWidth: '5px'
  };

  const getOnSnapShot = () => {
    onSnapshot(collection(db, 'verbs'), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({ id: doc.id, data: doc.data() });
      })
      setArrData(arr);
    }, (err) => {
      console.error(err);
    })
  }

  const main = async () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getOnSnapShot();
      } else {
        setArrData(null);
      }
    })

  }

  async function deleteDocFromFirebase(docId) {
    if (window.confirm('Are you sure?')) {
      await deleteDoc(doc(db, 'verbs', docId));
    }
  }

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'verbs'), (docs) => {
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