# Gatsby Resume

https://resume.dylanjustice.com/

This is where I maintain my resume using a simple GatsbyJS static site generator and a Markdown file. I've run into so many formatting problems and style inconsistencies while trying to maintain a LaTeX CV, and Word is just the worst at anything beyond headers and paragraphs. Have you ever tried adding an image to a word doc? Not fun. I figured I could whip up a little gatsby static site that allowed me to flex some frontend muscles and finally ease the pain of keeping my resume updated, and I was right!

The application reads data from `index.md` and generates a pre-formatted resume. This document is optimized for printing as well as web view.

Technologies

-   Node 18.7.0
-   GatsbyJS 5
-   React 18
-   Typescript
-   Typescript linting
-   SCSS

To run locally:

```
npm run start
# OR
gatsby develop
```

The site is hosted with Netlify for free. Can't beat that.
