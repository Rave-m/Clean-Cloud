const Header = () => {
	const toggleMobileMenu = () => {
		const mobileMenu = document.getElementById('mobile-menu');
		const menuButton = document.getElementById('mobile-menu-button');
		const spans = menuButton?.querySelectorAll('span');

		if (mobileMenu) {
			const isHidden = mobileMenu.classList.contains('hidden');

			if (isHidden) {
				// Show menu
				mobileMenu.classList.remove('hidden');
				mobileMenu.classList.add('animate-fade-in');

				// Animate hamburger to X
				if (spans) {
					spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
					spans[1].style.opacity = '0';
					spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
				}
			} else {
				// Hide menu
				mobileMenu.classList.add('hidden');
				mobileMenu.classList.remove('animate-fade-in');

				// Reset hamburger
				if (spans) {
					spans[0].style.transform = 'none';
					spans[1].style.opacity = '1';
					spans[2].style.transform = 'none';
				}
			}
		}
	};

	return (
		<header>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					{/* Logo and Navigation */}
					<div className='flex items-center gap-6 lg:gap-8'>
						{/* Logo */}
						<div className='flex items-center gap-3'>
							<div className='w-10 h-10 rounded-full bg-[#5E4B8B] backdrop-blur-sm flex items-center justify-center cursor-pointer'></div>
						</div>

						{/* Desktop Navigation */}
						<nav className='hidden lg:flex items-center space-x-8'>
							<a
								href='#'
								className='text-black hover:text-underline font-medium transition-colors duration-300 hover:underline decoration-black/60'
							>
								Home
							</a>
							<a
								href='#about'
								className='text-black hover:text-underline font-medium transition-colors duration-300 hover:underline decoration-black/60'
							>
								About Us
							</a>
							<a
								href='#services'
								className='text-black hover:text-underline font-medium transition-colors duration-300 hover:underline decoration-black/60'
							>
								Services
							</a>
							<a
								href='#reviews'
								className='text-black hover:text-underline font-medium transition-colors duration-300 hover:underline decoration-black/60'
							>
								Reviews
							</a>
							<a
								href='#contact'
								className='text-black hover:text-underline font-medium transition-colors duration-300 hover:underline decoration-black/60'
							>
								Contact
							</a>
						</nav>
					</div>

					{/* Desktop Auth Buttons */}
					<div className='hidden md:flex items-center gap-4'>
						<button className='py-1 px-10 bg-[#5E4B8B] font-semibold text-white rounded-sm text-sm hover:bg-[#4A3B6D] transition-all duration-300 border border-white/20 cursor-pointer shadow-sm'>
							Login
						</button>
						<button className='py-1 px-10 bg-[#5E4B8B] font-semibold text-white rounded-sm text-sm hover:bg-[#4A3B6D] transition-all duration-300 border border-white/20 cursor-pointer shadow-sm'>
							Sign Up
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='lg:hidden flex flex-col gap-1 p-2'
						id='mobile-menu-button'
						onClick={toggleMobileMenu}
					>
						<span className='w-6 h-0.5 bg-[#5E4B8B] transition-all'></span>
						<span className='w-6 h-0.5 bg-[#5E4B8B] transition-all'></span>
						<span className='w-6 h-0.5 bg-[#5E4B8B] transition-all'></span>
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className='lg:hidden border-t border-white/20 py-4 hidden transition-all duration-300 ease-in-out'
					id='mobile-menu'
				>
					<nav className='flex flex-col space-y-4'>
						<a
							href='#'
							className='text-black hover:text-underline font-medium transition-colors duration-300 py-2'
						>
							Home
						</a>
						<a
							href='#about'
							className='text-black hover:text-underline font-medium transition-colors duration-300 py-2'
						>
							About Us
						</a>
						<a
							href='#services'
							className='text-black hover:text-underline font-medium transition-colors duration-300 py-2'
						>
							Services
						</a>
						<a
							href='#reviews'
							className='text-black hover:text-underline font-medium transition-colors duration-300 py-2'
						>
							Reviews
						</a>
						<a
							href='#contact'
							className='text-black hover:text-underline font-medium transition-colors duration-300 py-2'
						>
							Contact
						</a>

						{/* Mobile Auth Buttons */}
						<div className='flex flex-col gap-1 pt-4 border-t border-white/20'>
							<button className='py-1 px-10 bg-[#5E4B8B] rounded-sm text-sm font-semibold text-white'>
								Login
							</button>
							<button className='py-1 px-10 bg-[#5E4B8B] rounded-sm text-sm font-semibold text-white'>
								Sign Up
							</button>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
