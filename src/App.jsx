import React from 'react'
import Title from "./components/Title"
import LabelForm from './components/LabelForm'
import InputForm from "./components/InputForm"
import FormButton from './components/FormButton'
import Table from './components/Table'
import Tbody from "./components/Tbody"
import { useState } from 'react'

const App = () => {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')

  return (
    <div className="container my-4">

      {/* Title */}

      <Title />

      {/* First Name */}


      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="fname"
          labelText="First name"
        />
      
        <input
          type="text"
          placeholder="your first name"
          className="form-control mt-1"
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      {/* Last Name */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="lname"
          labelText="Last name"
        />
        <InputForm
          type="text"
          className="form-control mt-1"
          placeholder="your last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      {/* Email */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="email"
          labelText="email"
        />
        <InputForm
          type="email"
          placeholder="your email"
        />
      </div>


      {/* Phone number */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="Phone"
          labelText="Phone"
        />
        <InputForm
          type="number"
          placeholder="+21236767687"
        />
      </div>


      {/* Submit Button */}

      <FormButton />



      {/* Table */}

      <Table>
        <Tbody>

        </Tbody>
      </Table>

    </div>
  )
}

export default App