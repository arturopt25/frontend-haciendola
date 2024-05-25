import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"
import ProductsPage from "./pages/ProductsPage"
import ProductFormPage from "./pages/ProductFormPage"
import ProtectedRoute from "./ProtectedRoute"
import { ProductProvider } from "./context/ProductContext"


function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} ></Route>

        {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/products' element={<ProductsPage />} ></Route>
          <Route path='/product/:id' element={<ProductFormPage />} ></Route>
          <Route path='/create-product' element={<ProductFormPage />} ></Route>
        {/* </Route>  */}

        </Routes>
      </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
