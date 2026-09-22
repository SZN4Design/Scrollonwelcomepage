[README.txt](https://github.com/user-attachments/files/32532355/README.txt)
SZN4 SCROLL HERO — QUICK SETUP

FILES
- index.html
- styles.css
- script.js

WHAT IT DOES
Each line grows, sharpens, and becomes fully opaque as it reaches the center
of the viewport, then recedes as it moves away.

HOSTING
1. Upload all 3 files to a GitHub repository, Vercel project, Netlify site,
   or any static web host.
2. Make sure index.html, styles.css, and script.js stay in the same folder.
3. Open the hosted URL and test it on desktop + mobile.

ADOBE PORTFOLIO
Use Portfolio's Embed module and iframe the hosted page.

Example:
<iframe
  src="YOUR-HOSTED-URL-HERE"
  width="100%"
  height="900"
  style="border:0; width:100%;"
  loading="eager"
  title="SZN4 Design intro">
</iframe>

IMPORTANT
Adobe Portfolio does not give custom JavaScript direct access to the parent page.
Because of that, this animation scrolls INSIDE the embed. For the cleanest look:
- make the embed tall enough to feel like the main welcome experience
- hide extra Portfolio content around it
- test wheel/touch scrolling before publishing

CUSTOMIZE
- Main background: styles.css -> --brown
- Cream text: styles.css -> --cream
- Magnification strength: index.html -> data-max-scale values
- Spacing between lines: styles.css -> .zoom-line min-height
- Text: edit the contents of each .line-inner in index.html

CURRENT TEXT ORDER
1. WELCOME TO MY CORNER OF THE INTERNET
2. HI, I'M SABRINA
3. I design digital experiences around how people actually behave.
4. UX/UI · ECOMMERCE · CRO · PRODUCT DESIGN
5. ○ ○ ○ ○
6. CURRENTLY IN: SZN4
