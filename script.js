// Header toggle in Big Small Screen

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fetching blogs

async function fetchBlogPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //
    const data = await response.json();
    return data.slice(0, 15);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function renderBlogPosts() {
  const blogPostsContainer = document.getElementById("blog-posts");
  const blogPosts = await fetchBlogPosts();

  if (blogPosts.length === 0) {
    blogPostsContainer.innerHTML =
      '<p class="text-red-500">No blog posts available</p>';
    return;
  }

  blogPosts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.classList.add("bg-white", "p-6", "rounded-lg", "shadow-md");

    const numText = Math.floor(Math.random() * (300 - 150 + 1)) + 100;
    postCard.innerHTML = `
          <h2 class="sm:text-xl font-semibold mb-2">${post.title}</h2>
          <p class="text-gray-600 text-sm">${post.body.slice(0, numText)}</p>
          <a href="${
            post.it
          }" class="text-blue-700  mt-2 inline-block">Read More</a>
      `;

    blogPostsContainer.appendChild(postCard);
  });
}

renderBlogPosts();
