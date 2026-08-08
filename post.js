(function () {
  const panel = document.getElementById("post-panel");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = POSTS.find(p => p.id === id);

  function formatDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  if (!post) {
    panel.innerHTML = `
      <h1>Post not found</h1>
      <p>We couldn&rsquo;t find that post &mdash; it may have been moved or removed.</p>
      <a class="back-link" href="index.html">&larr; Back to all posts</a>
    `;
    return;
  }

  document.getElementById("page-title").textContent = post.title + " — Hedgehog's Embrace";

  const heroHtml = post.image
    ? `<img class="post-hero" src="${post.image}" alt="${post.title}">`
    : post.media
    ? post.media.type === "audio"
        ? `<audio class="post-hero" controls src="${post.media.src}"></audio>`
        : `<video class="post-hero" controls src="${post.media.src}"></video>`
    : "";

  const bodyHtml = post.content.map(paragraph => `<p>${paragraph}</p>`).join("");

  panel.innerHTML = `
    <h1>${post.title}</h1>
    <span class="post-date">${formatDate(post.date)}</span>
    ${heroHtml}
    <div class="post-body">${bodyHtml}</div>
    <a class="back-link" href="index.html">&larr; Back to all posts</a>
  `;
})();
