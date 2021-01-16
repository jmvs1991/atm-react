import Layout from "./Shared/Pages/Layout/Layout.page";
import PublicRoute from "./Shared/Routes/Public.route";
import "./App.scss";

const App = () => {
  return (
    <Layout>
      <PublicRoute />
    </Layout>
  );
};

export default App;
