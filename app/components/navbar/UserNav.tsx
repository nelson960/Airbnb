'use client';
import MenuLink from "./MenuLink";
import { useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import useSignupModal from "../hooks/useSignupModal";

const UserNav = () => {
	const loginModal = useLoginModal();
	const signupModal = useSignupModal();
	const [isOpen, setIsopen] = useState(false)
	return (
		<div className="p-2 relative inline-block border rounded-full">
			<button
				onClick={() => setIsopen(!isOpen)}
				className="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
				</svg>
			</button>

			{isOpen && (
				<div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md cursor-pointer">
					<MenuLink
						label="Log In"
						onClick={
							() => {
								setIsopen(false);
								loginModal.open();
							}}
					/>
					<MenuLink
						label="Sign Up"
						onClick={
							() => {
								setIsopen(false);
								signupModal.open();
							}}
					/>
				</div>
			)}
		</div>
	)
}

export default UserNav;