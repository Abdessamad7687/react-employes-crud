import React from 'react'
import Title from "./components/Title"
import LabelForm from './components/LabelForm'
import InputForm from "./components/InputForm"
import FormButton from './components/FormButton'

const App = () => {
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
        <InputForm
          type="text"
          placeholder="your first name"
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
          placeholder="your last name"
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

    </div>
  )
}

export default App