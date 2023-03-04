
export const Greet = (props) => {

    return (
    <div>   
        <h1>
            Hello {props.name} likes to eat { props.likesFood }
        </h1>
        { props.children }
    </div> 
    )
}

// export default Greet;