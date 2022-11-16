import "./style/App.css";
import Footer from "./components/Footer.js";
import Card from "./components/Card.js";
import Form from "./components/Form.js";
import Confirmation from "./components/Confirmation.js";

function App() {
  return (
    <>
      <div className="container">
        <Card />
        <Form />
        {/* <Confirmation /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
