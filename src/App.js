import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <div>Shop now page</div>;
};

const App = () => {
  return (
    <Routes>
      {/* //register route level components */}
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
