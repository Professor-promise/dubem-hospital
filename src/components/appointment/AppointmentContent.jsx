import React, { useState } from 'react';
import { doctorsContent } from '../../shared/data';

const AppointmentContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    select: '',
    date: '',
    subject: '',
    message: '',
  });

  const { name, email, select, date, subject, message } = formData;

  const onChange = e => {
    setFormData({
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      select: '',
      date: '',
      subject: '',
      message: '',
    });
    alert('Your message was submitted successfully');
  };

  return (
    <form
      className='flex flex-col items-start w-full p-5 gap-4 '
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center gap-4 w-full lg:flex-row'>
        <input
          type='text'
          placeholder='Name'
          id='name'
          value={name}
          onChange={onChange}
          required
          className='border-2 border-zinc-500  w-full rounded-lg p-4 focus-within:border-mainPurple outline-none bg-transparent'
        />
        <input
          type='text'
          required
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChange}
          className='border-2 border-zinc-500 w-full rounded-lg p-4 focus-within:border-mainPurple outline-none bg-transparent'
        />
      </div>
      <div className='w-full flex flex-col items-center gap-4  lg:flex-row'>
        <select
          name='select'
          id='select'
          value={select}
          onChange={onChange}
          required
          className='w-full border-2 border-zinc-500 p-4 rounded-lg focus-within:border-mainPurple outline-none bg-transparent'
        >
          {doctorsContent?.map(({ id, name }) => (
            <option value={name} key={id}>
              {name}
            </option>
          ))}
        </select>
        <input
          type='date'
          name='date'
          id='date'
          value={date}
          onChange={onChange}
          placeholder='Appointment Date '
          required
          className='border-2 border-zinc-500 w-full p-4 rounded-lg focus-within:border-mainPurple outline-none bg-transparent before:content-[attr(placeholder)] before:text-zinc-500 focus:text-mainBrown valid:text-mainBrown text-transparent focus:before:content-[""] valid:before:content-[""]'
        />
      </div>
      <input
        type='text'
        placeholder='Subject'
        id='subject'
        value={subject}
        onChange={onChange}
        required
        className='border-2 border-zinc-500 w-full rounded-lg p-4  focus-within:border-mainPurple outline-none bg-transparent'
      />
      <textarea
        placeholder='Message'
        required
        id='message'
        value={message}
        onChange={onChange}
        rows='8'
        className='border-2 border-zinc-500 w-full p-4 form-textarea rounded-lg  focus-within:border-mainPurple outline-none bg-transparent'
      ></textarea>
      <button className='bg-mainPurple p-4 text-mainWhite text-xl font-medium rounded-lg outline-none'>
        Send Message
      </button>
    </form>
  );
};

export default AppointmentContent;
