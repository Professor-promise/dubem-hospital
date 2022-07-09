import React from 'react';
import { contactsIcon } from '../../shared/data';

const Contact = () => {
  return contactsIcon?.map((contacts, index) => (
    <div
      key={index}
      className='hidden lg:flex px-40 py-5 bg-mainPurple justify-between'
      id='home'
    >
      <div className='flex gap-5 text-mainWhite'>
        {contacts.left?.map((item) => (
          <div key={item.id} className='flex gap-1 text-sm items-center'>
            <a
              href={item.url}
              className=' hover:bg-mainBlack text-mainWhite cursor-pointer rounded-md'
            >
              {item.icon}
            </a>
            <p className=''>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='flex contact gap-4'>
        {contacts.right?.map((item) => (
          <div
            key={item.id}
            className=' hover:bg-mainBlack text-mainWhite cursor-pointer rounded-md transition-all duration-700'
          >
            <a href={item.url}>{<item.Icon className='h-8 w-8' />}</a>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default Contact;
