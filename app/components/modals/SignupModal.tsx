'use client';
import Modal from "./Modals";

import { useState } from "react";
import useSignupModal from "../hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
	const signupModal = useSignupModal()

	const content = (
		<>
		<form className="space-y-4">
			<input placeholder="Type you Email" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"></input>
			<input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"></input>
			<input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"></input>
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
			isOpen={signupModal.isOpen}
			close={signupModal.close}
			label="Sign Up"
			content={content}
		/>
	)
}


export default SignupModal;