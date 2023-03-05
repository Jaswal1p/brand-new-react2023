import { useState } from 'react';

export const Form = () => {

   const formLook = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '20px',
   }

   const labelDec = {
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    
   }

    const [username, setUsername] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form data is ${username}`)
    }

    return <form onSubmit={handleSubmit}>
    
        <div style={formLook}>

            <label style={labelDec}>Username</label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            
        </div>
        <button type='submit'>Submit</button>
        

    </form>
};
