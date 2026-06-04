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

for changing imahe :-

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
