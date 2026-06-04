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
