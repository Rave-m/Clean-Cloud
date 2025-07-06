import Button from './ui/Button';

const Contact = () => {
	return (
		<section className='w-ful py-16 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
					{/* Left Side - Contact Information */}
					<div className='flex flex-col justify-center'>
						{/* Header */}
						<div className='mb-12'>
							<p className='text-gray-500 text-sm font-medium tracking-wide uppercase'>Centers</p>
							<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6'>
								Want to Visit Us
							</h2>
							<p className='text-gray-600 mb-8'>
								Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline "Bersih,
								Wangi, dan Terpercaya" kami siap melayani kebutuhan laundry Anda.
							</p>
						</div>

						{/* Contact Details */}
						<div className='space-y-6 mb-8'>
							{/* Email */}
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 border rounded-full flex items-center justify-center'>
									<span className='text-white text-xl'>✉</span>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 text-lg'>Email Address</h4>
									<p className='text-gray-600'>CleanCloud@gmail.com</p>
								</div>
							</div>

							{/* Phone 1 */}
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 border rounded-full flex items-center justify-center'>
									<span className='text-white text-xl'>📞</span>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 text-lg'>Phone Number</h4>
									<p className='text-gray-600'>+62 875 279 7213 12</p>
								</div>
							</div>

							{/* Phone 2 */}
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 border rounded-full flex items-center justify-center'>
									<span className='text-white text-xl'>📱</span>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 text-lg'>WhatsApp</h4>
									<p className='text-gray-600'>+62 875 279 7213 12</p>
								</div>
							</div>

							{/* Location */}
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 border rounded-full flex items-center justify-center'>
									<span className='text-white text-xl'>📍</span>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 text-lg'>Our Location</h4>
									<p className='text-gray-600'>Jl. Malioboro No. 123, Yogyakarta, Indonesia</p>
								</div>
							</div>
						</div>

						{/* View on Maps Button */}
						<div>
							<Button className='shadow-lg cursor-pointer'>View On Maps</Button>
						</div>
					</div>

					{/* Right Side - Map Preview */}
					<div className='relative'>
						<div className='relative w-full h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl'>
							{/* Map Image/Placeholder */}
							<div className='w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 relative'>
								{/* Map placeholder with embedded Google Maps iframe */}
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56211581283!2d110.29914254999999!3d-7.797224899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x6b1b2b8b6b1b2b8b!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1642090000000!5m2!1sen!2sid'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									className='w-full h-full'
								></iframe>
							</div>

							{/* Map overlay with location pin */}
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
								<div className='w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse'>
									<div className='w-full h-full bg-red-500 rounded-full flex items-center justify-center'>
										<span className='text-white text-sm'>📍</span>
									</div>
								</div>
							</div>

							{/* Decorative elements */}
							<div className='absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl'></div>
							<div className='absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg'></div>
						</div>

						{/* Business Hours Card */}
						<div className='absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
							<h4 className='font-semibold text-gray-900 mb-2'>Business Hours</h4>
							<div className='space-y-1 text-sm text-gray-600'>
								<div className='flex justify-between'>
									<span>Monday - Friday</span>
									<span>08:00 - 20:00</span>
								</div>
								<div className='flex justify-between'>
									<span>Saturday</span>
									<span>08:00 - 18:00</span>
								</div>
								<div className='flex justify-between'>
									<span>Sunday</span>
									<span>10:00 - 16:00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
