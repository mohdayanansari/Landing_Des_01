import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Data {
	img: string;
	name: string;
	location: string;
	skills: string[];
	work: string[];
}
type Props = { data: Data };

const Cards = ({ data }: Props) => {
	return (
		<div className='bg-white rounded-[16px] drop-shadow-md w-[300px] p-3 border border-gray-100'>
			{/* row-1 user */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					{/* col-1 image */}
					<div className='relative w-[40px] h-[40px] rounded-full'>
						<Image
							src={data.img}
							alt={`image-info-${data.name}`}
							fill
							className='object-fill rounded-full'
						/>
					</div>
					{/* col-2 user info */}
					<div>
						<h4 className='text-sm font-semibold'>{data.name}</h4>
						<p className='text-xs text-black/50'>{data.location}</p>
					</div>
				</div>
				{/* col-3 user follow btn */}
				<Link href={'#'}>
					<div className='rounded-lg bg-app-blue text-white flex justify-center items-center p-2 px-3 text-xs'>
						Follow
					</div>
				</Link>
			</div>
			{/* row-2 skills */}
			<div>
				<h3 className='text-lg font-semibold mt-4'>Skills</h3>
				<div className='flex items-center gap-2 mt-2'>
					{data.skills.map((item, index) => (
						<div
							key={index}
							className='text-[8px] bg-gray-200 rounded-full p-1 px-2 text-black/60'
						>
							{item}
						</div>
					))}
				</div>
			</div>
			{/* row-3 works */}
			<div>
				<h3 className='text-lg font-semibold mt-4'>Work</h3>
				<div className='grid grid-cols-2 gap-2 mt-2'>
					{data.work.map((item, index) => (
						<div key={index} className='relative  h-[70px]'>
							<Image
								src={item}
								alt='img-info'
								fill
								className='object-cover rounded-lg'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cards;
