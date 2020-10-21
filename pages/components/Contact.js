import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const [state, handleSubmit] = useForm('contactForm');

  return (
    <div id="contact" className="pt-32 pb-32">
      <SectionHeader number="3" title="how to get in touch" />
      <p className="max-w-3xl mt-16 ml-10 text-xl text-bastille-800">
        Yes, I am currently exploring new opportunities! Regarding this or
        anything else, please feel free to say hello.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-3xl mt-10 ml-10 text-lg tracking-wide text-bastille-800"
      >
        <div className="flex items-center">
          <label htmlFor="name" className="w-32">
            Name
          </label>
          <input id="name" name="name" className="w-full text-lg form-input" />
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="email" className="w-32">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full text-lg form-input"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex mt-6 items-top">
          <label htmlFor="message" className="w-32 mt-2">
            Message
          </label>
          <div className="w-full">
            <textarea
              id="message"
              name="message"
              className="w-full text-lg form-textarea"
              rows="5"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="flex items-center justify-center px-4 py-2 mt-4 leading-7 tracking-wide whitespace-no-wrap transition duration-200 ease-in-out rounded-xl focus:outline-none text-carrara bg-valencia-500 hover:bg-valencia-400 active:bg-valencia-400 focus:bg-valencia-400"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
            {state.succeeded && (
              <p className="mt-4">
                Thanks for your message! I'll get back to you as soon as I can.
              </p>
            )}
            <div className="mt-6">
              <a
                href="mailto:hello@michaelwenlu.com"
                className="text-lg group focus:outline-none"
                target="_blank"
              >
                <span className="transition duration-200 text-bastille-800 group-hover:text-bastille-600 group-focus:text-bastille-600">
                  Or email me directly —{' '}
                </span>
                <span className="transition duration-200 text-valencia-500 group-hover:text-valencia-300 group-focus:text-valencia-300 ">
                  hello@michaelwenlu.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
