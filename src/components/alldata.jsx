import { useContext } from "react";
import { UserContext, Card } from "./context";

function Alldata(){
    const ctx = useContext(UserContext);

    try{
        document.getElementById('createaccount').className = 'nav-link';
        document.getElementById('deposit').className = 'nav-link';
        document.getElementById('withdraw').className = 'nav-link';
        document.getElementById('alldata').className = 'nav-link active';
    }catch(e){
    
    }

    return (
        <Card
            bgcolor="secondary"
            txtcolor="black"
            body={
            <div className="container">
            <h3>All Data<br/></h3>
            <table className="table">
            <thead>
            <tr key="header-row">
                <th key="header-index-col" scope="col">#</th>
                <th key="header-name-col" scope="col">Name</th>
                <th key="header-email-col" scope="col">Email</th>
                <th key="header-pass-col" scope="col">Password</th>
            </tr>
            </thead>
            <tbody>
                {ctx.users.map((value, index, array) => {
                    return (
                    <tr key={index}>
                        <td key={index+'0'}>{index+1}</td>
                        <td key={index+'1'}>{value.email}</td>
                        <td key={index+'2'}>{value.name}</td>
                        <td key={index+'3'}>{value.password}</td>
                    </tr>
                    )
                    
                })}
                </tbody>
                </table>
                </div>
            }
        />
    );
}

export default Alldata;