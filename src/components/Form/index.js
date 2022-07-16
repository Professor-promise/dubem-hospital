import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_3.png';

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
  });

  const { firstName, lastName, email, password, confirmPassword, type } =
    formData;

  const onChange = (e) => {
    setFormData(() => ({
      [e.target.id]: e.target.value,
    }));
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setIsRegistered(!isRegistered);
  };

  return (
    <div className='w-full px-4 relative top-0 left-0 h-screen flex items-center justify-center flex-col gap-4 md:gap-8'>
      <Link to='/' className='absolute top-2 left-4 md:top-5 md:left-60 '>
        <img src={logo} alt='logo' className='object-fit' />
      </Link>

      <div className='flex flex-col text-center mt-10'>
        <h2 className='text-[2.7rem] font-semibold'>
          {isRegistered ? 'Register' : 'Login'}
        </h2>
        <p className='text-xl '>To enjoy all our medical services ✌</p>
      </div>

      <form className='bg-mainWhite flex flex-col gap-4 p-5 w-full max-w-lg rounded-lg md:rounded-xl shadow-lg '>
        {isRegistered && (
          <div className='flex gap-1 md:gap-2 '>
            <div className='flex flex-col w-full gap-1 '>
              <label htmlFor='firstName'>FirsName</label>
              <input
                type='text'
                id='firstName'
                value={firstName}
                onChange={onChange}
                className='border-2 w-full p-1 rounded-md outline-none md:p-2'
              />
            </div>
            <div className='flex flex-col w-full gap-1 '>
              <label htmlFor='lastName'>LastName</label>
              <input
                type='text'
                id='lastName'
                value={lastName}
                onChange={onChange}
                className='border-2 w-full p-1 rounded-md outline-none md:p-2'
              />
            </div>
          </div>
        )}
        <div className='flex flex-col  w-full gap-1 '>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={onChange}
            className='border-2 w-full p-1 rounded-md outline-none md:p-2'
          />
        </div>
        <div className='flex flex-col w-full gap-1 '>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            value={password}
            onChange={onChange}
            className='border-2 w-full p-1 rounded-md outline-none md:p-2'
          />
        </div>
        <div className='flex flex-col w-full gap-1 '>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='text'
            id='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
            className='border-2 w-full p-1 rounded-md outline-none md:p-2'
          />
        </div>
        <div className='flex gap-4'>
          <div className='flex gap-2'>
            <input
              type='radio'
              id='patient'
              value={type}
              onChange={onChange}
              name='type'
              className='text-xl text-mainPurple'
            />
            <label htmlFor='patient'>Patient</label>
          </div>
          <div className='flex gap-2'>
            <input
              type='radio'
              id='doctor'
              value={type}
              onChange={onChange}
              name='type'
            />
            <label htmlFor='doctor'>Doctor</label>
          </div>
        </div>
        <button className='bg-lightPurple rounded-md text-mainWhite p-2 font-semibold text-xl hover:bg-mainPurple'>
          Sign Up
        </button>
        <p className='text-center'>
          Already a user?
          <button
            className='px-2 text-lightPurple hover:underline'
            onClick={handleToggle}
          >
            {!isRegistered ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
