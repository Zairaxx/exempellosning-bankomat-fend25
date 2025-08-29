import { useEffect, useState } from "react"

const ATM = () => {

    const [balance,setBalance] = useState(0);
    const [value, setValue] = useState(0)

    const handleValue = (e) => setValue(Number(e.target.value))

    const deposit = () => {
        if(value !== 0){
            setBalance(prevState => prevState + value)
        } else {
            console.log("Please select an amount")
        }
    }
    
    const withdraw = () => {
        if(value === 0){
            console.log("Please select an amount")
        } else if(balance - value < 0){
            console.log("You're broke.")
        } else {
            setBalance(prevState => prevState - value)
        }
    }

    useEffect(() => {
        console.log("ATM is now ready to use");

        return () => {console.log("ATM is shutting down...")}
    }, [])

    useEffect(() => {
       if (balance !== 0){
        console.log("Nu har balance förändrats, nytt värde: " + balance )
       }
    },[balance])


    return(<>
        <h2>ATM</h2>
        <p><strong>Saldo: </strong> {balance}</p>
        <input type="number" name="value" id="value" onChange={handleValue} value={value}/>
        <br/>
        <button onClick={deposit}>Insättning</button>
        <button onClick={withdraw}>Uttag</button>
    </>)
}

export default ATM