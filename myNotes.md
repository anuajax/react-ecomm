when any reducer updates,
we always returning a new object from reducer
So whenever we return a new object REDUX rebuilds the entire state object ,, mapStateToProps is being
called every single Time ,...which is always passing in new props to our componnets
This is always re-rendering our componnets
 Our reduce selector is always returning a new value 

 This is not good for performance ...
 we dont want to re-render components
 when state change is for some other component

 So cache or memoize the value of selector 


 Reselect is used to avoid mapStateToprops being called every time so will need to put mapStateToProps content 
 into createSelector and pass it back To mapStateToProps .

 Now onWards all code related to selectors basically mapStateToprops ..we will write it using Reselect library.


 if you dont pass mapDispatchToProps in connect statemnt what it does is...it adds a prop called dispatch to the component.
 So if we have only one action to dispatch we dont need to write the mapDispatchToProps function..



 # Local Storage & session persistence on the front-end(later handled by firebase) :
    store the state of reducer..whne app reloads/refresh pull in stored and populate the reducer again
    window.localstorage - always persisits
    window.sessionStorage - persists till sesssion unless tab is closed
     window.localstorage.setItem()
      window.localstorage.getItem()
   ## Library: Redux Persist
        add to store.js in redux store

    