import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Header from './components/layouts/Header';
import Reviews from './components/Reviews';

function App() {
	return (
		<div className='w-full'>
			<Header />

			<Hero />

			<About />

			<Contact />

			<Reviews />
		</div>
	);
}

export default App;
