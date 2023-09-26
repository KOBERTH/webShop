import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./routes/Home/Home"
import Auth from "./routes/Auth"
import Page404 from "./routes/Page404"
import Provider from "./context/Context"
import Cheakout from "./routes/Cheakout"
import SingleProduct from "./routes/SingleProduct"

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cheakout" element={<Cheakout />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
