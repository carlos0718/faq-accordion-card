import BackgroundPatternWoman from '@/pages/background-pattern';
import BoxImage from '@/pages/box-image';
import bgPatternDesktop from '@/public/images/bg-pattern-desktop.svg';
import iconArrow from '@/public/images/icon-arrow-down.svg';
import Image from 'next/image';
import React from 'react';

const Card = () => {
	return (
		<>
			<section className='bg-white w-full h-[550px] rounded-3xl max-w-[1200] absolute overflow-hidden'>
				<section>
					<section className='absolute -left-[550] -top-64 max-w-full'>
						<Image src={bgPatternDesktop} alt='bg-card' />
					</section>
					<BackgroundPatternWoman />
				</section>
				<section className='absolute left-[650] top-20'>
					<h1 className='font-bold text-3xl'>FAQ</h1>
					<article>
						<details>
							<summary className='relative'>
								How many team members can I invite
								<span></span>
							</summary>
							<div className='absolute top-0 left-[350]'></div>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minima aspernatur possimus aperiam praesentium eligendi
								sapiente harum nam ab blanditiis, vero quis consequatur! Aspernatur eius adipisci culpa quas, optio magnam. Ipsa iste
								beatae eveniet earum quia facere tempora magnam cupiditate et illum, itaque adipisci nemo dicta ullam facilis
								voluptates recusandae assumenda ducimus, veniam debitis iure autem! Eveniet labore incidunt cum.
							</p>
						</details>
						<details>
							<summary className='relative'>
								What is the maximum file upload size
								<span></span>
							</summary>
							<p>No more than 2GB. All files inyour account must fit your alloted storage space.</p>
						</details>
						<details>
							<summary className='relative'>
								How do I reset my password
								<span></span>
							</summary>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minima aspernatur possimus aperiam praesentium eligendi
								sapiente harum nam ab blanditiis, vero quis consequatur! Aspernatur eius adipisci culpa quas, optio magnam. Ipsa iste
								beatae eveniet earum quia facere tempora magnam cupiditate et illum, itaque adipisci nemo dicta ullam facilis
								voluptates recusandae assumenda ducimus, veniam debitis iure autem! Eveniet labore incidunt cum.
							</p>
						</details>
						<details>
							<summary className='relative'>
								Can I cancel my subscription
								<span></span>
							</summary>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minima aspernatur possimus aperiam praesentium eligendi
								sapiente harum nam ab blanditiis, vero quis consequatur! Aspernatur eius adipisci culpa quas, optio magnam. Ipsa iste
								beatae eveniet earum quia facere tempora magnam cupiditate et illum, itaque adipisci nemo dicta ullam facilis
								voluptates recusandae assumenda ducimus, veniam debitis iure autem! Eveniet labore incidunt cum.
							</p>
						</details>
						<details>
							<summary className='relative'>
								Do you provide additional support
								<span></span>
							</summary>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minima aspernatur possimus aperiam praesentium eligendi
								sapiente harum nam ab blanditiis, vero quis consequatur! Aspernatur eius adipisci culpa quas, optio magnam. Ipsa iste
								beatae eveniet earum quia facere tempora magnam cupiditate et illum, itaque adipisci nemo dicta ullam facilis
								voluptates recusandae assumenda ducimus, veniam debitis iure autem! Eveniet labore incidunt cum.
							</p>
						</details>
					</article>
				</section>
			</section>
			<BoxImage />
		</>
	);
};

export default Card;
