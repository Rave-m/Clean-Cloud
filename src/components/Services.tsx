import Button from './ui/Button';

const Services = () => {
	const services = [
		{
			icon: '🔄',
			title: 'Washing',
			description:
				"Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline 'Bersih, Wangi, dan Terpercaya' kami siap melayani kebutuhan laundry Anda.",
		},
		{
			icon: '👕',
			title: 'Ironing',
			description:
				"Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline 'Bersih, Wangi, dan Terpercaya' kami siap melayani kebutuhan laundry Anda.",
		},
		{
			icon: '🧽',
			title: 'Dry-Cleaning',
			description:
				"Laundry Langganan berdiri di Yogyakarta pada Agustus 2022. Dengan tagline 'Bersih, Wangi, dan Terpercaya' kami siap melayani kebutuhan laundry Anda.",
		},
	];

	return (
		<section className='w-full bg-white py-16 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<p className='text-gray-500 text-sm font-medium tracking-wide uppercase'>Services</p>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
						Our Various Services
					</h2>
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-gray-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group'
						>
							{/* Icon */}
							<div className='w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300'>
								<span className='text-3xl lg:text-4xl text-gray-600'>{service.icon}</span>
							</div>

							{/* Title */}
							<h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-6'>{service.title}</h3>

							{/* Description */}
							<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
								{service.description}
							</p>
						</div>
					))}
				</div>

				{/* Contact Button */}
				<div className='text-center'>
					<Button className='shadow-lg cursor-pointer'>Contact Us</Button>
				</div>
			</div>
		</section>
	);
};
export default Services;
