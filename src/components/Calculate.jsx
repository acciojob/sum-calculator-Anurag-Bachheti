import React,{useState} from 'react';

function Calculate() {
    const[sum, setSum] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value;
        if(value !== ""){
            setSum((prev) => prev + Number(value));
        }
    };

  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onChange={handleChange}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default Calculate;