const Footer = () => {
	return (
		<footer className='bg-gradient-to-r from-[#5E4B8B] via-[#9163F3] to-[#A78BFA] text-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
					{/* Address Section */}
					<div className='space-y-4'>
						<h3 className='text-xl font-bold mb-6'>Address</h3>
						<div className='space-y-3 text-white/90'>
							<p className='leading-relaxed'>
								Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline "Bersih,
								Wangi, dan Terpercaya"
							</p>
							<div className='space-y-2'>
								<p className='flex items-start gap-2'>
									<span className='text-yellow-300'>📍</span>
									<span>Jl. Malioboro No. 123, Yogyakarta, Indonesia 55271</span>
								</p>
								<p className='flex items-center gap-2'>
									<span className='text-yellow-300'>📞</span>
									<span>+62 875 279 7213 12</span>
								</p>
							</div>
						</div>
					</div>

					{/* Help & Advice Section */}
					<div className='space-y-4'>
						<h3 className='text-xl font-bold mb-6'>Help & Advice</h3>
						<ul className='space-y-3'>
							<li>
								<a
									href='#support'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Customer Support</span>
								</a>
							</li>
							<li>
								<a
									href='#terms'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Terms & Conditions</span>
								</a>
							</li>
							<li>
								<a
									href='#privacy'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Privacy Policy</span>
								</a>
							</li>
							<li>
								<a
									href='#faq'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>FAQ</span>
								</a>
							</li>
							<li>
								<a
									href='#guide'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Laundry Care Guide</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Company Section */}
					<div className='space-y-4'>
						<h3 className='text-xl font-bold mb-6'>Company</h3>
						<ul className='space-y-3'>
							<li>
								<a
									href='#about'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>About Us</span>
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Our Services</span>
								</a>
							</li>
							<li>
								<a
									href='#pricing'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Pricing</span>
								</a>
							</li>
							<li>
								<a
									href='#careers'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Careers</span>
								</a>
							</li>
							<li>
								<a
									href='#blog'
									className='text-white/90 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2'
								>
									<span>Blog</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Get In Touch Section */}
					<div className='space-y-4'>
						<h3 className='text-xl font-bold mb-6'>Get In Touch</h3>
						<div className='space-y-4'>
							<p className='text-white/90 text-sm leading-relaxed'>Feel Free To Get In Touch</p>
							<div className='space-y-3'>
								<a
									href='mailto:CleanCloud@gmail.com'
									className='text-yellow-300 hover:text-yellow-200 transition-colors duration-300 font-semibold text-lg'
								>
									CleanCloud@gmail.com
								</a>
							</div>

							{/* Social Media Icons */}
							<div className='flex gap-4 pt-4'>
								<a
									href='#facebook'
									className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110'
									aria-label='Facebook'
								>
									<span className='text-xl'>📘</span>
								</a>
								<a
									href='#instagram'
									className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110'
									aria-label='Instagram'
								>
									<span className='text-xl'>📷</span>
								</a>
								<a
									href='#whatsapp'
									className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110'
									aria-label='WhatsApp'
								>
									<span className='text-xl'>💬</span>
								</a>
							</div>

							{/* Newsletter Signup */}
							<div className='pt-4'>
								<p className='text-white/90 text-sm mb-3'>Subscribe to our newsletter</p>
								<div className='flex gap-2'>
									<input
										type='email'
										placeholder='Your email'
										className='flex-1 px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm'
									/>
									<button className='bg-yellow-300 text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-200 transition-colors duration-300 text-sm'>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Copyright Section */}
				<div className='border-t border-white/20 pt-2 mt-2'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-white/80 text-sm text-center md:text-right'>
							{new Date().getFullYear()} © Copyright by CleanCloud. All rights reserved.
						</p>
					</div>
				</div>
			</div>

			<div className='absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl'></div>
			<div className='absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl'></div>
		</footer>
	);
};
export default Footer;
