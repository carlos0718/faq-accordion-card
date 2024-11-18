import boxDesktop from '@/public/images/illustration-box-desktop.svg';
import Image from 'next/image';
import React from 'react';

const BoxImage = () => {
	return (
		<section className='absolute left-[5] -top-[30]'>
			<Image src={boxDesktop} alt='box' />
		</section>
	);
};

export default BoxImage;
