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

    
# Nested Routing (routing from a component or a page rather than from App.js)
      eg: /shop to /shop/hats
      moved all the shop page collection logic into its child component(CollectionOverview) (connected to redux obviously)
      then apply Switch and Router in the Shop collection component.
   ## When having nested Routes , Route to the parent component should not have exact paramter otherwise
   ## otherwise the child route component will not be rendered.
   eg: in App.js   <Route path='/shop' component={ShopPage} />
         in ShopPage.js it has access to match , history and location
            nesting: <Route exact path={`${match.path}`} component={CollectionOverview}/>
                     <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
               now CollectionPage will be rendered properly.(also have access to match)


# collectionId is a number in the data but a string in the Route?? 
      use a map map collectionId string to integer 
      the selector of Collection Page requires a part of state depending on URL parameter
      so state is passed explicitly to its mapStateToProps
  ## avoiding writing map for it Do data normalization i.e. convert your shop store from array to object
     we needed individual elemnt inside reducer so find method on large array would be slow algorithm

     our state has become an object selectCollections selector knows it is array
     so CollectionsOverview is giving error...
     lets write a new selector for it which convert Object into an Array
  ## Object.keys()