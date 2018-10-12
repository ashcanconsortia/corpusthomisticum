# Corpus Thomisticum Project

## Video Link:

## In This Repo:

* Design Documents folder has the sketches/layouts that I started with (not actual site images) so isn't needed for viewing the HTML pages.
* images folder has the images that are referenced in the HTML files.
* After downloading the repo and unzipping into a folder, just open index.html to view the mockup. It's not a fully functioning website with backend etc. more of a front end only mockup.

## Description:
My approach to this challenge ended up focussing mostly on making the texts easier to navigate and read. I don't, unfortunately, have any really fancy visualizations to show, but I think I did manage to make something that could be useful and hopefully integrate the context and references in with the text to help with study.

I spent a lot of time figuring out how the website could make the texts easier to read and study, both by layout and by adding links to context along with the text. The design I ended up with has 2 main parts of the interface in the demo: the Works Index and the Reader. The 3rd part, the back end where the data/texts actually live, is something that I have given a lot of consideration to, but haven't implemented in this sketch of a website.

### Works Index:
The works index is the page that lists all of the works in the collection, and can be reorganized by using the dropdown list on the top left of the layout. There are 3 views in this demo, but once the texts were put into a back end database, adding more would certainly be possible, and probably needed, since I'm sure someone with a background in theology can come up with structures that would be more useful to that discipline. The 3 layouts currently in the demo are:
 * __Topic/Section View__ - This view is a simple list divided into the traditional "sections" for sorting the works of St. Thomas Aquinas. Also included are links to the works on which he was commenting. (Possibly also commentary on his works by later writers could be added in this view).
 * __Idea Map view__ - Something like a dynamic version of the synoptic maps on the old site. Would let a user type in a word and come up with a map of related concepts and works (unfortunately I wasn't able to get a working version with search for the demo, since it would require the backend to be working).
 * __Chronological__ - This view is a year by year list of which works were started, in progress and finished in each year, with contemporary historical events linked for context. (It should be possible to change it to only marking the start and finish of each work, perhaps changing into a branching timeline to better show which works are ongoing, and that would probably be clearer. Also I realize the dates on some of the works are not exact and some are unknown!)

### Reader:
The reader part of the demo is probably the part that people would spend most time on if they are reading the texts, so I tried to add some things to make study easier.
* __Language choice by drop down__ - This is not functional yet in the demo but the boxes for changing the language are there. Once the texts are in a database, it would allow people to switch between translations easilly.
* __Split View__ - Using the arrow at the top left of the text area, you can switch to split view, which would allow parallel viewing of two different translations, or perhaps even commentary alongside the text.
* __Text size adjust__ - Not functional yet, but there is a dropdown next to the language choice for adjusting the text size for easier reading.

#### Back End Possibilities:
I had started trying to understand how the back end of a site like this would work before the Q&A video made it clear that it was more important to have the visual ideas than to have a working back end. Some of the things I learned during that experimentation could maybe help with the project:
* __Django__ is a web framework that uses Python and HTML templates, and I think it might be a good choice for a site like this.
* __CLTK__ - The Classical Language Tool Kit is a Python library that is similar to the NLTK library that we studied in the Summer of Code but it is built specifically for classical languages, and would allow us to do things like lemmatization and word frequency in Latin, and do more Big Data type things with the text.

## Challenges:
First of all, it's a huge project! The more I worked on making the mockup, the more I realized the sheer amount of both actual text and related context for the texts that would be involved.

Secondly, I feel like I should say: My degree is in history, not theology or even computer science! So that really informed my approach to this challenge, and possibly led me down a few dead ends (it's why I started with the chronological view for example, which may or may not be useful to others). I'm sure there are better ways to organize the data to be useful for theology study, but the good thing is, with the texts in a back end database, it would be fairly easy to add different ways to view the data on the front end.

As I mentioned above, I'm not a computer scientist by trade, just a mostly self-taught coder who is really excited about digital humanities. The main challenges I would have working on this project (if I were to do it all myself) would be things like figuring out ahead of time what the best structure would be for a database, for example. I can, from what I know already, imagine several ways to organize the data, but I don't have the knowledge to figure out which one would be the best. There are probably several other technical challenges along these lines that I haven't thought of yet.

## Future Ideas:
I think this project has many possibilities for the future, both for within the project itself and expanding into the larger world of digital humanities in general.
* Within the project, it would be possible to implement auto linking to terms in the Lexicon of Thomas Aquinas ( https://babel.hathitrust.org/cgi/pt?id=mdp.39015011488064;view=1up;seq=9 ) especially if that text was turned into a database as part of the project.
* Also, I think it would be a good idea to add links to generate citations and permanent reference links for each passage/paragraph/however the works get divided up into their smallest pieces.
* Expanding the project outward could also be a possibility; if the framework built was generic enough to allow different texts to be digitized into it and linked to each other for context, it could start to make a kind of "digital humanities internet" between historical texts. Like an world wide web for texts that existed before the internet did. Digitizing things as flat text is good, because it allows more people to access them, but marking them up and putting them in databases allows both easier navigation between source and context as well as allowing more "Big Data" type operations to be performed on the texts.
