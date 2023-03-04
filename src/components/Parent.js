import {Child} from './Child';

export const Parent = () => {
    const greetParent = (childName) => {
        console.log(`Hello Parent ${childName}`);

        alert(`Hello Parent ${childName}`);

        
    }

    return <Child greetHandler={greetParent} />

}