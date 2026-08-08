// Renders the post list on the home page and handles the sort toggle.
// Nothing here needs to change to add a post - edit posts.js instead.

(function () {
  const listEl = document.getElementById("post-list");
  const sortBtn = document.getElementById("sort-toggle");
  if (!listEl) return;

  let order = "desc"; // "desc" = newest first, "asc" = oldest first

  function excerptWithReadMore(post) {
    return `${post.excerpt}<a class="read-more" href="post.html?id=${encodeURIComponent(post.id)}">Read More</a>`;
  }

  function renderList() {
    const sorted = [...POSTS].sort((a, b) => {
      const diff = new Date(a.date) - new Date(b.date);
      return order === "asc" ? diff : -diff;
    });

    if (sorted.length === 0) {
      listEl.innerHTML = `<div class="empty-state">No posts yet - add one in posts.js.</div>`;
      return;
    }

    listEl.innerHTML = sorted.map(post => {
      if (post.image) {
        const side = post.imagePosition === "left" ? "image-left" : "image-right";
        return `
          <article class="post-item has-image ${side}">
            <div class="post-thumb">
              <a href="post.html?id=${encodeURIComponent(post.id)}">
                <img src="${post.image}" alt="${post.title}">
              </a>
            </div>
            <div class="post-text">
              <h2 class="post-title"><a href="post.html?id=${encodeURIComponent(post.id)}">${post.title}</a></h2>
              <p class="post-excerpt">${excerptWithReadMore(post)}</p>
            </div>
          </article>`;
      }
      return `
        <article class="post-item">
          <div class="post-text">
            <h2 class="post-title"><a href="post.html?id=${encodeURIComponent(post.id)}">${post.title}</a></h2>
            <p class="post-excerpt">${excerptWithReadMore(post)}</p>
          </div>
        </article>`;
    }).join("");
  }

  if (sortBtn) {
    sortBtn.addEventListener("click", () => {
      order = order === "desc" ? "asc" : "desc";
      sortBtn.dataset.order = order;
      sortBtn.querySelector(".label").textContent = order === "desc" ? "Newest First" : "Oldest First";
      renderList();
    });
  }

  renderList();
})();
