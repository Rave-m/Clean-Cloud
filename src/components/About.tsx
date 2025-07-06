import Button from './ui/Button';

const About = () => {
	return (
		<section id='about' className='w-full px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row w-full justify-center items-center gap-8 lg:gap-12 rounded-b-2xl lg:rounded-b-3xl bg-[#F3F4F6] py-12 lg:py-16 px-6 lg:px-12 text-white overflow-hidden relative lg:h-[80vh]'>
					{/* Image Section */}
					<div className='flex-1 flex justify-center items-center max-w-2xl z-10'>
						<div className='relative w-full'>
							{/* Main grid layout */}
							<div className='grid grid-cols-2 gap-4 h-auto'>
								{/* Left side - Large laundry room image */}
								<div className='relative'>
									<div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl z-10'></div>
									<img
										src='./about-left.png'
										alt='Modern Laundry Room'
										className='w-full border border-black/20 h-64 lg:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500'
									/>
								</div>

								{/* Right side - Stack of smaller images */}
								<div className='flex flex-col gap-4'>
									{/* Washing machine */}
									<div className='relative'>
										<img
											src='./about-top.png'
											alt='Professional Washing Machine'
											className='w-full border border-black/20 h-30 lg:h-36 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500'
										/>
									</div>

									{/* Laundry basket */}
									<div className='relative'>
										<img
											src='./about-right.png'
											alt='Clean Laundry Basket'
											className='w-full border border-black/20 h-30 lg:h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500'
										/>
									</div>
								</div>
							</div>

							{/* Floating decorative element */}
							<div className='absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl'></div>
							<div className='absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-30 blur-lg'></div>
						</div>
					</div>

					{/* Content Section */}
					<div className='flex flex-col gap-6 lg:gap-8 text-center lg:text-left z-10'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
							<span className='block text-black font-light text-sm'>About Us</span>
							<span className='text-wrap text-black'>
								Welcome To CleanCloud <br />
								Laundry Services
							</span>
						</h1>

						<p className='text-black text-smopacity-90 max-w-2xl leading-relaxed'>
							Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline “Kualitas
							premium, harga bikin senyum”, kami berkomitmen untuk memberikan pelayanan premium
							dengan harga ekonomis untuk setiap pelanggan. Kami memahami pentingnya kebersihan dan
							kenyamanan, sehingga kami selalu mengutamakan kualitas dalam setiap layanan yang kami
							berikan.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 items-center lg:items-start'>
							<Button className='shadow-lg cursor-pointer'>Learn More</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
