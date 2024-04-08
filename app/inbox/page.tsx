import Conversation from "../components/inbox/Conversation";
const InboxPage = () => {
	return (
		<main className="mt-6 mb-6 max-w-[2000px] mx-auto px-6 pb-6 space-y-4">
			<h1 className="my-6 mb-6 text-2xl">inbox</h1>
			<Conversation/>
			<Conversation/>
			<Conversation/>
		</main>)}

export default InboxPage;