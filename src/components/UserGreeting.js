export const UserGreeting = () => {
    const isLoggedIn = false;
    // return (
    //   <div>Welcome {isLoggedIn ? 'Bobby' : 'Guest'}</div>

            
    // );    

    return (
      <div>Welcome {isLoggedIn && 'Bobby'}</div>
    );

};