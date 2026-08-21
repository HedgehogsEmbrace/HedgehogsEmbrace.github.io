HEDGEHOG'S EMBRACE — SITE GUIDE
================================

FILES
-----
index.html    Home page (post list)
about.html    About page
other.html    Other page
post.html     Template for a single post
posts.js      EDIT THIS FILE TO ADD/EDIT/REMOVE POSTS
style.css     Styling / colors / fonts
main.js       Renders + sorts the post list on the home page
post.js       Renders a single post

ADDING A NEW POST
------------------
Open posts.js. Copy one of the existing post entries (the whole block
between { and }), paste it into the POSTS list, and edit the fields:

  id       short unique code, no spaces, e.g. "summer-hike"
  title    the post title
  date     "YYYY-MM-DD" — this is what the sort button reads
  excerpt  a short teaser shown on the home page
  content  the full post text — one string per paragraph
  image    optional preview image path, or null for a text-only post
  imagePosition   "left" or "right" — only matters if image is set

Save the file and the new post shows up on the home page
automatically, sorted in with the rest.

REPLACING IMAGES
-----------------
All images live in /assets. Swap in your own files and keep the same
names (or update the paths in the HTML/posts.js if you rename them):

  assets/dragon.png        top-left header illustration (home + post pages)
  assets/grasshopper.png   top-right header illustration (home + post pages)
  assets/cat.png           About page illustration
  assets/skeleton.png      Other page illustration
  assets/posts/pond.png    "Trip To The Pond" preview image

THE SORT BUTTON
----------------
("Sort: Newest First / Oldest First") above the post list on the
home page — click it to flip the order. Move or restyle it in
index.html / style.css if you'd like it somewhere else.

COLORS
------
Defined at the top of style.css:
  --red          home & post page border   (#AE0C0C)
  --green        about page border         (#869A85)
  --other-bg     Other page background     (#9A4C1A)
