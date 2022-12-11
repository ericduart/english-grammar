import React from "react";
import { FiDelete } from 'react-icons/fi'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase'

function CreateGrammarTable({ data }) {

  async function deleteDocFromFirebase(docId) {
    if (window.confirm('Are you sure?')) {
      // new Date(value.data.timestamp.seconds * 1000).toDateString()
      await deleteDoc(doc(db, 'verbs', docId));
    }
  }

  return (
    <table className='bg-color-30 table-auto w-full text-center max-w-3xl overflow-hidden border border-color-10'>
      <thead>
        <tr className=''>
          <th className='p-2 text-black bg-color-10'>Grammar</th>
          <th className='p-2 text-black bg-color-10' colSpan={2}>Meaning</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => (
          <tr key={index} className={`border-t-white border-b-white duration-200 ${index % 2 != 0 ? 'bg-background' : ''}`}>
            <td className='p-2 w-1/2'>{`${value.data.grammar}`}</td>
            <td className='p-2 w-1/2 relative blur hover:blur-none duration-500'>{value.data.meaning}</td>
            <td className="p-[10px]"><span className='text-rose' onClick={() => deleteDocFromFirebase(value.id)}><FiDelete /></span></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CreateGrammarTable;