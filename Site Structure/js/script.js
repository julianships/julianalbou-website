// Blog post data structure
const blogPosts = [
    {
        title: "Starting My Developer Journey",
        content: "Today marks the beginning of my journey into web development. I've set up my personal website and blog to document my progress and share my learnings with others.",
        date: "2024-03-20",
        tags: ["beginnings", "web-development"],
        readingTime: "2 min read"
    },
    {
        title: "Learning HTML, CSS, and JavaScript",
        content: "I'm diving deep into the fundamentals of web development. Understanding these core technologies is crucial for building a strong foundation.",
        date: "2024-03-21",
        tags: ["html", "css", "javascript"],
        readingTime: "3 min read"
    },
    {
        title: "Building in Public: Why and How",
        content: "Inspired by developers like Pieter Levels and Marc Lou, I've decided to build in public. Here's my approach and what I hope to achieve.",
        date: "2024-03-22",
        tags: ["build-in-public", "learning"],
        readingTime: "4 min read"
    }
];

// Utility functions
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

const createTagElements = (tags) => {
    return tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ');
};

// Create HTML for a single blog post
const createBlogPostHTML = (post) => {
    return `
        <article class="blog-post">
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span class="date">${formatDate(post.date)}</span>
                <span class="reading-time">${post.readingTime}</span>
            </div>
            <p>${post.content}</p>
            <div class="tags">
                ${createTagElements(post.tags)}
            </div>
        </article>
    `;
};

// Initialize the blog posts
const initializeBlogPosts = () => {
    const blogContainer = document.getElementById('blog-posts');
    const featuredContainer = document.getElementById('featured-posts');
    
    if (blogContainer) {
        // Show all posts on the blog page
        blogContainer.innerHTML = blogPosts
            .map(post => createBlogPostHTML(post))
            .join('');
    }
    
    if (featuredContainer) {
        // Show only the latest 2 posts on the homepage
        featuredContainer.innerHTML = blogPosts
            .slice(0, 2)
            .map(post => createBlogPostHTML(post))
            .join('');
    }
};

// Add smooth scrolling for navigation
const addSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeBlogPosts();
    addSmoothScrolling();
    
    // Log successful initialization
    console.log('Website initialized successfully!');
}); 