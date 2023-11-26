import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import Body from "./Body";
import Footer from "./Footer";

function App() {
    const items = [
        {id: 1, name: 'Товар 1'},
        {id: 2, name: 'Товар 2'},
        {id: 3, name: 'Товар 3'},
    ];

    return (
        <div>
            <Header/>
            <Menu/>
            <Body items={items}/>
            <Footer/>
        </div>
    );
}

export default App;
