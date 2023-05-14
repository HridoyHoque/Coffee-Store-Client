import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCart from './components/CoffeeCart'
import Navbar from './components/Navbar'
import { useState } from 'react'


function App() {
  const LoadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(LoadedCoffees)

  return (
    <div>
      <div className='container'>
        <Navbar></Navbar>
      </div>

      <div className='p-24'>
        <h1 className='text-6xl text-blue-700 text-center mb-4'>Coffee Available: {coffees.length}</h1>
        <hr />

        <div className='grid md:grid-cols-2 gap-4 mt-4'>
          {
            coffees && coffees.map(coffee => <CoffeeCart key={coffee._id} coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCart>)
          }
        </div>
        <Link className='flex justify-center mt-3' to='/addCoffee'><button className='btn btn-success'>AddCoffee</button></Link>
      </div>
    </div>
  )
}

export default App
