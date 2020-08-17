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



  # Integrating Stripe using StripeButton component
      Got the test mode ..
      to do real payment need to work out with the token and write some backend code

   ## only backend in our App : Stripe Integration part and Firebase saving data(GraphQL queries)
      ## MAking store in backend to leverage GraphQL

# Hosting on Heroku as a static website
heroku create myntraclone --buildpack https://github.com/mars/create-react-app-buildpack.git
   using this buildpack we dont have to npm build 


 #  PART II
  1. CSS in JS writing styles in JS files and passing it as style value to the html(JSX) elements
      making CSS sccoped only to that component...so called styled component
      Problem with CSS-scope is global
      can leverage props to control the styles(Conditionally)---can be helpful to create Dark mode/Light mode

   # FireBase
      ## firestore.batch()
      and creating a collectionReference and adding objects to it using .set() method
      ## batch.commit() 
               returns a Promise
            entered data to firestore using code..
            (...this )
            now we will write mechanism to retieve info from firebase
            and then we can remove componentDidMount because we dont need to load 
   ## this  pattern of onSnapShot and onAuthStateChanged
         these are called OBSERVALBLE and OBSERVER pattern
      ## Observer :
            err, done, next
      ## Observable :
            stram of operations being performed.
         firebase is alive database , upadtes can always  happen , done callback may not be called.so we dont write
         Mostly we pass a function..next function 
         one example: auth.onAuthStateChanged(user=> {});
         So when component unmounts, we do unSubscribe
   ## In companies we wont likely use Firebase Observable pattern which involves subscription scheme(RxJS type)
    - Rather we will be using a PROMISE based pattern by writing our own API.
    So now we try to make API routes from our firebase...just like MongoDB.
     - 2 ways:
       i) Still use CollectionRef object returned from firestore but use it as Promise rather than applying observables.
            - use .get().then() instead of snapshot. pass snapShot info inside .then()
         ## caveat: - we get new data from backend only after component remounts...not real-time behaviour.
       ii) Use standard fetch to replace this observable scheme.

   # Why do we want to handle fetching of data logic to put into redux rather than having it inside the componentDidMount of ShopPage?
      i) if any other page requires this data-we dont wanna write same logic again for that page's componentDidMount
      ii) dont wanna put this at top level at APP js unnecessaryily loding so much data in the App.
            App component is alwys mounting (top level) so performance degrades if lot of data to load on Mounting
    So move the logic to perform asynchronous redux action to fetch data from backend.


    # Redux-Thunk:  (a middleware that catches actions(functions, not objects))
         ## So it only needs to talk with actions that return functions/not objects..
            here fetchCollectionsStartAsync()
            So redux thunk dispatches those object returning action to reducers
      ## main role of thunk is to give dispatch through which we can give synchronous action objects to our reducer 
     Just a middleware that allows to fire async functions for an API call.
     put this in store. as middleware
     earlier componentDidMount was doing API call , now reducer will do that.

     there is a pattern for it: action types for async API calls:
               action_start,action_success,action_failure ---isFetching: false/true
     Actual Thunk implementation can be seen in action creators.

3 action creators and 1 for handling the Async logic:
the async one is used to dispatch async actions as functions
thunk needs to call the function(to be dispatched) with dispatch method itself as its first argument 
So take care in mapDispatchToProps as it needs a function to return a function using dispatch method.

Shoppage component was using external API call it was associated with redux-thunk.


# Collection Page with Spinner HOC is having issue..with thunk operation
   this happens because
   ComponentDidMount works only after render method is called
   default fetching value(which is false) is called for Collection With Spinner component 
Just write a new selector for handling this.
   ## Dont put asunc API request in constructor,, put in ComponentDidMount rather.
   ## !! operator makes anything false, be it string or object