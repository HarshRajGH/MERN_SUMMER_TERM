import{header} from './component/header.jsx'
function App(){
    return(
        <div className="App">
            <Header />
            <h1>Welcome to My Key Shop React App</h1>
            <p>This is a simple Demo React application for the Key Shop project.</p>
            <button>Click Me</button>
        </div>
    );
}
// jsx is nothing its just a javascript extension and get html as output
//  and it is used in react to create components and user interfaces.

export default App;
export {header};