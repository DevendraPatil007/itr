DAY 2
DATE 06/03/2026
TOPIC : CSS styleing

In css we can customize our website in many ways
example :- changing color ,font size dimenstion and many more

In this code :

!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Different Ways To Apply CSS .</title>
    Style Tag Attribute for Styling. i.e Internal 
    <style> 
        h1{
            color: goldenrod;
        }
    </style>

    <!--External File for Styling -->
    <!--Link tag to link the stylesheet css file with index.html file -->
    <!-- href-->
    <link rel ="stylesheet" href="style.css">
    <script src="index.js"></script>

</head>
<body>
    <!--Inline Attribute of Styling. -->
    <h1 style="color: purple;">Heading</h1> 
    <h1>Heading</h1>

    <!-- Priorities Of CSS :-->
    <!--
        Priorites Arranged From Most to Least below :
        1. Inline CSS
        2. Internal/Embedded (with Style tag) CSS
        3. External CSS
    -->

</body>
</html>

we have change the color for heading in three ways

1. using Internal CSS
   code snippet is :-

<style> 
        h1{
            color: goldenrod;
        }
    </style>

    output will be
    first heading will be purple and secound will be goldenrod

2. External CSS
   for using external css we have to do link it to the reffer file
   tag for reffernce is <link rel = "stylesheet" href ="style.css">
   in another file our tag is present

   snippet of file is
   h1
   {
   color: blue;
   }

   output will be first heading in purple and secound in heading blue 3. Inline CSS
   Inline css is the type of css where the tag and styleing done in same line

   ex
     <!--Inline Attribute of Styling. -->
    <h1 style="color: purple;">Heading</h1> 
    <h1>Heading</h1>

in css all the tag should be use properly with closeing it

---

2.  day 2

topic :- Font

we can change the font size shape type by using css

we use google font for using more types of font

all devices have one default font in m y case it is
Serifs Fonts

in the given below paragraph use in <p><\p>
tag we can change its font
using refference tag

when we take any font from google font
we get a import link or a copy link which can be paste in the body tag
example:

1. using pasteable link
    <link rel = "stylesheet" href="style.css">
   <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
   <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
   <!-- <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"> -->

2. import

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&family=Roboto:wght@400;500;700;900&display=swap');

body is same for both

body{
/_ font-family: Arial, Helvetica, sans-serif; _/
/_ font-family: 'Poppins', sans-serif; _/
font-family: 'Roboto', sans-serif;
font-weight: 500;
}

code used :-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>

    </style>
    <link rel = "stylesheet" href="style.css">
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"> -->

    <title>CSS fonts</title>

</head>
<body>
    <h1>Main Heading.</h1>
    <!-- Your Default Font can be Different Based on your OS and Browser Being Used . -->
    <!--Time New Roman For Me -->

    <!-- Serifs Fonts Default Thick and thin Strokes -->
    <!-- San Serifs Strokes have even Width -->

    <!--To Import Fonts From Online -->
        <!-- https://fonts.google.com/ -->

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat rem molestias laborum quidem adipisci rerum quibusdam dolorum perferendis voluptates officiis nemo ex cum. Officia mollitia necessitatibus quia possimus. Excepturi inventore expedita similique ullam deleniti numquam necessitatibus recusandae! Doloremque voluptatem asperiores sequi provident mollitia placeat unde ab pariatur, repudiandae fugiat!</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non aliquam, dolore tenetur fuga nesciunt, voluptatibus nisi sunt molestiae voluptates dolor cupiditate consequatur animi debitis obcaecati veritatis molestias amet? Quae labore asperiores rem cupiditate, velit repellat culpa quos minima minus numquam veniam vitae magni odit magnam, dolores ipsa a error.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid impedit quae fugiat quibusdam tenetur minus obcaecati inventore. Exercitationem accusamus sed tenetur possimus! Quas deserunt eius iusto voluptatibus quod ipsum exercitationem?</p>

</body>
</html>
__________________________________________________________________________________________________________________________________________

3.

Day 2

topic : color
we can color the font and background

there are three ways we can give color

1. using direct color
   ex :- color : color_Name
   color : red
2. using hex color
   ex color: #hexCode
   color : #fffffff
3. using rgb (255,0,100)

for Background
background-color: aqua

code used:-

h1{
/_ color:red; _/
color:aqua;
/_ color:rgb(255,0,0); _/
/_ color: rgb(0,255,0); _/
/_ color: rgb(0,0,255); _/
color :rgb(255,0,100);
/_ Hex Code(color Picker) _/
color : #ffa53d;
/_0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f _/
color : #ffffff;
color : #000000;
color : #343434;
color : #676767;
color : #cdcdcd;
color : #ff00ff;

     background-color: aqua;

}

---

4.and 5.
Day 2

topic : selector

there two type of selector

1. id selector

code :-

    <div id="main-heading">
       <h1> MAIN HEADING </h1>
    </div>

id can be identifed by #
example:-

#main-heading{
background-color: #cdcdcd;
}

2.  class selector

        code :-

        div class="main-section">
            <h2>SUB HEADING </h2>

        class sepetrator can be identifed by .
        example :-

        .main-section{
        background-color: #efefef;

    }

---

6.

Day 2

topic : more in css

in this part we have seprated all content and change its color for differntiation
for the navigation

<li><a href="">Home</a></li>
<li><a href="">About</a></li>
<li><a href="">Contact</a></li>

