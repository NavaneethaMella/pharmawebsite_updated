'use client'
import { db } from './firebaseConfig'
import { collection , addDoc } from 'firebase/firestore'
import React, { useState } from 'react';

async function addDataToFireStore(name , email , message){
    try{
        const docRef = await addDoc(collection(db , "messages"),{
            name: name,
            email: email,
            message : message,
        });
        console.log("Document written with Id: ", docRef.id);
        return true;
    } catch(error){
            console.error("Error adding document ", error);
            return false;
        }
    }


function contact(){
    const [name ,setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFireStore(name , email , message);
        if(added){
            setName("");
            setEmail("");
            setMessage("");
            alert("Data added to firestore DB !!")

        }
    }
    return(
        <div>
            <main className="flex min-h-screen flex-col items-center p-24">
                <h1 className = "text-5xl font-bold m-10">
                    Request a Callback
                </h1>
                <form onSubmit = {handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg'>
               <div className= 'mb-4'>
                <label htmlFor ='name' className='block text-gray-700 font-bold mb-2'>
                    Name:
                </label>
                <input 
                type='text'
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

               </div>
               <div className= 'mb-4'>
                <label htmlFor ='email' className='block text-gray-700 font-bold mb-2'>
                    Email:
                </label>
                <input 
                type='email'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                
               </div>
               <div className= 'mb-4'>
                <label htmlFor ='message' className='block text-gray-700 font-bold mb-2'>
                    Message:
                </label>
                <textarea 
                rows={5}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} >
                </textarea>
               </div>
               <div className='text-center'>
                <button type='submit' className= 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'> 
                    Submit

                </button>
               </div>
                </form>
                
            </main>
        </div>
    )
}
export default contact;