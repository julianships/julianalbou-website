document.addEventListener("DOMContentLoaded", function (){
    console.log("Website Loaded Successfully!");
});

document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        { title: "Day 1: The Journey Begins", content: "I just bought my domain and started my dev journey!" },
        { title: "Day 2: Setting Up My Website", content: "Leanring HTML, CSS, and JavaScript basics." }    
    ];

    const blogContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
});