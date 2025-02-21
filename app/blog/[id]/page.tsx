'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface BlogPost {
    title: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
}

const blogPosts: Record<string, BlogPost> = {
    "1": {
        title: "Understanding React Server Components",
        content: `
            <h2>Introduction</h2>
            <p>React Server Components represent a paradigm shift in how we build React applications...</p>
            
            <h2>What are Server Components?</h2>
            <p>Server Components are a new way to build React applications that leverage the power of the server...</p>
            
            <h2>Benefits of Server Components</h2>
            <ul>
              <li>Improved performance</li>
              <li>Reduced client-side JavaScript</li>
              <li>Better SEO</li>
            </ul>
            
            <h2>Implementation Examples</h2>
            <p>Here's how you can implement Server Components in your React application...</p>
        `,
        date: "2024-01-15",
        author: "Abdul Aziz",
        category: "React",
        image: "/blog1.jpg"
    },
    // Add more blog posts
};

export default function BlogPost() {
    const params = useParams();
    const blogId = params.id as string;
    const post = blogPosts[blogId];

    if (!post) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white font-poppins">
            {/* Header */}
            <div className="relative h-[400px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            {post.title}
                        </motion.h1>
                        <div className="flex items-center justify-center gap-4 text-white/80">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.category}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg dark:prose-invert mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-indigo-600 dark:text-cyan-400 hover:underline"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Blog List
                    </Link>
                </motion.div>
            </div>
        </div>
    );
} 