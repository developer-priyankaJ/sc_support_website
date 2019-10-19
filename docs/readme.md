
Three Main Tabs on category Page and their corresponding list of links page -
* Getting Started  - /docs/getting-started-links.md
* Using Scopehub  - /docs/using-sh-links.md
* profile - /docs/profile-links.md

1. We need to specify all links in specific page. refer getting-started-links.md for format.
2. No Need to specify Title, Id etc as these md files will get embedded in categories page.
3. Section Headings should be similar to list of links in dropdown of that tab.
4. If particular image needs to added before heading as icon, a class needs to be added in /website/static/index.css.
5. Link href should be like this --- "/en/articles?id=getting-started&key=intro_to_sh&file=understand_your_actions_in_sh" where
   - id =  getting-started / using-sh / Profile
   - key = subCategory e.g intro_to_sh ( exact words as subcategory title in small letters separated by _ and "scopehub" converted to "sh" )
   - file = article name ( exact words as subcategory title in small letters separated by _ and "scopehub" converted to "sh" )
6. article md file name should be same as above file name followed by extension .md. Refer understand_your_actions_in_sh.md for article content and file name.
