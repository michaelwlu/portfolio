import { useForm, ValidationError } from "@formspree/react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
	const [state, handleSubmit] = useForm("contactForm");

	return (
		<div id="contact" className="pt-24 pb-16 lg:pt-24 lg:pb-32">
			<SectionHeader number="3" title="how to get in touch" emoji="💬" />
			<div className="md:ml-20 md:mr-2">
				<p className="max-w-4xl mt-6 text-base leading-relaxed md:mt-12 lg:text-lg text-bastille-800">
					Please feel free to say hello, enlighten me on a cool React library,
					share a must-watch TV show, or tell me about an interesting
					opportunity!
				</p>
				<div className="flex mt-8 md:mt-12">
					<div className="w-full max-w-3xl">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col text-base lg:text-lg text-bastille-800"
						>
							<div className="flex flex-col items-start space-y-1 md:space-y-0 md:items-center md:flex-row">
								<label htmlFor="name" className="w-36">
									Name
								</label>
								<input
									id="name"
									name="name"
									className="w-full border-gray-300 rounded-md shadow-xs lg:text-lg focus:border-kashmir-300 focus:ring-3 focus:ring-kashmir-200 focus:ring-opacity-50"
									type="text"
									required
								/>
							</div>
							<div className="flex flex-col items-start mt-3 space-y-1 md:mt-4 md:space-y-0 md:items-center md:flex-row">
								<label htmlFor="email" className="w-36">
									Email
								</label>
								<input
									id="email"
									type="email"
									name="email"
									className="w-full border-gray-300 rounded-md shadow-xs lg:text-lg focus:border-kashmir-300 focus:ring-3 focus:ring-kashmir-200 focus:ring-opacity-50"
									required
								/>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>
							</div>
							<div className="flex flex-col items-start mt-3 space-y-1 md:mt-6 md:space-y-0 md:flex-row">
								<label htmlFor="message" className="lg:mt-2 w-36">
									Message
								</label>
								<div className="w-full">
									<textarea
										id="message"
										name="message"
										className="w-full border-gray-300 rounded-md shadow-xs lg:text-lg focus:border-kashmir-300 focus:ring-3 focus:ring-kashmir-200 focus:ring-opacity-50"
										rows="5"
										required
									/>
									<ValidationError
										prefix="Message"
										field="message"
										errors={state.errors}
									/>
									<button
										className="flex items-center justify-center px-4 py-2 mt-3 font-medium leading-7 text-white whitespace-no-wrap transition duration-75 ease-in-out lg:mt-4 rounded-xl focus:outline-hidden bg-valencia-500 hover:bg-valencia-400 active:bg-valencia-400 focus-visible:bg-valencia-400"
										type="submit"
										disabled={state.submitting}
									>
										{!state.succeeded ? "Send message" : "Message sent!"}
									</button>
									{state.succeeded && (
										<p className="mt-4 italic font-medium text-valencia-500">
											Thanks for your message! I'll get back to you as soon as I
											can.
										</p>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
