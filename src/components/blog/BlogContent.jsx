import React from 'react';
import blog_img from '../../images/blog-1.png';
import ArrowRightAltOutlined from '@mui/icons-material/ArrowRightAltOutlined';

const BlogContent = ({ item }) => {
  const { id, topic, info, img } = item;
  return (
    <div
      className='w-full flex flex-col items-start justify-center gap-4 py-3  group cursor-pointer'
      key={id}
    >
      <div className='w-full  overflow-hidden rounded-t-3xl '>
        <img
          src={img}
          alt=''
          className='object-cover w-full group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500'
        />
      </div>
      <h2 className='font-semibold text-[1.5rem] leading-8 hover:text-lightPurple transition-all duration-500'>
        {topic}
      </h2>
      <p className='text-textColor '>{info}</p>
      <button className='text-lightPurple flex items-center justify-center gap-1 hover:gap-4 font-medium text-lg  transition-all duration-500'>
        <span>Read More</span>
        <span>
          <ArrowRightAltOutlined className='font-bold text-3xl' />
        </span>
      </button>
    </div>
  );
};

export default BlogContent;
