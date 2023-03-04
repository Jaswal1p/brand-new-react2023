export const Child = (props) => { 
    return (
        <div>
            <button onClick={() => props.greetHandler('Dan')}>Greet Parent</button>
        </div>
    );
};