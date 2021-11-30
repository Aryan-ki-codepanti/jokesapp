import Joke from "./components/Joke";
import Navbar from "./components/Navbar";

function App() {

	document.title = "iJoker | The Jokes App"

    return (<>
		<Navbar />
		<Joke />
	</>);
}

export default App;
