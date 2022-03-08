import React from 'react'
import BlogCard from '../ui/BlogCard'

function Blog() {
    return (
        <div className='flex gap-8 justify-center max-w-5xl mx-auto my-8 mobile:flex-col'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}

export default Blog;