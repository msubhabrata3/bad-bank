import { Card } from "./context";
import { useContext } from "react";
import { UserContext } from "./context";
import { useState } from "react";

function CreateAccount(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if(label === 'email'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(field)){
                setStatus('Invalid Email Address');
                setTimeout(() => setStatus(''),3000);
                return false;
            }
        }
        if(label === 'password'){
            if (field.length < 8) {
                setStatus('Password should be at least 8 characters');
                setTimeout(() => setStatus(''),3000);
                return false;
              }
        }
        return true;
    }

    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    try{
        document.getElementById('createaccount').className = 'nav-link active';
        document.getElementById('deposit').className = 'nav-link';
        document.getElementById('withdraw').className = 'nav-link';
        document.getElementById('alldata').className = 'nav-link';
    }
    catch(e){
    
    }
    
    return (
        <Card
            bgcolor="info"
            txtcolor="black"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name"
                placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email<br/>
                <input type="input" className="form-control" id="email"
                placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="password" className="form-control" id="password"
                placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick=
                {handleCreate} disabled={!name || !email || !password}>Submit</button>
                </>
            ): (
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick=
                {clearForm}>Add another account</button>
                </>
            )
        }
        />
    );
}

export default CreateAccount;