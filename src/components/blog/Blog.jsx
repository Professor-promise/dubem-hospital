import React from 'react';
import { blogContent } from '../../shared/data';
import Utils from '../../shared/Utils';
import BlogContent from './BlogContent';
import shape_6 from '../../images/shape-6.svg';

const Blog = () => {
  return (
    <div
      className='w-full pt-80 lg:pt-4 pb-10 lg:mt-0 flex items-center flex-col gap-5 relative'
      id='blog'
    >
      <img src={shape_6} alt='' className='absolute top-0 right-0' />
      <Utils
        utilTitle='Blog Post'
        utilSubHeading='Latest News'
        utilText='Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.'
        className='px-3'
      />
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 lg:px-40 p-4'>
        {blogContent?.map((item) => (
          <BlogContent {...{ item }} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
