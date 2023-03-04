export const Child = (props) => { 
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    );
};