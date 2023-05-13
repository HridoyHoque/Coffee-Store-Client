
import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
     
      <h1 className='text-6xl text-blue-700 text center'>Coffee Store</h1>
     <Link to='/addCoffee'><button className='btn btn-success pt-2.5'>AddCoffee</button></Link>
      
    </>
  )
}

export default App
