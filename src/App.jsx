import { Route, Routes } from "react-router-dom"
import { DisplayData } from "./pages/DisplayData"
import { MobileUnique } from "./pages/MobileUnique"
import './Styling/Main.scss'

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