'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';



export default function Blog() {
    const [isDark, setIsDark] = useState(true);
    const [blogs,setBlogs] = useState<any>([])
    const router = useRouter();

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const handleNavigation = (item: string) => {
        if (item === 'Blog') {
            router.push('/blog');
        } else {
            router.push('/#' + item.toLowerCase());
        }
    };

    const generateSlug = (title:string,id:string) => {
        return title.toLocaleLowerCase().trim()  .replace(/\s+/g, '-') + "_"+ id 
    }
    useEffect(() => {
        const fetchBlogs = async () => {
          const res = await fetch('/api/blog')
          const data = await res.json()
          setBlogs(data)
        }
    
        fetchBlogs()
      }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white font-poppins">
            <Navbar
                isDark={isDark}
                toggleTheme={toggleTheme}
                handleNavigation={handleNavigation}
            />
            {/* Header */}
            <div className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-500">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white text-center">Blog Posts</h1>
                </div>
            </div>

            {/* Blog List */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Link href={`/blog/${generateSlug(blog.title,blog.id)}`}>
                                <div className="relative h-48">
                                    {/* <Image
                                        src={blog.image ?? '#'}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                    /> */}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-sm text-indigo-600 dark:text-cyan-400">
                                            {blog.category ?? ''}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {blog.date ?? ''}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {blog.readTime ?? ''}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {blog.content.split(' ').slice(0,10).join(' ') +'...'}
                                    </p>
                                    <div className="mt-4 flex items-center text-indigo-600 dark:text-cyan-400">
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 