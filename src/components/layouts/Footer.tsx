import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

type Props = {};

const Footer = (props: Props) => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className='mt-[100px] border-t border-gray-200 pt-[40px] md:pt-[80px]'>
			<section className='grid grid-cols-1 md:grid-cols-6 px-5 md:px-[100px] md:gap-[80px] gap-10 pb-[80px]'>
				{/* col-1 */}
				<div className='col-span-2'>
					<h1 className='text-4xl '>A+ Studio</h1>
					<p className=' text-black/60 mt-5'>
						Leading digital agency with solid design and development
						expertise. We build readymade websites, mobile
						applications, and elaborate online business services.
					</p>
					{/* social icons */}
					<div className='flex items-center gap-4 mt-10 mb-10 md:mb-0'>
						<div className='rounded-full w-[40px] h-[40px] bg-[#3B5998] flex justify-center items-center'>
							<FaFacebookF className='text-white' size={20} />
						</div>
						<div className='rounded-full w-[40px] h-[40px] bg-[#55ACEE] flex justify-center items-center'>
							<FaTwitter className='text-white' size={20} />
						</div>
						<div className='rounded-full w-[40px] h-[40px] bg-[#007AB9] flex justify-center items-center'>
							<FaLinkedin className='text-white' size={20} />
						</div>
					</div>
				</div>
				{/* col-2 */}
				<div className=''>
					<h4 className='text-lg font-semibold'>What We Do</h4>
					<ul className='flex flex-col gap-2 mt-5'>
						{WHATWEDO.map((item, index) => (
							<li key={index}>
								<Link
									href={'#'}
									className='fade-animation hover:text-app-blue text-xs text-black/70'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{/* col-3 */}
				<div>
					<h4 className='text-lg font-semibold'>Company</h4>
					<ul className='flex flex-col gap-2 mt-5'>
						{COMPANY.map((item, index) => (
							<li key={index}>
								<Link
									href={'#'}
									className='fade-animation hover:text-app-blue text-xs text-black/70'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{/* col-4 */}
				<div>
					<h4 className='text-lg font-semibold'>Support</h4>
					<ul className='flex flex-col gap-2 mt-5'>
						{SUPPORT.map((item, index) => (
							<li key={index}>
								<Link
									href={'#'}
									className='fade-animation hover:text-app-blue text-xs text-black/70'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{/* col-5 */}
				<div>
					<h4 className='text-lg font-semibold'>Contact</h4>
					<ul className='flex flex-col gap-2 mt-5'>
						{CONTACT.map((item, index) => (
							<li key={index}>
								<Link
									href={'#'}
									className='fade-animation hover:text-app-blue text-xs text-black/70'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className='border-t border-gray-100 flex items-center justify-center h-[60px]'>
				<p className='text-gray-500 text-sm'>
					Copyright © {year} | Avi Yansah
				</p>
			</section>
		</footer>
	);
};

const WHATWEDO = [
	{ name: 'Web Design' },
	{
		name: 'App Design',
	},
	{
		name: 'Social Media Manage',
	},
	{
		name: 'Market Analysis Project',
	},
];
const COMPANY = [
	{ name: 'About Us' },
	{
		name: 'Career',
	},
	{
		name: 'Become Investor',
	},
];
const SUPPORT = [
	{ name: 'FAQ' },
	{
		name: 'Policy',
	},
	{
		name: 'Business',
	},
];
const CONTACT = [
	{ name: 'WhatsApp' },
	{
		name: 'Support 24',
	},
];

export default Footer;
