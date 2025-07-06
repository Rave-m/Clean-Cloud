import Button from './ui/Button';

const Reviews = () => {
	const reviews = [
		{
			name: 'Sarah Chen',
			location: 'Yogyakarta',
			rating: 5,
			review:
				'Pelayanan CleanCloud sangat memuaskan! Pakaian saya selalu bersih dan wangi. Staff nya ramah dan pengiriman tepat waktu. Highly recommended!',
			avatar: 'SC',
			service: 'Regular Washing',
		},
		{
			name: 'Ahmad Rizki',
			location: 'Sleman',
			rating: 5,
			review:
				'Sudah langganan di CleanCloud hampir 1 tahun. Kualitas cucian selalu konsisten bagus, harga terjangkau. Puas banget dengan layanannya!',
			avatar: 'AR',
			service: 'Dry Cleaning',
		},
		{
			name: 'Maria Dewi',
			location: 'Bantul',
			rating: 5,
			review:
				'Excellent service! Kemeja kerja suami selalu rapi dan harum setelah disetrika di CleanCloud. Terima kasih sudah membantu kebutuhan laundry keluarga kami.',
			avatar: 'MD',
			service: 'Ironing Service',
		},
		{
			name: 'Budi Santoso',
			location: 'Yogyakarta',
			rating: 5,
			review:
				'CleanCloud adalah solusi terbaik untuk mahasiswa seperti saya. Harga student-friendly tapi kualitas tetap premium. Sistem pick-up delivery juga sangat membantu!',
			avatar: 'BS',
			service: 'Student Package',
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<span
				key={index}
				className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
			>
				★
			</span>
		));
	};

	return (
		<section
			id='reviews'
			className='w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<p className='text-gray-500 text-sm font-medium tracking-wide uppercase'>Reviews</p>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6'>
						What Our Customers Say
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Kepuasan pelanggan adalah prioritas utama kami. Lihat apa kata mereka tentang layanan
						CleanCloud!
					</p>
				</div>

				{/* Reviews Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12'>
					{reviews.map((review, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group'
						>
							{/* Background decoration */}
							<div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300'></div>

							{/* Content */}
							<div className='relative z-10'>
								{/* Avatar and Info */}
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-gradient-to-br from-[#5E4B8B] to-[#9163F3] rounded-full flex items-center justify-center text-white font-semibold mr-4'>
										{review.avatar}
									</div>
									<div>
										<h4 className='font-bold text-gray-900 text-lg'>{review.name}</h4>
										<p className='text-gray-500 text-sm'>{review.location}</p>
									</div>
								</div>

								{/* Stars */}
								<div className='flex mb-2'>{renderStars(review.rating)}</div>

								{/* Service Tag */}
								<div className='mb-2'>
									<span className='inline-block bg-gradient-to-r from-[#5E4B8B] to-[#9163F3] text-white text-xs font-semibold px-3 py-1 rounded-sm'>
										{review.service}
									</span>
								</div>

								{/* Review Text */}
								<p className='text-gray-700 text-sm lg:text-base leading-relaxed italic'>
									"{review.review}"
								</p>

								{/* Quote decoration */}
								<div className='absolute top-4 right-4 text-4xl text-purple-200 opacity-50'>"</div>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12'>
					<div className='text-center'>
						<div className='text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>1000+</div>
						<div className='text-gray-600 text-sm lg:text-base'>Happy Customers</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>2+</div>
						<div className='text-gray-600 text-sm lg:text-base'>Years Experience</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>98%</div>
						<div className='text-gray-600 text-sm lg:text-base'>Satisfaction Rate</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>24/7</div>
						<div className='text-gray-600 text-sm lg:text-base'>Customer Support</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className='text-center'>
					<p className='text-gray-600 mb-6 text-lg'>
						Ready to experience our premium laundry service?
					</p>

					<span className='flex justify-center items-center gap-4'>
						<Button className='cursor-pointer shadow-md'>Book Now</Button>
						<Button className='cursor-pointer shadow-md'>Learn More</Button>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
