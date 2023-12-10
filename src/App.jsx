import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTrainComponent from './component/ListTrainComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrainComponent from './component/TrainComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListTrainComponent />}>  </Route>
          <Route path='/trains' element={<ListTrainComponent />}>  </Route>
          <Route path='/add-train' element={<TrainComponent />}>  </Route>
          <Route path='/update-train/:id' element={<TrainComponent />}>  </Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
