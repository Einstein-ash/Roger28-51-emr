import React from 'react';
import BlogCard from './BlogCard';


const BlogPage = () => {
  return (
    <div className="blog-page">
      <BlogCard
        title="Blog Title 1"
        date="July 7, 2023"
        instagramLink="https://www.instagram.com/your-post-link"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maiores ipsum minus asperiores labore voluptatem ex eveniet! Illum aut, accusamus ipsum unde libero incidunt, fugit alias et neque quas distinctio inventore, eligendi earum quibusdam officia odio vel reprehenderit. Delectus aliquam odio debitis qui natus in, recusandae ea quasi cum incidunt sequi! Amet molestias quaerat debitis rem pariatur quam tempora laboriosam corporis fuga animi. Quod, voluptatem. Commodi quod expedita adipisci quia temporibus ex mollitia omnis sunt, optio tenetur consequatur porro, atque excepturi soluta nesciunt deserunt cum culpa voluptatem recusandae ducimus officiis aspernatur corrupti dolor quis? Quos excepturi blanditiis distinctio in sit."
      />
      <BlogCard
        title="Blog Title 2"
        date="August 7, 2023"
        instagramLink="https://www.instagram.com/you-post-link"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maiores ipsum minus asperiores labore voluptatem ex eveniet! Illum aut, accusamus ipsum unde libero incidunt, fugit alias et neque quas distinctio inventore, eligendi earum quibusdam officia odio vel reprehenderit. Delectus aliquam odio debitis qui natus in, recusandae ea quasi cum incidunt sequi! Amet molestias quaerat debitis rem pariatur quam tempora laboriosam corporis fuga animi. Quod, voluptatem. Commodi quod expedita adipisci quia temporibus ex mollitia omnis sunt, optio tenetur consequatur porro."
      />
    </div>
  );
};

export default BlogPage;