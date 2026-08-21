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
    id: "Tony-Takitani-review",
    title: "Tony Takitani (2004) and Consumerist Mania",
    date: "2026-08-21",
    excerpt: "Tony Takitani follows a lonely illustrator and his shopping obsessed wife. I found it startlingly personally relevant.",
    content: [  
`Tony Takitani is a 2004 film directed by Jun Ichikawa. It is an adaptation of Hiro Murakami’s short story of the same name, which he was inspired to write after seeing a tee shirt in Hawaii bearing the titular character’s name. The film opens with a brief history of Tony’s father, Shozaburo, a jazz musician who was imprisoned in China during the Second World War. Tony’s mother dies in childbirth. The film then follows Tony, who, partially as a result of his American name, becomes increasingly unable to connect with the world around him as he ages. His solitude is broken by a woman, Eiko, with whom Tony falls in love. Eiko is, however, obsessed with purchasing clothes, and cannot stop. Tony attempts to help her with her behavior, but she is killed in a car accident. Tony returns to his loneliness, despite a chance at connection with another woman, who he strangely hires to wear his wife’s clothes.`,
`The film exists in a sort of nondescript unreality. In this way it feels extremely true to its original author. The first portion of the film even uses a panning wipe transition that visually reminds one of a book. The entire movie is gray; all of its colors are restrained and desaturated. It isn’t pleasant to look at, but it informs us how Tony views and interacts with the world. This film is, purposefully, unpleasant. Tony’s refusal to reach out to others visually and emotionally suffocates us. His inability to change is frightening. His loneliness is haunting. Eiko’s endless obsession with buying clothes is disturbing. These feelings are not enjoyable. However, while Tony Takitani is at times too slow for its own good, I ultimately found it to be an affective film.`,
`The world has shaped Tony in such a way that he defaults to loneliness. Eiko is also damaged, and buys clothes to try to fix whatever eats at her insides. When Eiko is dead, Tony’s home still holds all her clothes, her material purchases remaining beyond her life. We do not know precisely why she was driven to her compulsive behavior, but we know that is was a result of some emotional lack or damage, and the purchasing was an attempt to fill the hole.',
`After I graduated college, I suddenly became obsessed with buying sneakers. I had been really into sneakers in middle school, when they were a social status symbol, but I relaxed my habits in high school and eliminated them for the duration of college. I would get maybe a pair of shoes a year in college. The shoes I got were cheap and grungy, like converse or Adidas Gazelles, and I took pride in my ability to wear them out. One pair had to finally be discarded after running through the rain with the sole detached from the rest of the shoe, and they were olfactorily unsalvageable. When I graduated, and was trying to make sense of my finances, I casually wrote down that Converse cost $60 and were likely to be the only footwear I needed to purchase yearly, along with maybe a pair of Adidas. But as my dissatisfaction with adult life increased, so did my dissatisfaction with my list. My Converse and Adidas suddenly felt too narrow and unsupportive. I was always willing to overlook these things in the past, but now they suddenly seemed like issues that needed to be addressed. Additionally, I no longer felt like they represented me. Wasn’t I getting to old for Converse? They felt played out. They’d had their day, just like Jordans had in middle school. It was time for something new. I was changing, so shouldn’t what I wear change too?`,
`I became obsessed with narrowing down what that new shoe should be. I researched fit and appearance until finally deciding that I had found my holy grail. I ordered them, they came, and I was supremely satisfied…for a week or two. Then the process started all over again. The shoes I would order were always just a little…off somehow. New Balance, Merrell, Adidas, Vans. I found some lack in all of them. They could fit my foot better, be more or less cushioned, look better, or just look different. There was a hole growing inside of me and I thought that if I could just figure this out, if I could just identify a shoe that I could wear everyday in every condition, then I could finally focus on other more important things in life. I believed that achieving this goal would improve my stagnating life. I thought it would make people like me more, or attract friends to replace the ones I’d lost. If I just presented myself in the right way, then more like-minded cool people would talk to and accept me. I would suddenly become socially proficient and palatable. It was a band-aid solution to a growing wound. Buying a pair of sneakers costs money, but it’s also less frightening than talking to a stranger, or forcing yourself to go out when you don’t want to. Shopping is a simple dopamine spike, and it’s encouraged by everything around us constantly. It’s not just limited to sneakers. When we are reduced to commodities by the systems we live in, it’s only natural to believe that our lives can be improved through a purchase. I needed to visually market myself to others. I needed to make myself a product others wanted to purchase. However, all that happened was that I spent money. I didn’t become better at talking to people. My life, before and after buying shoes, was more or less the same. Commodities offer us an easy way to show taste and personality visually, without any of that tricky messy human interaction business. Unfortunately, they’re not a true substitute. The satisfaction I had with my Converse in college came from a sense of satisfaction that I had with my life generally. I loved my Converse because I loved my life, not the other way around.`,
`Eiko’s shopping wasn’t filling the hole inside of her. That’s why she had to keep doing it. Purchasing sprees and impulsive shopping can’t fix what people broke. Only other people can do that. This isn’t to say that a cool outfit that represents you can’t improve your chances of talking with someone similar to yourself, but you can’t over stress its importance. There is no easy way around pushing through social inadequacies. It’s always hard, and yet always worth doing. Pick that phone back up Tony Takitani.`,
`These days, I’m trying to not buy any more shoes. I’m moving back towards a once a year schedule. The shoes I appreciate the most are the shoes that I wear, the shoes that take me the places I want to be, the shoes that get dirty and don’t mind, the shoes that walk with me to my friends’ homes. Those shoes aren’t in a store, or on a Pinterest board. They’re where they’ve always been. On my feet.`
],
    image: "assets/posts/converse.png",
    imagePosition: "right",
  },
  
  {
    id: "Rhinoceros-review",
    title: "Rhinoceros at the American Repertory Theater Review",
    date: "2026-08-19",
    excerpt: "Diane Paulus brings Ionesco’s metaphorical warning to life for her final show at the Loeb Drama Center.",
    content: [  
`Rhinoceroses. Giant beasts of the African savannah and Asian jungle. They are hulking, heavy, horned, and…green? In the 30s and 40s, Romanian playwright Eugene Ionesco watched as those around him, highly educated or otherwise, fell into the embrace of fascist ideology. The Iron Guard was a Romanian fascist paramilitary insurgency which swept through the country in the first half of the twentieth century. It recruited Romanians who believed in its nationalist crusade, who were struggling with the stagnant Romanian economy, or who thought democracy had become too corrupt. They conducted political terrorism, ethnic pogroms, and ideological suppression. They worked with the military to ally Romania with Nazi Germany. They wore green uniforms.`,
`In Rhinoceros, Ionesco illustrates the way movements and ideas can rapidly change people into something they were not. The play follows Bérenger, an alcoholic newspaper employee played by John Turturro, who has to watch as those around him turn into rhinoceroses one by one. The play utilizes this modernist metaphor to create an absurd, amusing, and cautionary narrative which warns its audience of the dangers of ideological movements or other conformities. Turturro is wonderful as Bérenger. He successfully makes the lazy, seemingly unprincipled clerk sympathetic and emotional, while not being afraid to remind the audience of the absurdity of the play’s premise with humor. Bérenger’s turn from slacker to world savior is portrayed expertly through the frenzy and horror we see Turturro build in the character.`,
`Paul Giammati, who plays Bérenger’s friend Jean, is also great as both an upper class ideologue and an enraged rhinoceros. His transformation is an excellent exercise in physicality and confirms the directors choice to steer away from props when possible and let the acting and form speak for itself. Tatiana Maslany is also effective as Daisy, the object of Bérenger’s affection. She brings a sense of humanity and raw emotion to a play that might otherwise be overwrought with ideas and metaphor. She anchors us in the story just as Daisy anchors Bérenger in humanity.`,
`Rhinoceros is an entertaining, and at times moving, piece of theater. Viewers can relate to Bérenger, as they see those around them be caught up by modern conformist movements like Trumpism, AI reliance, or…just about any fad. However, while this metaphorical timelessness is useful, the play might have benefited from a more defined morality to ensure its effectiveness across generations.`,
`Reducing something as devastatingly important as the rise of fascism in the first half of the 20th century to an absurdist metaphor about people turning into animals should not be done haphazardly. While I would not classify Rhinoceros as careless, it does suffer from an underdeveloped antidote. That Bérenger is free of ideology both lends itself to the everyman nature of his character and hinders the play’s urgency.`,
`Ionesco himself wasn’t sure of the heart of his own moral convictions. He would speak on how Rhinoceros was as much about the Iron Guard as it was about his educated peers in France becoming sympathetic towards communism, and how at the time he no longer knew how to define himself politically. These two viewpoints are not inherently contradictory, but it is Ionesco’s lack of political definition for himself that speaks to this insufficiency. Bérenger knows what he is not, a rhinoceros, but does he know what he is?`,
`Bérenger is explicitly void of principle until he becomes a champion of a vaguely defined “humanism” towards the end of the play. What, precisely, is stopping him from turning into a rhinoceros? He himself says how he doesn’t even fully understand why he hasn’t grown a horn. What are the beliefs that keep him human? Is it love? His relationship with Daisy crashes and burns, and Daisy herself, who was once extremely staunch in her quest to remaining human, suddenly turns and leaves Bérenger for vaguely defined reasons. And yet, at the finale, Bérenger continues to proclaim that he will continue to fight for humanity. Why this character believes in humanity is not explicitly clear, and neither are the principles upon which he will continue to fight. Perhaps it could be something as simple as his ability to be late for work and waste his days away. Is that enough?`,
`Even if Ionesco does believe in something, it is ill-defined in Rhinoceros. Bérenger claims that he has his anchor in a vague “morality”. We are left to determine for ourselves how Ionesco might define these terms. The best answer found in the play is day drinking and swooning over a coworker. While these relatable human sentiments might have been enough for rhinoceroses, I struggle to find satisfaction in their vagueness, especially if we are going to employ such sentiments to fight the rising tide of fascism, or if the play isn’t going to just bolster the worldview of someone who sees any sort of change as rhino-esque.`,
`However, art does not always need to have all the answers or hold our hand to the finish line. While it is not without its insufficiencies, Rhinoceros is still an interesting and entertaining play, and a humorous and moving display of how the world can change around ordinary people so fast and so suddenly. The director, the cast, and the rest of the American Repertory Theater have done an excellent job in their production. They strike a great balance between the absurdist metaphor and the human characters suffering at the center of it. I would recommend seeing it.`
],
    image: "assets/posts/rhino.jpg",
    imagePosition: "right",
  },
  
  {
    id: "mt-auburn-video-1",
    title: "Mount Auburn Cemetery Video",
    date: "2026-08-10",
    excerpt: "A video of Mount Auburn Cemetery in Cambridge, MA.",
    content: [
      "A video of Mount Auburn Cemetery in Cambridge, MA."
    ],
    image: null,
    imagePosition: "right",
    embed: "https://www.youtube.com/embed/aC5RypAIZVo?si=d45VTlOtRoeOQtup"
},
  
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
