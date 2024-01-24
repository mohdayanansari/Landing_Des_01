import USER_INFO from '@/constants/userData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Cards } from '..';

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<section className='px-5 md:px-[100px] min-h-[calc(100vh-60px)] max-h-max   '>
			{/* <------------ Main hero Section -------------> */}
			<div className='flex flex-col md:flex-row  pt-5 md:pt-10'>
				{/* Col-1 */}
				<div className='w-full md:w-[60%]'>
					{/* Image */}
					<div className='relative w-[100px] h-[100px] rounded-full'>
						<Image
							src={'/assets/imgs/art-1.png'}
							alt='image-info'
							fill
							className='object-cover rounded-full'
						/>
					</div>
					{/* Location */}
					<div className='flex items-baseline gap-[2px] mt-2'>
						<FaLocationDot className='text-gray-300' size={16} />
						<p className='text-xs text-black/60'>Gurgaon, India</p>
					</div>
					{/* Main Heading */}
					<h1 className='text-4xl md:text-6xl font-semibold mt-5'>
						Design Studio
					</h1>
					{/* Paragraph */}
					<p className='md:text-lg leading-8 font-light pr-[100px] mt-5 text-black/60'>
						Leading digital agency with solid design and development
						expertise. We build readymade websites, mobile
						applications, and elaborate online business services.
					</p>
				</div>
				{/* Col-2 */}
				<div className='w-full md:w-[40%]  flex flex-col justify-center md:justify-end items-center md:items-end pb-0 md:pb-[80px] mt-10'>
					<Link href={'/contact'}>
						<div className='filled-btn w-[350px]'>Contact Now</div>
					</Link>
					<Link href={'/portfolio'}>
						<div className='border-btn w-[350px] mt-5 '>
							View Portfolio
						</div>
					</Link>
				</div>
			</div>
			{/* <------------ Our Designers Section -------------> */}
			<div className='mt-14'>
				<div className='flex items-center justify-between'>
					<h3 className='text-2xl md:text-3xl font-semibold'>
						Our Designers
					</h3>
					<Link href={'/profiles'}>
						<p className=' hover:text-app-blue fade-animation'>
							View Profile
						</p>
					</Link>
				</div>
				{/* <--Cards Container--> */}
				<div className='flex items-center gap-5 mt-5 w-screen md:w-full overflow-y-auto pr-10  p-10'>
					{USER_INFO.map((item, index) => {
						return <Cards key={index} data={item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
