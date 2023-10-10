import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./routes/Home"
import Auth from "./routes/Auth"
import Page404 from "./routes/Page404"
import Provider from "./context/Context"
import Cheakout from "./routes/Cheakout"
import SingleProduct from "./routes/SingleProduct"
import Categories from "./routes/Categories"

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/cheakout" element={<Cheakout />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/category/:category" element={<Categories />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
