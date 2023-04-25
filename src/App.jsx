import React from 'react'
import Title from "./components/Title"
import LabelForm from './components/LabelForm'
import { useState } from 'react'

const App = () => {
  const [Employes, setEmployes] = useState([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const AddEmploye = () => {
    const newEmploye = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone
    }
    setEmployes([...Employes, newEmploye])
    console.log(Employes)
  }

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
        <input
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
        <input
          type="email"
          placeholder="your email"
          className="form-control mt-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>


      {/* Phone number */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="Phone"
          labelText="Phone"
        />
        <input
          type="number"
          placeholder="+21236767687"
          className="form-control mt-1"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>


      {/* Submit Button */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <button className="btn btn-dark w-100 mt-2" onClick={() => AddEmploye()}>Add Employe</button>
      </div>


      {/* Table */}

      <table className='table mt-4 w-75 mx-auto'>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            Employes.map((Employe, index) => (
              <tr key={index}>
                <td>{Employe.fname}</td>
                <td>{Employe.lname}</td>
                <td>{Employe.email}</td>
                <td>{Employe.phone}</td>
                <td>
                  <button class="btn btn-warning" >Edit</button>
                  <button class="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  )
}

export default App