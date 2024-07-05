import { HashRouter, Routes, Route, UserContext } from "./components/context";
import Alldata from "./components/alldata";
import CreateAccount from "./components/createaccount";
import Deposit from "./components/deposit";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Withdraw from "./components/withdraw";

function Spa() {
  return (
    <HashRouter>
        <NavBar />
        <div className="container-fluid full-page">
        <UserContext.Provider value={{users:[{name:'subho', email:'subho@gmail.com', password:'Password123', balance:100}]}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
            </Routes>
        </UserContext.Provider>
        </div>
    </HashRouter>
  );
}

export default Spa;
