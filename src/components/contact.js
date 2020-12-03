import React from "react";

const Contact = () => (
  <div className='flex flex-col items-center justify-center h-screen text-white'>
    <p className='text-7xl w-1/2'>Now that we've met, lets connect.</p>
    <p className='text-3xl w-1/2 pt-6'>
      I am currently available for freelance and full time work.
    </p>
    <div className='pt-4'>
      <a
        className='pr-5 text-lg hover:text-blue-600'
        href='mailto:akosuakernizan@gmail.com'>
        Email Me
      </a>
      <a
        className='pr-5 text-lg hover:text-blue-600'
        href='https://www.linkedin.com/in/akosuakernizan/'>
        LinkedIn
      </a>
      <a
        className='pr-5 text-lg hover:text-blue-600'
        href='https://github.com/akernizan'>
        Github
      </a>
    </div>
  </div>
);

export default Contact;
