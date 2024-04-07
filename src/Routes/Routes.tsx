import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categories } from "../Screens/Categories/Categories";
import { Checkout } from "../Screens/Checkout/Checkout";

export function AppRoutes() {  
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    );
}