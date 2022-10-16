import Link from 'next/link';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Layout from '../components/Layout';
import SMSForm from '../components/SMS/SMSForm';
import SMSTable from '../components/SMS/SMSTable';
import { useForm } from 'react-hook-form';
import InputForm from '../components/InputForm';
import { MessageProps } from '../interface/type';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const getMessages = async () => {
	const URL = ' http://localhost:3000/api/message';
	const result = await fetch(URL);
	return await result.json();
};

const submitMessage = async (data: MessageProps) => {
	const URL = 'http://localhost:3000/api/message';
	const response = await fetch(URL, {
		method: 'POST',
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error('An error has occured');
	}
	return await response.json();
};

const fakesms = () => {
	const [errMessage, setErrMessage] = useState('');

	const queryClient = useQueryClient();
	const { data, isSuccess } = useQuery(['fakesms'], getMessages, {
		staleTime: 15000,
		refetchInterval: 15000,
	});

	const validationSchema = Yup.object().shape({
		phoneNumber: Yup.string().required(),
		message: Yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm<MessageProps>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const mutation = useMutation(submitMessage, {
		onMutate: async (newMessage) => {
			// mutation in-progress
			// use for : spinner, disabled form,etc

			// Optimistic Update :
			// 1. cancel any outgoing refetch
			await queryClient.cancelQueries(['fakesms']);

			// 2. snapshot the previous value
			const previousMessages = queryClient.getQueryData<MessageProps[]>(['fakesms']);

			// 3. optimistically update new value
			if (previousMessages) {
				newMessage = { ...newMessage, createdAt: new Date().toISOString(), status: 'waiting' };
				const finalMessages = [...previousMessages, newMessage];
				queryClient.setQueryData(['fakesms'], finalMessages);
			}
			return { previousMessages };
		},
		onSettled: async (data, error: any, variables, context) => {
			if (data) {
				await queryClient.invalidateQueries(['fakesms']);
				setErrMessage('');
				reset();
				clearErrors();
			}

			if (error) {
				setErrMessage(error.message);
			}
		},
		onError: async (error: any, _variables, context: any) => {
			setErrMessage(error.message);
			if (context?.previousMessages) {
				queryClient.setQueryData<MessageProps[]>(['fakesms'], context.previousMessages);
			}
		},
		onSuccess: async () => {
			console.log('onSuccess ....');
		},
	});

	const onSubmit = async (data: MessageProps) => {
		await mutation.mutate(data);
	};

	return (
		<Layout>
			<div className='min-h-screen'>
				<div className='flex justify-between items-center'>
					<Link href='/playground'>
						<div className='p-3 w-20 ml-8 md:ml-12 mt-12 rounded-full bg-gray-700 hover:bg-gray-800 flex justify-center text-gray-100 hover:scale-95 transition-all cursor-pointer'>
							Back
						</div>
					</Link>
					<img
						src='https://avatars.githubusercontent.com/u/57015700?v=4'
						className=' rounded-full mr-12 mt-10 animate-bounce'
						alt='AM Logo'
						width={45}
						height={20}
					/>
				</div>
				<h1 className='text-3xl text-gray-100 font-bold ml-12 mt-8 -mb-4'>#D2YSMS FAKE</h1>

				<div className='block lg:grid grid-cols-12'>
					<div className='container col-span-5 pl-12 py-4 mx-auto flex'>
						<div className='w-full bg-gray-900 rounded p-8 flex flex-col md:ml-auto m-8 shadow-md'>
							<form onSubmit={handleSubmit(onSubmit)}>
								<h2 className='text-gray-200 text-lg mb-1 font-medium title-font'>Request Pulsa</h2>
								<p className='leading-relaxed mb-5 text-gray-400'>
									Post-ironic portland shabby chic echo park, banjo fashion axe
								</p>
								<div className='relative mb-4'>
									<InputForm
										id='phoneNumber'
										type='text'
										label='Phone Number'
										placeholder='Phone Number :'
										register={register}
										errors={errors.phoneNumber}
									/>
								</div>
								<div className='relative mb-4'>
									<label className='leading-7 text-sm text-gray-400'>Message</label>
									<textarea
										id='message'
										{...register('message')}
										name='message'
										placeholder='Message :'
										className='w-full font-sans bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
									></textarea>
									{errors.message && (
										<div className='m-1 text-sm font-light text-red-500 font-sans'>Message is required field</div>
									)}
								</div>
								<button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg'>
									SEND
								</button>
							</form>
							<p className='text-xs text-gray-500 mt-3'>
								Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
							</p>
						</div>
					</div>
					<SMSTable data={data} />
				</div>
			</div>
		</Layout>
	);
};

export default fakesms;
