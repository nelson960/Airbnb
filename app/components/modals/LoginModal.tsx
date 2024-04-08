'use client';
import Modal from "./Modals";

import { useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
	const loginModal = useLoginModal()

	const content = (
		<>
		<form className="space-y-4">
			<input placeholder="Type you email" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"></input>
			<input placeholder="Type you password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"></input>
			<div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
				The error message
			</div>
			<CustomButton 
			label="Submit"
			onClick={()=> console.log('Test')}
			/>
		</form>
		</>
	)
	return (
		<Modal
			isOpen={loginModal.isOpen}
			close={loginModal.close}
			label="Log In"
			content={content}
		/>
	)
}


export default LoginModal;