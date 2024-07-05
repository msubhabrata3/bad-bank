import { useContext, useState } from "react";
import { UserContext, Card } from "./context";

function Deposit(){
    const ctx = useContext(UserContext);
    let currentBalance = ctx.users[0].balance;
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [balance, setBalance] = useState(currentBalance);
    const [deposit, setDeposit] = useState('');
    
    function clearForm(){
        setDeposit('');
        setShow(true);
    }

    function validate(field, label){
        if (!field){
            setStatus('Error: Please enter ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }

        if (isNaN(field)) {
            setStatus('Error: Please enter numeric values only.');
            setTimeout(() => setStatus(''),3000);
            return false;
        }

        if (field < 0) {
            setStatus('Error: Please enter positive number only.');
            setTimeout(() => setStatus(''),3000);
            return false;
        }

        return true;
    }

    function handDeposit(){
        if (!validate(deposit, 'deposit')) return;

        console.log('Old Balance: ' + currentBalance);
        console.log(deposit);
        currentBalance = currentBalance + parseInt(deposit);
        console.log('New Balance: ' + currentBalance);
        ctx.users[0].balance = currentBalance;
        setBalance(currentBalance);
        setShow(false);
    }

    try{
        document.getElementById('createaccount').className = 'nav-link';
        document.getElementById('deposit').className = 'nav-link active';
        document.getElementById('withdraw').className = 'nav-link';
        document.getElementById('alldata').className = 'nav-link';
    }catch(e){
    
    }
    
    return (
        <Card 
            bgcolor="warning"
            txtcolor="black"
            header="Deposit"
            status={status}
            body = {show ? (
                <>
                Balance ${balance}<br/>
                Deposit Amount<br/>
                    <input type="input" className="form-control" id="deposit"
                    placeholder="Deposit Amount" onChange={e => setDeposit(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" disabled={!deposit} onClick=
                    {handDeposit}>Deposit</button>
                </>
            ) : (
                <>
                <h5>Success</h5>
                Your current balance is ${balance}<br/>
                <button type="submit" className="btn btn-light" onClick=
                    {clearForm}>Deposit More</button>
                </>
            )}
        />
    );
}

export default Deposit;