for secound main heading

 <h2> Main Content Of Our Webpage.</h2>

 <h2> Article heading </h2>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, totam eaque! Voluptatibus minima inventore laborum, molestiae suscipit nulla amet atque sed debitis illum nisi quibusdam animi! Vero cumque explicabo tempora. Esse explicabo consequuntur eligendi amet ratione est blanditiis dignissimos repellat. Doloribus cum incidunt eum laboriosam harum odit vitae provident esse.</p>

code is :-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title> More CSS Selectors</title>

</head>
<body>

    <header>

        <p>short paragraph inside header</p>
        <h1 class="main-logo">Main Logo</h1>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <!-- Alt + Shift + Down (copy previous line down) -->
        <p>short paragraph inside header</p>

    </header>

    <main>
        <h2> Main Content Of Our Webpage.</h2>

        <section class="my-articles">

            <h2>Articles Section</h2>
            <article>
                <h2> Article heading </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, totam eaque! Voluptatibus minima inventore laborum, molestiae suscipit nulla amet atque sed debitis illum nisi quibusdam animi! Vero cumque explicabo tempora. Esse explicabo consequuntur eligendi amet ratione est blanditiis dignissimos repellat. Doloribus cum incidunt eum laboriosam harum odit vitae provident esse.</p>
            </article>


            <article>
                <h2> Article heading </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, totam eaque! Voluptatibus minima inventore laborum, molestiae suscipit nulla amet atque sed debitis illum nisi quibusdam animi! Vero cumque explicabo tempora. Esse explicabo consequuntur eligendi amet ratione est blanditiis dignissimos repellat. Doloribus cum incidunt eum laboriosam harum odit vitae provident esse.</p>
            </article>
        </section>
    </main>

</body>
</html>

---

7.

Day 2

topic : attributes

creates a bulleted list item containing a clickable link that directs users

li> <a href ="https://google.co.in">Google In</a><br> </li>

<li> <a href ="https://google.co.uk">Google Uk</a><br> </li>
<li> <a href ="https://flipkart.com">Flipkart </a><br> </li>
<li> <a href ="facebook.com">facebook</a><br> </li>
</ul>

    all after input till = are attributes used in css

    <label for="fname">First Name : </label><br>
        <input type="text" id="fname"> <br>
        <label for="lname">Last Name : </label><br>
        <input type="text" id="lname"> <br>
        <label for="pass">password : </label><br>
        <input type="password" id="pass"> <br> <br>
        <input type = "button" value="submit">

    we can also use as authentaion

    ex if the google link have a password "password"

then it will convert to purple color

code for this type of problem is in css :-

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&family=Roboto:wght@400;500;700;900&display=swap');

input[type = "password"]{
color : purple;
}
input[type = "text"]{
color : red;
background-color : aqua;
}

/_
a[href ="https://google.co.in"]{
color: red;
}
_/

/_
Universal Selector
used for Particular word
_/
a[href *="google"]{
color: red;
}

/_caret Symbol_/
a[href ^="https"]{
color: green;
}

a[href $=".com"]{
color: red;
}

input[type ^="t"]{
color: green;
}
input[password ^="t"]{
color: rebeccapurple;
}

---

8.  Day 2
    topic : chrome developer tools

<!--input tag-->

        <li>    <a href ="https://google.co.in">Google In</a><br> </li>
        <li>    <a href ="https://google.co.uk">Google Uk</a><br>  </li>
        <li>    <a href ="https://flipkart.com">Flipkart </a><br> </li>
        <li>    <a href ="facebook.com">facebook</a><br>  </li>

<label for="fname">First Name : </label><br>
<input type="text" id="fname"> <br>
<label for="lname">Last Name : </label><br>
<input type="text" id="lname"> <br>
<label for="pass">password : </label><br>
<input type="password" id="pass"> <br> <br>
<input type = "button" value="submit">

</form>

from the above code we can authencate the login page example
if the password is correct then then color changes

code used :- <!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href="style.css">
    <title>Attribute Selector</title>
</head>
<body>
    <!-- shift + alt + downarrow -->
    <h2> Links </h2>
    <ul>       
        <!-- a -anchor tag-->
        <!--input tag-->
        <li>    <a href ="https://google.co.in">Google In</a><br> </li>
        <li>    <a href ="https://google.co.uk">Google Uk</a><br>  </li>
        <li>    <a href ="https://flipkart.com">Flipkart </a><br> </li>
        <li>    <a href ="facebook.com">facebook</a><br>  </li>
    </ul>
    
    <h2>Form</h2>
    <form>
        <label for="fname">First Name : </label><br>
        <input type="text" id="fname"> <br>
        <label for="lname">Last Name : </label><br>
        <input type="text" id="lname"> <br>
        <label for="pass">password : </label><br>
        <input type="password" id="pass"> <br> <br>
        <input type = "button" value="submit">
    </form>
</body>
</html>

---

9.

day 2

topic :- speicficity

we use favorate tag to highlight the specific line of the tag

<li>Cs Go</li>
            <li>Sea of Thieves</li>
            <li class="favourite">Valorant</li>
            <li>Resident Evil</li>
            <li>OverWatch 2</l

code used :-

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specificity</title>
    <link rel = "stylesheet" href="style.css">

</head>
<body>
    <div id="container">
        <ul class="my-games">
            <li>Cs Go</li>
            <li>Sea of Thieves</li>
            <li class="favourite">Valorant</li>
            <li>Resident Evil</li>
            <li>OverWatch 2</li>
        </ul>
    </div>
</body>
</html>
____________________________________________________________________________________________________________________________________

day 2

topic css border

we learn about image inseration and border mangement like padding change width and height text alignment

