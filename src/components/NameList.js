export const NameList = () => {
    const names = [
            "John",
            "Jack",
            "Jill",
            "Jim",
            "Josh"]
        
    return (
       <div>
        {names.map((name) => {
            return <h2 key={name}>{name}</h2>
        })}
       </div>
    )   
};