import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import Urls from "./_root/pages/Urls";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes   if there was a authentication*/}

        {/* <Route   path="/" element={<AuthLayout/>}>
    <Route  element={<Register/>}/>
    <Route  element={<Login/>}/>

    </Route> */}

        <Route element={<RootLayout />}>
          <Route path={"/"} index element={<Dashboard />} />
          <Route path={"/urls"} element={<Urls />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
