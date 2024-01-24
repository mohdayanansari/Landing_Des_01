import HeaderLinks from '@/constants/headerLinks';
import Link from 'next/link';
import React from 'react';

type Props = {};

const MainHeader: React.FC = (props: Props) => {
	return (
		<header className=' px-5 md:px-[100px] h-[60px] flex items-center  bg-white'>
			<nav className='flex justify-between w-full items-center'>
				<ul className='flex gap-2 md:gap-5 text-sm'>
					{HeaderLinks.map((item, index) => {
						return (
							<li
								key={index}
								className='hover:text-app-blue hover:scale-105 fade-animation '
							>
								<Link
									href={item.link}
									className='text-xs md:text-sm '
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
				<div className='flex items-center gap-2 md:gap-5'>
					<Link href={'/log-in'}>
						<div className='text-xs md:text-sm hover:text-app-blue hover:scale-105 fade-animation'>
							Log In
						</div>
					</Link>
					<Link href={'/log-in'}>
						<div className='text-xs bg-black rounded-md py-2 px-3 text-white hover:scale-95 fade-animation'>
							Get Started
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default MainHeader;
