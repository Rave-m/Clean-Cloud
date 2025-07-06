import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Reviews from './components/Reviews';
import Services from './components/Services';

function App() {
	return (
		<div className='w-full'>
			<Header />

			<Hero />

			<About />

			<Services />

			<Reviews />

			<Contact />

			<Footer />
		</div>
	);
}

export default App;
