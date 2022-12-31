import { ProductProvider } from "./contexts/ProductContext";
import { Products } from "./pages/Products/Products";

function App() {
  return (
    <ProductProvider>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Products />
      </div>
    </ProductProvider>
  );
}

export default App;
