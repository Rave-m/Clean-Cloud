const About = () => {
	return (
		<section className='w-full px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row w-full justify-center items-center gap-8 lg:gap-12 rounded-b-2xl lg:rounded-b-3xl bg-[#F3F4F6] py-12 lg:py-16 px-6 lg:px-12 text-white overflow-hidden relative'>
					{/* Content Section */}
					<div className='flex flex-col gap-6 lg:gap-8 flex-1 text-center lg:text-left z-10'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
							<span className='block text-white/90 font-light text-lg sm:text-xl lg:text-2xl mb-2'>
								SOLUTION FOR YOUR
							</span>
							<span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
								Dirty Clothes
							</span>
						</h1>

						<p className='text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl leading-relaxed'>
							Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline{' '}
							<span className='font-semibold text-yellow-200'>"Bersih, Wangi, dan Terpercaya"</span>{' '}
							kami siap melayani kebutuhan laundry Anda dengan pelayanan terbaik.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 items-center lg:items-start'>
							<button className='cursor-pointer bg-white text-purple-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
								Get Started Now
							</button>
							<button className='cursor-pointer border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300'>
								Learn More
							</button>
						</div>

						{/* Stats or features */}
						<div className='flex flex-wrap gap-6 justify-center lg:justify-start mt-4'>
							<div className='text-center lg:text-left'>
								<div className='text-2xl font-bold text-white'>2+</div>
								<div className='text-sm opacity-80'>Years Experience</div>
							</div>
							<div className='text-center lg:text-left'>
								<div className='text-2xl font-bold text-white'>1000+</div>
								<div className='text-sm opacity-80'>Happy Customers</div>
							</div>
							<div className='text-center lg:text-left'>
								<div className='text-2xl font-bold text-white'>24/7</div>
								<div className='text-sm opacity-80'>Service Available</div>
							</div>
						</div>
					</div>

					{/* Image Section */}
					<div className='flex-1 flex justify-center items-center max-w-lg z-10'>
						<div className='relative'>
							<img
								src='./hero_image.png'
								className='relative w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-2xl hover:scale-105 transition-transform duration-500'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
