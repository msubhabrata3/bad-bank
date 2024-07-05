import { Card } from "./context";

function Home(){
    return (
        <Card 
            bgcolor="success"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to the bank"
            text="You can use this bank"
            body={(<img src={require('../bank.png')} className="img-fluid" alt="Bank Logo" />)}
        />
    );
}

export default Home;