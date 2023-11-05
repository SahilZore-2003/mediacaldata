import React, { useState } from 'react'
import Data from './Data'
import database from "../database.json"


const Login = () => {
  const [userinput, setUserInput] = useState("")
  const [showdata, setShowData] = useState(false);
  const [getData, setGetData] = useState({});

  function handleSubmit(e) {
    e.preventDefault()

    if (+userinput < 1 || +userinput > 10) {
      alert("please enter id between 1 to 10");
      setUserInput("")
      return;
    }


    let userfromdatabase = database.filter((e) => {
      return +userinput === e.id;
    })

    setGetData(userfromdatabase);



    setShowData(true)

  }


  return (
    <div>
      <form className='login-container' onSubmit={handleSubmit}>
        <div>
          <input type="number" inputMode='numeric' min="1" max="10" onChange={(e) => setUserInput(e.target.value)} id="patient-id" placeholder='Enter patient id here.' />
          <div className='center'>
            <button>Login</button>
          </div>
        </div>
      </form>

      {
        showdata && <Data data={getData} />
      }


    </div>
  )
}

export default Login
