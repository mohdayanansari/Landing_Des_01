import { HeroSection, SectionTwo } from '@/components';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<main className=''>
			<HeroSection />

			<SectionTwo />
		</main>
	);
};

export default HomePage;