for changing image :-

    <img src = "wPh0S.jpg" alt ="">

for text alignment :-

    <h2 style="text-align: center;"> Main heading</h2>

for border

border-bottom: 4px solid red;
border-top: 4px solid red;
border-radius:10px ;

p{
border: 4px solid green;
}
span{
border: 2px solid black;
}
code used :-

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "style.css">
    <title>CSS Border</title>
</head>
<body>
    <!--div ####-->
    <div class = "header">
        <ul>
            <li class="home">home</li>
            <li>about</li>
        </ul>
    </div>
  
    <!--heading ####-->
    <h2 style="text-align: center;"> Main heading</h2>

    <!--image ####-->
    <img src = "wPh0S.jpg" alt ="">

    <!--paragraph ####-->
    <p> this <span>is</span> paragraph</p>

</body>
</html>
____________________________________________________________________________________________________________________________________
11. 
day 2

topic :- box model

In this chapter we learn about padding  margin and border 

its box diagram is 


+--------------------------------------------------+
|                    MARGIN                        |
|  +--------------------------------------------+  |
|  |                   BORDER                   |  |
|  |  +--------------------------------------+  |  |
|  |  |               PADDING                |  |  |
|  |  |  +-------------------------------+   |  |  |
|  |  |  |           CONTENT             |   |  |  |
|  |  |  |       981.6 × 195.2 px        |   |  |  |
|  |  |  +-------------------------------+   |  |  |
|  |  +--------------------------------------+  |  |
|  +--------------------------------------------+  |
+--------------------------------------------------+

flow chart for it is :-

CONTENT
   ↓
PADDING
   ↓
BORDER
   ↓
MARGIN 

________________________________________________________________________________________________________________________________________________

12.

day 2

topic :- differnt way to use box model 

What is the Box Model?

Every HTML element is treated as a rectangular box consisting of:

CONTENT
   ↓
PADDING
   ↓
BORDER
   ↓
MARGIN
1. Using Padding

Padding creates space between the content and the border.

Example
div{
    padding: 20px;
}
Output
Content moves away from the border.
More space is created inside the box.
2. Using Margin

Margin creates space outside the border.

Example
div{
    margin: 20px;
}
Output
Space is added between elements.
Elements do not touch each other.
3. Using Border

Border creates an outline around the element.

Example
div{
    border: 2px solid black;
}
Output
A black border appears around the element.
4. Using Width and Height

Width and height control the size of the content area.

Example
div{
    width: 300px;
    height: 150px;
}
Output
Box width becomes 300px.
Box height becomes 150px.
5. Individual Padding Values
div{
    padding-top: 20px;
    padding-right: 15px;
    padding-bottom: 20px;
    padding-left: 15px;
}
6. Individual Margin Values
div{
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
}
7. Shorthand Property
Padding
padding: 20px;

or

padding: 10px 20px;

or

padding: 10px 20px 15px 25px;
Margin
margin: 20px;

or

margin: 10px 20px;

or

margin: 10px 20px 15px 25px;
8. Auto Margin for Center Alignment
.container{
    width: 800px;
    margin: auto;
}
Output
Element automatically aligns to the center of the page.
Example Program
HTML
<!DOCTYPE html>
<html>
<head>
    <title>Box Model Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="box">
    This is a Box Model Example
</div>

</body>
</html>
CSS
.box{
    width: 300px;
    padding: 20px;
    border: 5px solid blue;
    margin: 30px;
    background-color: lightgray;
}
Output Structure
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  | +-----------------+ |  |
|  | |     Padding     | |  |
|  | | +-------------+ | |  |
|  | | |  Content    | | |  |
|  | | +-------------+ | |  |
|  | +-----------------+ |  |
|  +---------------------+  |
+---------------------------+
Key Points

✅ Padding = Space inside the border
✅ Margin = Space outside the border
✅ Border = Outline around the element
✅ Width & Height = Control element size
✅ Auto Margin = Center alignment
✅ Shorthand properties reduce code length

Quick Formula
Total Width =
Width + Left Padding + Right Padding
+ Left Border + Right Border
+ Left Margin + Right Margin
Total Height =
Height + Top Padding + Bottom Padding
+ Top Border + Bottom Border
+ Top Margin + Bottom Margin
________________________________________________________________________________________________________________________________________________

13. DAY 2
Topic margin collapsing 

13. DAY 2
DATE 06/04/2026
TOPIC :- Margin Collapsing

Margin Collapsing is a CSS behavior where the margins of two vertically
adjacent block elements do not add up — instead, only the larger margin is used.

What is Margin Collapsing?

When two block elements are stacked one above the other:
- The bottom margin of the first element and the top margin of the second element
  do NOT combine (add together).
- Instead, only the GREATER of the two margins is applied between them.

Example from this code:

.box1 has margin-bottom: 40px
.box2 has margin-top:    50px

Expected (wrong assumption): 40 + 50 = 90px gap between boxes
Actual result:               50px gap (only the greater margin is used)

This is called Margin Collapsing.

Diagram:-

+------------------+
|      Box 1       |   margin-bottom: 40px
+------------------+
         ↕  50px (collapsed — greater of 40 and 50)
+------------------+
|      Box 2       |   margin-top: 50px
+------------------+

Code used :-

HTML

<div class="box1">
    <h2>This is Box 1</h2>
    <p>Lorem ipsum...</p>
</div>
<div class="box2">
    <h2>This is Box 2</h2>
    <p>Lorem ipsum...</p>
</div>

CSS

