import React from "react"; 
// import MainHistory from "./components/MainHistory";
import Header from "./components/Header/Header";
import Division from "./components/TeamDivision";
import Footer from "./components/Footer/Footer";

 

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FormLogin /> */}
      {/* <MainHistory /> */}
      <Division />
      <Footer />
    </div>
  );
}

export default App;
