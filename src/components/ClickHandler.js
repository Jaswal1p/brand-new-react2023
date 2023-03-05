export const ClickHandler = () => {
    const clickHandler = (e, count =1) => {
        console.log('You clicked me!', count, e);
        alert('You clicked me!');
        
    }
   return (
      <div>
        <button onClick={clickHandler}>Click Me</button>  
        <button onClick={(e) => clickHandler(e, 5)}>Click 5</button>
        <button onDoubleClick={(e) => clickHandler(e, 6)}>Double Click Here 6</button>
        <button onMouseEnter={(e) => clickHandler(e, 7)}>Mouse enter Here 7</button>
      </div>
   )
};