.box1, .box2 {
    border: 2px solid #444;
    padding: 10px;
}
.box1 {
    margin-bottom: 40px;
}
.box2 {
    margin-top: 50px;
}

Key Points

✅ Margin Collapsing only happens vertically (top and bottom margins)
✅ Horizontal margins (left and right) NEVER collapse
✅ The greater margin wins — smaller one is ignored
✅ This behavior is specific to block-level elements

Quick Rule
If box1 margin-bottom = 40px
and box2 margin-top    = 50px
Then gap between them  = 50px  (not 90px)
________________________________________________________________________________________________________________________________________________

14. DAY 2
DATE 06/04/2026
TOPIC :- Inline vs Block Level Elements

In CSS, every HTML element is either a Block Level or Inline element by default.
We can also change this behavior using the display property.

---

Types of Elements

1. Block Level Elements
   - Take up the FULL width of the page
   - Always start on a NEW line
   - Width, Height, Margin (all sides), Padding (all sides) work properly
   examples :- h1-h6, p, div, ul, li, form, article, aside, main, nav

2. Inline Elements
   - Take only as much width as their content needs
   - Do NOT start on a new line
   - Width and Height have NO effect
   - Margin works only LEFT and RIGHT (top/bottom shows visually but has no real effect)
   - Padding at top/bottom can mess up layout
   examples :- span, img, a, textarea

3. Inline-Block Elements
   - Behave like inline (sit side by side)
   - But respect Width, Height, Margin and Padding like block elements
   - Best of both worlds

---

Observations from this code

Block element (h1, h2) behavior:-
   border: 2px solid black;        <- takes full width
   width: 500px;                   <- can be changed
   height: 100px;                  <- can be changed
   margin: 100px;                  <- affects all sides
   padding: 50px;                  <- works perfectly on all sides

Inline element (a tag) behavior:-
   border: 2px solid black;        <- only wraps content width
   width: 100px;                   <- NO effect
   height: 100px;                  <- NO effect
   margin: 100px;                  <- only left/right work, top/bottom ignored
   padding: 0px 50px;              <- only left/right recommended

---

Changing Display Property

Block element converted to Inline:-
   h1, h2 {
       display: inline-flex;       <- headings now sit side by side
   }

