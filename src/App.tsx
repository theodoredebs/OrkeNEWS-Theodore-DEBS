import "./App.css";
import Layout from "./layouts/Layout";
import MainRoutes from "./Routes";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <>
      <Layout>
        <MainRoutes />
      </Layout>
    </>
  );
}

export default App;
