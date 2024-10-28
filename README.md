 git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  
  git remote add origin https://github.com/perlov3301/react_crash.git
  git remote remove origin
  git remote add origin https://github.com/perlov3301/add_rtk_prasandeep.git

  git push -u origin main

  #deployment folder for html server
  react1>npm run build

  *run cmd as administrator at port 8000
  react1> server -s build -p 8000
* set up redux Store(holds an application state)&Reducers(
    function of state changes in response to actions);
  * * define Reducers: src>reducers>index.js

  >netsh wlan show profiles
  >netsh wlan show profile name="OpalMoldFloor1" key=clear
  const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const root = document.getElementById('root');

const rootInstance = createRoot(root);
rootInstance.render(
  <Provider store={store}>
    <App />
  </Provider>
);
   