Inline element converted to Block:-
   a {
       display: block;             <- links now stack vertically

________________________________________________________________________________________________________________________________________________

15. DAY 2
DATE 06/04/2026
TOPIC :- Image Element in HTML & CSS

In this chapter we learn how to insert images in HTML
and style them using CSS.

---

What is the img tag?

The <img> tag is used to embed images in a webpage.
It is a SELF-CLOSING tag (no closing tag needed).
img is an INLINE element by default.

Syntax:-

<img src="filename.jpg" alt="description">

Attributes:-

src   -> path/name of the image file
alt   -> alternate text shown if image fails to load
        also used by screen readers for accessibility

---

Images used in this code

Image 1 : backlit.webp   -> hot air balloon over water at sunset
Image 2 : image3.jpg     -> wooden bridge path through a sunlit forest
Image 3 : img_forest.jpg -> metal bridge leading into a dense dark forest

Supported image formats:-
.jpg / .jpeg    <- most common, compressed
.png            <- supports transparency
.webp           <- modern format, smaller file size
.gif            <- animated images
.svg            <- vector images

---

Image as an Inline Element

img is an inline element by default.
Special behavior of img compared to other inline elements (like a, span):-

   - Width and Height CAN be changed         <- unlike normal inline elements
   - Padding works on ALL sides              <- unlike normal inline elements
   - Margin works on ALL sides               <- unlike normal inline elements

This makes img a special inline element that behaves more like inline-block.

---

CSS applied to images in this code

img {
    width: 300px;       <- fixed width for all images
    height: 200px;      <- fixed height for all images
    border: 4px solid black;
    padding: 10px;      <- works on all sides (special for inline)
    margin: 10px;       <- works on all sides (special for inline)
}

Output:-
All three images are displayed side by side (inline behavior)
Each image has a black border with spacing around it.

---

Code used :-

HTML

<img src="backlit.webp" alt="Image 1">
<img src="image3.jpg" alt="Image 2">
<img src="img_forest.jpg" alt="Image 3">

CSS

img {
    width: 300px;
    height: 200px;
    border: 4px solid black;
    padding: 10px;
    margin: 10px;
}

---

Key Points

✅ img tag is self-closing — no </img> needed
✅ Always use alt attribute for accessibility
✅ img is an inline element but width, height, padding, margin all work
✅ Use width and height in CSS to control image size
✅ Supported formats :- jpg, png, webp, gif, svg

________________________________________________________________________________________________________________________________________________

16. DAY 2
DATE 06/04/2026
TOPIC :- Inline-Block Elements

In this chapter we learn about display: inline-block
which solves the limitations of inline elements.

---

The Problem with Inline Elements (recap)

Inline elements like <a> have these limitations:-

   margin    -> only left/right work, top/bottom ignored
   padding   -> only left/right recommended, top/bottom breaks layout
   width     -> NO effect
   height    -> NO effect

Example of the problem:-

a {
    margin: 50px;      <- top/bottom margin does not work
    padding: 50px;     <- top/bottom padding breaks layout
    height: 100px;     <- no effect
    width: 100px;      <- no effect
}

---

The Solution :- display: inline-block

inline-block combines the best of both block and inline:-

   Like INLINE  -> elements sit side by side (do not take full width)
   Like BLOCK   -> width, height, margin, padding ALL work correctly

---

Comparison Table

Property          | inline | block | inline-block
------------------|--------|-------|-------------
Sits side by side |  YES   |  NO   |    YES
Width control     |  NO    |  YES  |    YES
Height control    |  NO    |  YES  |    YES
Margin all sides  |  NO    |  YES  |    YES
Padding all sides |  NO    |  YES  |    YES

---

Code used :-

HTML

<a href="#">My Website</a>
<a href="#">My New Website</a>

CSS (Before - Inline, limited)

a {
    border: 2px solid black;
    /* margin: 50px;   <- top/bottom won't work */
    /* padding: 50px;  <- breaks layout         */
    /* height: 100px;  <- no effect             */
    /* width: 100px;   <- no effect             */
}

CSS (After - inline-block, all properties work)

a {
    display: inline-block;
    font-family: "Poppins", sans-serif;
    border: 2px solid black;
    margin: 20px;
    padding: 10px;
    width: 150px;
    height: 100px;
}

Output:-
Both links sit side by side (inline behavior)
Each link has fixed width 150px and height 100px (block behavior)
Margin and padding work correctly on all sides.

---

Key Points

✅ inline-block = inline + block combined
✅ Elements sit side by side like inline
✅ Width, Height, Margin, Padding all work like block
✅ Best choice when you want buttons or nav links side by side with full control
✅ Solves all the limitations of pure inline elements

Quick Rule
   Need side-by-side + full box control  ->  use display: inline-block
   Need full width stacked layout        ->  use display: block
   Just text/icon inside a line          ->  inline is fine

______________________________________________________________________________________________________________________________________________16. DAY 2
DATE 06/04/2026
TOPIC :- Inline-Block Elements

In this chapter we learn about display: inline-block
which solves the limitations of inline elements.

---

The Problem with Inline Elements (recap)

Inline elements like <a> have these limitations:-

   margin    -> only left/right work, top/bottom ignored
   padding   -> only left/right recommended, top/bottom breaks layout
   width     -> NO effect
   height    -> NO effect

Example of the problem:-

a {
    margin: 50px;      <- top/bottom margin does not work
    padding: 50px;     <- top/bottom padding breaks layout
    height: 100px;     <- no effect
    width: 100px;      <- no effect
}

---

The Solution :- display: inline-block

inline-block combines the best of both block and inline:-

   Like INLINE  -> elements sit side by side (do not take full width)
   Like BLOCK   -> width, height, margin, padding ALL work correctly

---

Comparison Table

Property          | inline | block | inline-block
------------------|--------|-------|-------------
Sits side by side |  YES   |  NO   |    YES
Width control     |  NO    |  YES  |    YES
Height control    |  NO    |  YES  |    YES
Margin all sides  |  NO    |  YES  |    YES
Padding all sides |  NO    |  YES  |    YES

---

Code used :-

HTML

<a href="#">My Website</a>
<a href="#">My New Website</a>

CSS (Before - Inline, limited)

a {
    border: 2px solid black;
    /* margin: 50px;   <- top/bottom won't work */
    /* padding: 50px;  <- breaks layout         */
    /* height: 100px;  <- no effect             */
    /* width: 100px;   <- no effect             */
}

CSS (After - inline-block, all properties work)

a {
    display: inline-block;
    font-family: "Poppins", sans-serif;
    border: 2px solid black;
    margin: 20px;
    padding: 10px;
    width: 150px;
    height: 100px;
}

Output:-
Both links sit side by side (inline behavior)
Each link has fixed width 150px and height 100px (block behavior)
Margin and padding work correctly on all sides.

---

Key Points

✅ inline-block = inline + block combined
✅ Elements sit side by side like inline
✅ Width, Height, Margin, Padding all work like block
✅ Best choice when you want buttons or nav links side by side with full control
✅ Solves all the limitations of pure inline elements

Quick Rule
   Need side-by-side + full box control  ->  use display: inline-block
   Need full width stacked layout        ->  use display: block
   Just text/icon inside a line          ->  inline is fine

______________________________________________________________________________________________________________________________________________

17. DAY 2
DATE 06/04/2026
TOPIC :- Building a Simple Webpage with Navigation Bar

In this chapter we build a complete webpage with a
styled navigation bar and multiple sections using HTML and CSS.

---

Page Structure

The webpage has three sections connected by a navigation bar:-

   <nav>          -> navigation bar at the top
   <section id="home">     -> Home section
   <section id="about">    -> About Us section
   <section id="contact">  -> Contact section

---

What is a Navigation Bar?

A navigation bar (navbar) is a menu that links to
different sections or pages of a website.

In this code we use anchor tags inside a ul/li list
and link them to sections using id and href="#id"

Example:-

<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
</nav>

Clicking "About Us" scrolls the page to <section id="about">

---

CSS Techniques used in this code

1. Removing default link styling

a {
    color: #444;
    text-decoration: none;   <- removes the underline from links
}

2. Styling the nav bar

nav {
    background-color: #cdcdcd;   <- light gray background
}

nav ul {
    padding-left: 0px;           <- removes default left indent
    text-align: center;          <- centers all nav items
}

3. Styling nav list items

nav li {
    list-style-type: none;       <- removes bullet points
    display: inline-block;       <- items sit side by side
    margin: 15px 20px;
    border-bottom: 1px solid #444;   <- underline effect on each item
    font-size: 20px;
    text-transform: uppercase;       <- converts text to CAPITALS
}

4. Section spacing

section {
    margin-top: 50px;            <- gap between sections
}

5. Heading styles

h1, h2, h3 {
    color: #222;                 <- slightly darker than body text
}
h2 {
    border-bottom: 1px solid;    <- underline below every h2 heading
}

6. Body styling

body {
    font-family: "Poppins", sans-serif;
    color: #444;
    padding: 0px 40px;           <- left/right breathing room
}

---

Code used :-

HTML

<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
</nav>

<section id="home">
    <h2>Welcome to this lovely Website</h2>
    <p>...</p>
</section>

<section id="about">
    <h2>About Us</h2>
    <p>...</p>
</section>

<section id="contact">
    <h2>Contact</h2>
    <p>...</p>
</section>

---

Key Points

✅ href="#id" links to a section on the same page (anchor link)
✅ text-decoration: none removes underline from anchor tags
✅ text-transform: uppercase converts nav text to capitals without editing HTML
✅ display: inline-block on li makes nav items sit side by side
✅ list-style-type: none removes bullet points from ul/li
✅ border-bottom on h2 creates a clean visual separator under headings
✅ padding: 0px 40px on body adds left/right spacing to all content

______________________________________________________________________________________________________________________________________________

18. DAY 2
DATE 06/04/2026
TOPIC :- Box Sizing & the HR Tag

In this chapter we learn about box-sizing property
and the <hr> horizontal rule tag.

---

PART 1 :- The HR Tag

The <hr> tag creates a horizontal line across the page.
It is used to visually separate content or show a change in topic.
It is a SELF-CLOSING tag (no closing tag needed).

Syntax:-

<hr>

CSS applied to hr in this code:-

hr {
    width: 500px;
    margin-left: 0px;
    border: 0.5px dashed black;   <- dashed line style
}

---

PART 2 :- Box Sizing

Box Sizing controls HOW the width and height of an element is calculated.

There are two values:-

1. content-box  (DEFAULT)
2. border-box

---

1. content-box (default)

box-sizing: content-box;

Width and height apply to CONTENT ONLY.
Padding and border are added ON TOP of the given width.

Formula:-
   Total width = width + padding (left+right) + border (left+right)

Example from this code (box2):-
   width:   500px
   padding: 50px x2  = 100px
   border:  10px x2  = 20px
   --------------------------------
   Total actual width = 500 + 100 + 20 = 620px

So the box becomes BIGGER than 500px on screen.

---

2. border-box

box-sizing: border-box;

Width and height include padding and border INSIDE the given width.
The total size stays exactly as specified.

Formula:-
   Total width = width (padding and border fit inside)

Example from this code (box1):-
   width:   500px    <- this is the FINAL size on screen
   padding: 50px     <- fits inside the 500px
   border:  10px     <- fits inside the 500px
   --------------------------------
   Total actual width = 500px (no change)

So the box stays exactly 500px on screen.

---

Visual Comparison

                content-box (box2)        border-box (box1)
                ------------------        -----------------
Declared width      500px                     500px
Padding (x2)      + 100px                  (included)
Border (x2)       +  20px                  (included)
                  --------                  --------
Actual width        620px                     500px

---

Code used :-

HTML

<hr>

<div class="box1">
    <h3>Heading</h3>
    <p>...</p>
</div>

<div class="box2">
    <h3>Heading</h3>
    <p>...</p>
</div>

CSS

hr {
    width: 500px;
    margin-left: 0px;
    border: 0.5px dashed black;
}

.box1 {
    box-sizing: border-box;     <- total size stays 500px
    width: 500px;
    background-color: lightblue;
    border: 10px solid red;
    padding: 50px;
    margin-bottom: 50px;
}

.box2 {
    box-sizing: content-box;    <- default, total size becomes 620px
    width: 500px;
    background-color: lightblue;
    border: 10px solid red;
    padding: 50px;18. DAY 2
DATE 06/04/2026
TOPIC :- Box Sizing & the HR Tag

In this chapter we learn about box-sizing property
and the <hr> horizontal rule tag.

---

PART 1 :- The HR Tag

The <hr> tag creates a horizontal line across the page.
It is used to visually separate content or show a change in topic.
It is a SELF-CLOSING tag (no closing tag needed).

Syntax:-

<hr>

CSS applied to hr in this code:-

hr {
    width: 500px;
    margin-left: 0px;
    border: 0.5px dashed black;   <- dashed line style
}

---

PART 2 :- Box Sizing

Box Sizing controls HOW the width and height of an element is calculated.

There are two values:-

1. content-box  (DEFAULT)
2. border-box

---

1. content-box (default)

box-sizing: content-box;

Width and height apply to CONTENT ONLY.
Padding and border are added ON TOP of the given width.

Formula:-
   Total width = width + padding (left+right) + border (left+right)

Example from this code (box2):-
   width:   500px
   padding: 50px x2  = 100px
   border:  10px x2  = 20px
   --------------------------------
   Total actual width = 500 + 100 + 20 = 620px

So the box becomes BIGGER than 500px on screen.

---

2. border-box

box-sizing: border-box;

Width and height include padding and border INSIDE the given width.
The total size stays exactly as specified.

Formula:-
   Total width = width (padding and border fit inside)

Example from this code (box1):-
   width:   500px    <- this is the FINAL size on screen
   padding: 50px     <- fits inside the 500px
   border:  10px     <- fits inside the 500px
   --------------------------------
   Total actual width = 500px (no change)

So the box stays exactly 500px on screen.

---

Visual Comparison

                content-box (box2)        border-box (box1)
                ------------------        -----------------
Declared width      500px                     500px
Padding (x2)      + 100px                  (included)
Border (x2)       +  20px                  (included)
                  --------                  --------
Actual width        620px                     500px

---

Code used :-

HTML

<hr>

<div class="box1">
    <h3>Heading</h3>
    <p>...</p>
</div>

<div class="box2">
    <h3>Heading</h3>
    <p>...</p>
</div>

CSS

hr {
    width: 500px;
    margin-left: 0px;
    border: 0.5px dashed black;
}

.box1 {
    box-sizing: border-box;     <- total size stays 500px
    width: 500px;
    background-color: lightblue;
    border: 10px solid red;
    padding: 50px;
    margin-bottom: 50px;
}

.box2 {
    box-sizing: content-box;    <- default, total size becomes 620px
    width: 500px;
    background-color: lightblue;
    border: 10px solid red;
    padding: 50px;18. DAY 2
DATE 06/04/2026
TOPIC :- Box Sizing & the HR Tag

In this chapter we learn about box-sizing property
and the <hr> horizontal rule tag.

---

PART 1 :- The HR Tag

The <hr> tag creates a horizontal line across the page.
It is used to visually separate content or show a change in topic.
It is a SELF-CLOSING tag (no closing tag needed).

Syntax:-

<hr>

CSS applied to hr in this code:-

hr {
    width: 500px;
    margin-left: 0px;
    border: 0.5px dashed black;   <- dashed line style
}

---

PART 2 :- Box Sizing

Box Sizing controls HOW the width and height of an element is calculated.

There are two values:-

1. content-box  (DEFAULT)
2. border-box

---

1. content-box (default)

box-sizing: content-box;

Width and height apply to CONTENT ONLY.
Padding and border are added ON TOP of the given width.

Formula:-
   Total width = width + padding (left+right) + border (left+right)

Example from this code (box2):-
   width:   500px
   padding: 50px x2  = 100px
   border:  10px x2  = 20px
   --------------------------------
   Total actual width = 500 + 100 + 20 = 620px

So the box becomes BIGGER than 500px on screen.

---

2. border-box

box-sizing: border-box;

Width and height include padding and border INSIDE the given width.
The total size stays exactly as specified.

Formula:-
   Total width = width (padding and border fit inside)

Example from this code (box1):-
   width:   500px    <- this is the FINAL size on screen
   padding: 50px     <- fits inside the 500px
   border:  10px     <- fits inside the 500px
   --------------------------------
   Total actual width = 500px (no change)

So the box stays exactly 500px on screen.

---

Visual Comparison

                content-box (box2)        border-box (box1)
                ------------------        -----------------
Declared width      500px                     500px
Padding (x2)      + 100px                  (included)
Border (x2)       +  20px                  (included)
                  --------                  --------
Actual width        620px                     500px

---

Code used :-

HTML

<hr>

<div class="box1">
    <h3>Heading</h3>
    <p>...</p>
</div>

<div class="box2">
    <h3>Heading</h3>
    <p>...</p>
</div>

CSS

hr {
    width: 500px;
    margin-left: 0px;
    border: 0.5px dashed black;
}

.box1 {
    box-sizing: border-box;     <- total size stays 500px
    width: 500px;
    background-color: lightblue;
    border: 10px solid red;
    padding: 50px;
    margin-bottom: 50px;
}

.box2 {
    box-sizing: content-box;    <- default, total size becomes 620px
    width: 500px;
    background-color: lightblue;
    border: 10px solid red;
    padding: 50px;
    ______________________________________________________________________________________________________________________________________

    ```
19. DAY 2
DATE 06/04/2026
TOPIC :- Default Browser Styles & CSS Reset

In this chapter we learn about default browser styles
and how to reset them using the universal selector *.

---

What are Default Browser Styles?

Every browser (Chrome, Firefox, Edge) applies its own
default CSS to HTML elements automatically.

Examples of default browser styles:-

   h1       -> has a large font size + top/bottom margin
   p        -> has top/bottom margin
   ul/li    -> has left padding and bullet points
   body     -> has small margin/padding
   a        -> has blue color and underline
   input    -> has border and padding

Problem:-
   Different browsers apply DIFFERENT default styles.
   This causes your webpage to look different on different browsers.
   This is called Cross-Browser Inconsistency.

---

What is CSS Reset?

CSS Reset removes all default browser styles
so you start with a clean, consistent base across all browsers.

The most common way is using the universal selector *

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

What each line does:-

   margin: 0          -> removes all default margins from every element
   padding: 0         -> removes all default padding from every element
   box-sizing: border-box  -> makes all elements use border-box sizing

The * selector targets EVERY element on the page at once.

---

After Reset — Adding Back Your Own Spacing

Once reset, you manually add back only what you need:-

h1 {
    margin: 10px;       <- custom margin for heading
}

p {
    margin: 8px 20px;   <- top/bottom: 8px, left/right: 20px
}

This gives you full control with no browser surprises.

---

Before vs After Reset

Element     | Before Reset (browser default) | After Reset
------------|--------------------------------|------------------
body        | 8px margin all sides           | 0px margin
h1          | ~21px top/bottom margin        | 0px (reset)
p           | ~16px top/bottom margin        | 0px (reset)
ul          | padding-left: 40px             | 0px padding

---

Code used :-

HTML

<h1>Heading</h1>
<p>Lorem ipsum...</p>

CSS

/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Custom styles added back */
h1 {
    margin: 10px;
}

p {
    margin: 8px 20px;
}

---

Key Points

✅ Browsers apply their own default styles automatically
✅ Default styles differ between browsers causing inconsistency
✅ CSS Reset using * removes all default margins and padding
✅ box-sizing: border-box in * makes ALL elements predictable in size
✅ After reset, you add back only the spacing you actually want
✅ Always write CSS Reset at the TOP of your stylesheet
✅ * selector targets every single HTML element on the page

Quick Rule
   Always start your CSS file with:-

   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

______________________________________________________________________________________________________________________________________________

20. DAY 2
DATE 06/04/2026
TOPIC :- CSS Inheritance

In this chapter we learn how CSS properties are
passed down from parent elements to child elements.

---

What is Inheritance?

Inheritance means a child element automatically receives
the CSS styles of its parent element
WITHOUT needing to write the same CSS again.

Think of it like a family tree:-
   Parent styles flow DOWN to children
   unless the child has its OWN style defined.

---

Example from this code

body has color: red
   -> This red color is inherited by ALL elements inside body
   -> h1, p, h2, a, div — all become red by default

But some elements have their OWN color defined:-
   h1          -> color: orange   (overrides inherited red)
   a           -> color: brown    (overrides inherited red)
   .container1 -> color: green    (overrides inherited red)
   .container2 -> color: aqua     (overrides inherited red)

Elements inside .container1 (h2, p) inherit green from .container1
Elements inside .container2 (h2, p) inherit aqua from .container2

---

Inheritance Flow Diagram

body (color: red)
│
├── a          -> color: brown   (own style, overrides red)
├── h1         -> color: orange  (own style, overrides red)
│
├── .container1 (color: green)
│   ├── h2    -> inherits green from container1
│   └── p     -> inherits green from container1
│
└── .container2 (color: aqua)
    ├── h2    -> inherits aqua from container2
    └── p     -> inherits aqua from container2

---

Rule of Inheritance

1. Child inherits styles from parent if no own style is set
2. If child has its OWN style -> own style wins (overrides parent)
3. More specific selector always wins over inherited style

---

Which properties are inherited?

Commonly INHERITED properties:-
   color, font-family, font-size, font-weight,
   text-align, line-height, visibility

Commonly NOT inherited properties:-
   margin, padding, border, background-color,
   width, height, display

---

Code used :-

HTML

<a href="#">My Website</a>
<h1>Main Heading Inside Body.</h1>

<div class="container1">
    <h2>Inside My Container One!!</h2>
    <p>Paragraph of Container 1...</p>
</div>

<div class="container2">
    <h2>Inside My Container Two!!</h2>
    <p>Paragraph of Container 2...</p>
</div>

CSS

body {
    font-family: "Poppins", sans-serif;
    color: red;              <- inherited by all children
}

.container1 {
    color: green;            <- h2 and p inside inherit green
}

.container2 {
    color: aqua;             <- h2 and p inside inherit aqua
}

h1 {
    color: orange;           <- overrides inherited red
}

a {
    color: brown;            <- overrides inherited red
    text-decoration: none;
}

---

Key Points

✅ Inheritance passes styles from parent to child automatically
✅ Child's own style always overrides the inherited style
✅ color and font-family are the most commonly inherited properties
✅ margin, padding, border are NOT inherited
✅ Inheritance reduces repetition — set once on parent, applies to all children
✅ font-family on body means ALL text on the page uses that font

______________________________________________________________________________________________________________________________________________

21. DAY 2
DATE 06/04/2026
TOPIC :- Text Align in CSS

In this chapter we learn about the text-align property
and how it behaves differently on block vs inline elements.

---

What is text-align?

text-align controls the HORIZONTAL alignment of text
inside an element.

Values:-
   text-align: left;    <- default for most elements
   text-align: center;  <- centers the text
   text-align: right;   <- pushes text to the right
   text-align: justify; <- stretches text to fill the full width

---

text-align on a Block Element (h1)

Block elements like h1 have a width.
text-align works directly on them.

h1 {
    width: 500px;
    background-color: aqua;
    padding: 10px 20px;
    text-align: center;    <- text centers inside the 500px width
}

Output:-
   "Heading" appears centered inside the 500px aqua box.

---

text-align on an Inline Element (a)

Inline elements only take as much width as their content.
So text-align has nothing to work with by default.

Fix: convert to inline-block first, then set a width.
Now text-align has space to work inside.

a {
    width: 500px;
    background-color: aqua;
    display: inline-block;   <- gives it a controllable width
    text-align: right;       <- text now aligns to the right inside 500px
}

Output:-
   "My Website" link appears on the RIGHT side inside the 500px aqua box.

---

Why text-align needs width to work

Without width, the element is only as wide as the text itself.
There is no empty space to align into.

With width set, there is space left over.
text-align decides where the text sits within that space.

Diagram:-

[ ←  500px wide box  →              ]
[          Heading          ]   <- center
[                  My Website]  <- right

---

Code used :-

HTML

<h1>Heading</h1>
<a href="#">My Website</a>

CSS

h1 {
    background-color: aqua;
    width: 500px;
    text-align: center;
    padding: 10px 20px;
}

a {
    width: 500px;
    background-color: aqua;
    display: inline-block;
    text-align: right;
}

---

Key Points

✅ text-align controls horizontal alignment of text inside an element
✅ Values: left (default), center, right, justify
✅ Works directly on block elements (h1, p, div)
✅ For inline elements (a, span), set display: inline-block and a width first
✅ text-align aligns text WITHIN the element, not the element itself
✅ To center the element itself on the page, use margin: auto

Quick Difference
   text-align: center    <- centers TEXT inside the element
   margin: auto          <- centers the ELEMENT itself on the page

______________________________________________________________________________________________________________________________________________git