import womanDesktop from '@/public/images/illustration-woman-online-desktop.svg';
import Image from 'next/image';
import React from 'react';

const BackgroundPatternWoman = () => {
	return (
		<section className='absolute -left-[90] bottom-[75]'>
			<Image src={womanDesktop} alt='woman' height={500} width={500} />
		</section>
	);
};

export default BackgroundPatternWoman;
