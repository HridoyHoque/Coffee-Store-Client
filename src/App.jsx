import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
 const coffees = useLoaderData()

  return (
    <>
     
      <h1 className='text-6xl text-blue-700 text center'>Coffee Store</h1>
      <h1 className='text-6xl text-blue-700 text center'>Coffee Available: {coffees.length}</h1>
     <Link to='/addCoffee'><button className='btn btn-success pt-2.5'>AddCoffee</button></Link>
      
    </>
  )
}

export default App
