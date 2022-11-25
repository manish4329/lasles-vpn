import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Globe from './components/Globe';
import Testimonials from './components/Testimonials';
import Help from './components/Help';

function App() {
	return (
		<div className="container">
			<div className="App">
				<Navbar />
				<About />
				<Features />
				<Pricing />
				<Globe />
				<Testimonials />
				<Help />
			</div>
		</div>
	);
}

export default App;
