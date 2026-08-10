/*
  POSTS DATA
  ----------
  This is the only file you need to touch to add, edit, or remove a blog post.

  To add a new post, copy one of the objects below (between the { and }),
  paste it into the list, and fill in your own details.

  Fields:
    id       - short unique code, letters/numbers/dashes only, no spaces.
               Used in the post's web address, e.g. id: "trip-to-pond"
               becomes post.html?id=trip-to-pond
    title    - the post title.
    date     - the post date, formatted as "YYYY-MM-DD" (this is what the
               sort button uses, so keep this format).
    excerpt  - a short preview shown on the home page. Keep it to a
               sentence or two - the rest of the post goes in "content".
    content  - the full text of the post, shown on its own page. Write each
               paragraph as a separate line inside the array of strings.
    image    - optional. Path to a preview image shown next to the excerpt
               on the home page AND at the top of the full post. Leave it
               as null for a text-only post.
    imagePosition - optional, only used if "image" is set. Either "left" or
               "right" - controls which side the preview image sits on in
               the home page list.
*/

const POSTS = [
  {
    id: "guitar-demo-1",
    title: "Short Guitar Riff",
    date: "2026-08-07",
    excerpt: "A short guitar demo riff. Tuned down a half step.",
    content: [
      "A short guitar demo riff. Tuned down a half step."
    ],
    image: null,
    imagePosition: "right",
    media: {
        type: "audio",
        src: "assets/posts/demo1.m4a"
    }
},
  
{
    id: "beeswax-review",
    title: "Beeswax (2009) Review",
    date: "2026-03-31",
    excerpt: "This was my third Bujalski movie. I saw Funny Ha Ha junior year of college and instantly fell in love with it. This was the type of movie I’d been searching for, the type of movie I wanted to make. The subdued style and the excessive wandering dialogue and the indirect characters and the mundane circumstances all just felt so natural to me...",
    content: [
      `This was my third Bujalski movie. I saw Funny Ha Ha junior year of college and instantly fell in love with it. It was the exact kind of film I'd been searching for at the time, the exact type of movie I wanted to make. 
      The subdued style and the excessive wandering dialogue and indirect characters and mundane circumstances all just worked so well for me. 
      I felt  represented. This was increased by the fact that the movie took place in Allston, where I was living at the time, and that I was as lost and aimless in my own life as the characters were in theirs. 
      The way they talked to each other, the stripped down uneventful plot; these were things I knew well and meant so much to me. This was a type of American movie I had not yet seen.`,
      `I loved Mutual Appreciation for many of the same reasons. The ramshackle plot of that film might seem unimportant next to any other movie but these were the conflicts that occurred in my life and that seemed monumentally important to me. 
      Coincidentally, by the time I watched Mutual Appreciation I was living in central square and trying to move to New York exactly like the characters. 
      There's a funny moment in the movie where Andrew's character says Boston people would rather paint their action figures than try to make anything meaningfully substantive, a phenomenon which I had also recognized and was growing tired of as well at the time. 
      Beeswax is Bujalski’s first Austin movie. After Boston, after New York, where do you go? For Andrew this was Austin. 
      I don't know what my Austin is yet. I don't think I will continue to follow him. I think our paths diverge here. I wonder what he saw in Austin that inspired this film? 
      I decided to watch Beeswax because these movies never fail to make me feel something, and I wanted to feel something. I had put off watching this movie because I was afraid I would feel something.`,
      `It did not fail on that front. Bujalski has such a talent for making all these cities (Boston, New York, and now Austin) feel so small. The plot in Beeswax is bigger than the other two films but still feels easily approachable and life-like. 
      Like his previous work, this movie has this way of talking that is so unique and yet so universal. It is both passive aggressive and non-confrontational.
      Do these characters even mean what they say? Do we mean the things we say? Do we really? People talk over each other and don’t finish their sentences. No one really knows anything. 
      There is no audience handholding. You have to figure out the plot and relationships through the way people talk to each other, like you're being thrust into the middle of a new friend group for the first time. 
      No one ever really yells. They get angry, and frustrated, but it is always restrained in this interesting way. Conflict in real life is oft not like the conflicts we see on screen. It is usually small, and restrained. 
      We do not want to hurt the people we care about even though we are very angry, and even if yelling might be the right thing to do. It's easier to just mutter under our breath.`, 
      `The conversations in this film occur so naturally. A lot of scripts are mostly concerned with getting to the plot forwarding point as soon as possible. Conversations often seem to exist only to serve the plot. 
      Like real life, Beeswax is unafraid to go off on a tangent. Nothing could happen that is so severe it can’t go off on a tangent. We are not too self-important for tangents. 
      No one is over acting but it’s also so natural. Non-actors are put into normal situations and it just...works. People often say the wrong thing. They say things that make people uncomfortable and awkward. People are always sort of peeved. 
      People stutter and say "I don't know". There's anger and contention but at the end of the day everyone is still friends. 
      This movie really warmed my heart. It reaffirms our belief in and our connection to one another. And although I will likely not be following Andrew to Austin, I will continue to vouch for movies like his wherever I am.`
    ],
    image: "assets/posts/bee.png",
    imagePosition: "right"
  },
  
{
    id: "Cantabrigian-lane",
    title: "A Cantabrigian Lane Dispute",
    date: "2025-12-20",
    excerpt: "An unproduced script based on an original story created by me and a friend. In this sci-fi comedy, two unemployed friends quickly get in over their heads when they get jobs in the burgeoning AI industry.",
    content: [
      "An unproduced script based on an original story created by me and a friend. In this sci-fi comedy, two unemployed friends quickly get in over their heads when they get jobs in the burgeoning AI industry.",
'Read the script <a href="assets/posts/A Cantabrigian Lane Dispute.pdf" target="_blank">here</a>.'
      
    ],
    image: null,
    imagePosition: "left"
  }
];
