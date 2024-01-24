import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const SectionTwo = (props: Props) => {
	return (
		<section className='px-5 md:px-[100px]   mt-[100px]'>
			<div className='flex items-center justify-between'>
				<h3 className='text-2xl md:text-3xl font-semibold'>Our Work</h3>
				<Link href={'/profiles'}>
					<p className=' hover:text-app-blue fade-animation'>
						View Profile
					</p>
				</Link>
			</div>
			{/* Work Cards Container */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
				{DATA.map((items, index) => {
					return (
						<div
							key={index}
							className='hover:cursor-pointer fade-animation hover:scale-90'
						>
							{/* img */}
							<div className='relative w-full h-[300px] '>
								<Image
									src={items.img}
									alt='image-info'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
							{/* Info */}
							<div className='flex items-center gap-3 mt-5'>
								<div className='relative w-[40px] h-[40px] rounded-full'>
									<Image
										src={items.profileImg}
										fill
										className='object-cover rounded-full'
										alt='image-info'
									/>
								</div>
								<h4 className='text-sm font-semibold text-black/80'>
									{items.name}
								</h4>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

const DATA = [
	{
		img: '/assets/imgs/a1.png',
		name: 'Nick Buderick',
		profileImg: '/assets/imgs/art-2.png',
	},
	{
		img: '/assets/imgs/a2.png',
		name: 'Nick Buderick',
		profileImg: '/assets/imgs/art-2.png',
	},
	{
		img: '/assets/imgs/a3.png',
		name: 'Nick Buderick',
		profileImg: '/assets/imgs/art-2.png',
	},
	{
		img: '/assets/imgs/a4.png',
		name: 'Nick Buderick',
		profileImg: '/assets/imgs/art-2.png',
	},
	{
		img: '/assets/imgs/a5.png',
		name: 'Nick Buderick',
		profileImg: '/assets/imgs/art-2.png',
	},
	{
		img: '/assets/imgs/a6.png',
		name: 'Nick Buderick',
		profileImg: '/assets/imgs/art-2.png',
	},
];
export default SectionTwo;
