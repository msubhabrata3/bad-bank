import { useContext, useState } from "react";
import { UserContext, Card } from "./context";

function Withdraw(){
    const ctx = useContext(UserContext);
    let currentBalance = ctx.users[0].balance;
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [balance, setBalance] = useState(currentBalance);
    const [withdraw, setWithdraw] = useState('');
    
    function clearForm(){
        setWithdraw('');
        setShow(true);
    }

    function validate(field, label){
        if (!field){
            setStatus('Error: Please enter ' + label + ' amount.');
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
    try{
        document.getElementById('createaccount').className = 'nav-link';
        document.getElementById('deposit').className = 'nav-link';
        document.getElementById('withdraw').className = 'nav-link active';
        document.getElementById('alldata').className = 'nav-link';
    }catch(e){
    
    }
    
    function checkBalance(currentBalance, withdraw){
        if(withdraw > currentBalance){
            setStatus('Transaction failed: Please enter an amount less than the available balance.');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }
    function handleWithdraw(){
        if (!validate(withdraw, 'withdraw')) return;
        if (!checkBalance(currentBalance, withdraw)) return;

        console.log('Old Balance: ' + currentBalance);
        console.log(withdraw);
        currentBalance = currentBalance - parseInt(withdraw);
        console.log('New Balance: ' + currentBalance);
        ctx.users[0].balance = currentBalance;
        setBalance(currentBalance);
        setShow(false);
    }

    return (
        <Card 
            bgcolor="success"
            txtcolor="black"
            header="Withdraw"
            status={status}
            body = {show ? (
                <>
                Balance ${ctx.users[0].balance}<br/>
                Withdraw Amount<br/>
                    <input type="input" className="form-control" id="withdraw"
                    placeholder="Withdraw Amount" onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" disabled={!withdraw} onClick=
                    {handleWithdraw}>Withdraw</button>
                </>
            ) : (
                <>
                <h5>Success</h5>
                Your current balance is ${balance}<br/>
                <button type="submit" className="btn btn-light" onClick=
                    {clearForm}>Withdraw More</button>
                </>
            )}
        />
    );
}

export default Withdraw;