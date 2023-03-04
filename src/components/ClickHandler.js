export const ClickHandler = () => {
    const ClickHandler = (e, count =1) => {
        console.log('You clicked me!', count, e);
        alert('You clicked me!');
        
    }
   return (
      <div>
        <button onClick={ClickHandler}>Click Me</button>
        <button onClick={(e) => ClickHandler(e, 5)}>Click 5</button>
        
      </div>
   )
};