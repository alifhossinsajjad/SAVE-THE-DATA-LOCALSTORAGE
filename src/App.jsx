
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


const bottlesPromise = fetch('../public/bottles.json').then(res => res.json())

function App() {


  
  return (
    <>
     
      <h1>Fake JSON Data loaded</h1>
     
      <Suspense fallback={<h2>Bottles are loading...</h2>}>
        <Bottles bottlesPromise = {bottlesPromise}/>
      </Suspense>
    </>
  )
}

export default App
