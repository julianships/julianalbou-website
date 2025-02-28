// Blog post data structure
const blogPosts = [
    {
        id: 1,
        title: "Starting My Developer Journey",
        content: "Today marks the beginning of my journey into web development. I've set up my personal website and blog to document my progress and share my learnings with others.",
        date: "2024-03-20",
        tags: ["beginnings", "web-development"],
        readingTime: "2 min read"
    },
    {
        id: 2,
        title: "Learning HTML, CSS, and JavaScript",
        content: "I'm diving deep into the fundamentals of web development. Understanding these core technologies is crucial for building a strong foundation.",
        date: "2024-03-21",
        tags: ["html", "css", "javascript"],
        readingTime: "3 min read"
    },
    {
        id: 3,
        title: "Building in Public: Why and How",
        content: "Inspired by developers like Pieter Levels and Marc Lou, I've decided to build in public. Here's my approach and what I hope to achieve.",
        date: "2024-03-22",
        tags: ["build-in-public", "learning"],
        readingTime: "4 min read"
    }
];

// Project data structure
const projects = [
    {
        title: "Personal Website",
        description: "My personal website and blog built with HTML, CSS, and JavaScript.",
        image: "assets/project1.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/yourusername/personal-website"
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

// Create HTML for a single project
const createProjectHTML = (project) => {
    return `
        <article class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${createTagElements(project.tags)}
            </div>
            <a href="${project.link}" class="btn" target="_blank">View Project</a>
        </article>
    `;
};

// Dark mode toggle
const initializeTheme = () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    document.querySelector('nav').appendChild(themeToggle);

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    });
};

// Search functionality
const initializeSearch = () => {
    const searchContainer = document.getElementById('search-container');
    if (!searchContainer) return;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search posts...';
    searchInput.className = 'search-input';
    searchContainer.appendChild(searchInput);

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );

        const blogContainer = document.getElementById('blog-posts');
        if (blogContainer) {
            blogContainer.innerHTML = filteredPosts
                .map(post => createBlogPostHTML(post))
                .join('');
        }
    });
};

// Contact form handling
const initializeContactForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to your backend
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
};

// Initialize blog posts
const initializeBlogPosts = () => {
    const blogContainer = document.getElementById('blog-posts');
    const featuredContainer = document.getElementById('featured-posts');
    
    if (blogContainer) {
        blogContainer.innerHTML = blogPosts
            .map(post => createBlogPostHTML(post))
            .join('');
    }
    
    if (featuredContainer) {
        featuredContainer.innerHTML = blogPosts
            .slice(0, 2)
            .map(post => createBlogPostHTML(post))
            .join('');
    }
};

// Initialize projects
const initializeProjects = () => {
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects
        .map(project => createProjectHTML(project))
        .join('');
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
    initializeTheme();
    initializeBlogPosts();
    initializeProjects();
    initializeSearch();
    initializeContactForm();
    addSmoothScrolling();
    
    console.log('Website initialized successfully!');
}); 