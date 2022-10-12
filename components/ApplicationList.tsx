import React from 'react';
import { application } from '../utils/data';
import Application from './Application';

const ApplicationList = () => {
	return (
		<section className='min-h-screen text-gray-600 '>
			<div className='container mx-auto px-5 py-10'>
				<div className='grid grid-cols-12 gap-9'>
					{application.map((app, i) => (
						<Application value={app} key={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ApplicationList;
