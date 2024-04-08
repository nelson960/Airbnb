import Image from "next/image";
import PropertyList from "../components/properties/PropertyList";
const MyPropertiesPage = () => {
	return (
		<main className="mt-6 mb-6 max-w-[2000px] mx-auto px-6 pb-6">
			<h1 className="my-6 mb-6 text-2xl">My properties hello</h1>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"><PropertyList /></div>
		</main>)}

export default MyPropertiesPage;