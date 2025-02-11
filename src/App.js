import { BrowserRouter,Route,Routes } from "react-router-dom";
import Map from "./Map.js";
import Root from "./Root.js";
import A_Index from "./Routes/Armin/A_Index.js";
import G_index from "./Routes/Gergo/G_index.js";
import B_index from "./Routes/Balazs/B_index.js";
import I_index from "./Routes/Istvan/I_index.js";
import { useState } from "react";

function App() {

  const [Data, setData] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/school_portfolio_web" element={<Root setData={setData} />} />
        <Route path="/school_portfolio_web" element={<Map curr={Data} />} >  
          {/* Ármin */}
          <Route path="/school_portfolio_web/armin" element={<A_Index />} />
          {/* Gergő */}
          <Route  path="/school_portfolio_web/gergo" element={<G_index />} /> 
          {/* Balázs */}
          <Route  path="/school_portfolio_web/balazs" element={<B_index />} /> 
          {/* István */}
          <Route path="/school_portfolio_web/istvan" element={<I_index />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
