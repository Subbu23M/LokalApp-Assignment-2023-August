import { Route, Routes } from "react-router-dom"
import { DisplayData } from "./Components/DisplayData"
import './Styling/Main.scss'
import { MobileUnique } from "./Components/MobileUnique"

export const App = () => {
  return (
    <>
      <h1 className="text-center my-2">
        Lokal App Assignment 
      </h1>
      <Routes>
        <Route
          path='/'
          element={<DisplayData/>}
        />
        <Route
          path='/:id'
          element={<MobileUnique/>}
        />
      </Routes>
    </>
  )
}