import {Child} from './Child';

export const Parent = () => {
    const greetParent = () => {
        console.log('Hello Parent');
        alert('Hello Parent');
        
    }

    return <Child greetHandler={greetParent} />

}