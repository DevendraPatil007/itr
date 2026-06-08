1. DAY 1
DATE 06/05/2026
TOPIC :- Flexbox flex-direction

In this chapter we learn about defining the direction of the main axis
using the flex-direction property.

---

Quick Recap of Main Axis vs. Cross Axis

Property Value          | Main Axis Direction   | Cross Axis Direction
------------------------|-----------------------|-----------------------
flex-direction: row     | Left to Right         | Top to Bottom
flex-direction: column  | Top to Bottom         | Left to Right

---

1. flex-direction

Controls the direction in which flex items are placed inside the container,
establishing the main axis.

Values:-

flex-direction: row             <- DEFAULT, main axis starts from left to right
flex-direction: row-reverse     <- main axis starts from right to left
flex-direction: column          <- main axis starts from top to bottom
flex-direction: column-reverse  <- ACTIVE, main axis starts from bottom to top

Diagram (flex-direction: column-reverse)

Main End (top)
^  +--[Box 5]--+
|  |  [Box 4]  |
|  |  [Box 3]  |
|  |  [Box 2]  |
|  +--[Box 1]--+
Main Start (bottom)

---

Active code in style.css

.box-wrapper {
    border: 10px solid #222;
    display: flex;
    flex-direction: column-reverse; /* Main Axis start from Bottom to Top of Flexbox Container */
}

---

Also explored (commented out examples in style.css)

/* Main Axis start from left to end to right of Flexbox Container */
/* flex-direction: row; */

/* Main Axis start from right to end to left of Flexbox Container */
/* flex-direction: row-reverse; */

/* Main Axis start from Top to end to Bottom of Flexbox Container */
/* flex-direction: column; */

---

Code used :-

HTML (index.html)

<div class="box-wrapper">
    <div class="box box-1"><h2>Box 1</h2><p>...</p></div>
    <div class="box box-2"><h2>Box 2</h2><p>...</p></div>
    <div class="box box-3"><h2>Box 3</h2><p>...</p></div>
    <div class="box box-4"><h2>Box 4</h2><p>...</p></div>
    <div class="box box-5"><h2>Box 5</h2><p>...</p></div>
</div>

CSS (style.css)

.box-wrapper{
    border: 10px solid #222;
    display: flex;
    flex-direction: column-reverse;
}
.box{
    border: 1px solid #666;
}
.box-1{ background: lightblue; }
.box-2{ background: lightcoral; }
.box-3{ background: lightcyan; }
.box-4{ background: lightgoldenrodyellow; }
.box-5{ background: lightsalmon; }

---

Key Points

✅ flex-direction determines what is considered the "Main Axis"
✅ row layouts lay items horizontally, column layouts lay items vertically
✅ reverse values (-reverse) flip the starting position and order of items
✅ Changing the direction shifts how formatting properties like justify-content apply

________________________________________________________________________________________________________________________________________________

2. DAY 2
DATE 06/08/2026
TOPIC :- Flexbox align-items, align-content & flex-wrap

In this chapter we learn about cross axis alignment
using align-items, align-content and flex-wrap.

---

Quick Recap of All 3 Axes-Based Properties

Property        | Works on    | Axis
----------------|-------------|------------------
justify-content | container   | Main Axis
align-items     | container   | Cross Axis
align-content   | container   | Cross Axis (multi-line only)

---

1. align-items

Controls alignment of flex items along the CROSS AXIS
for a SINGLE LINE of items.

Values:-

align-items: stretch      <- DEFAULT, items stretch to fill container height
align-items: flex-start   <- items align to cross start (top in row)
align-items: flex-end     <- items align to cross end (bottom in row)
align-items: center       <- items center along cross axis

Diagram (flex-direction: row, height: 700px)

Cross Start (top)
+--[Box1]--[Box2]--[Box3]--+   <- flex-start
|                          |
|                          |
+--[Box1]--[Box2]--[Box3]--+   <- flex-end (bottom)
Cross End (bottom)

---

2. flex-wrap

By default flex items stay on ONE line and shrink to fit.
flex-wrap allows items to wrap onto MULTIPLE LINES.

flex-wrap: nowrap    <- default, all items on one line
flex-wrap: wrap      <- items wrap to next line along cross axis

Wrapping direction:-
   flex-direction: row    -> wraps DOWNWARD (next row)
   flex-direction: column -> wraps RIGHTWARD (next column)

---

3. align-content

Works like justify-content but for the CROSS AXIS.
Only has effect when there are MULTIPLE LINES (flex-wrap: wrap).

Values:-
align-content: flex-start
align-content: flex-end
align-content: center
align-content: space-between
align-content: space-around
align-content: space-evenly
align-content: stretch      <- default

Note: align-content has NO effect on single-line flex containers.

---

Active code in style.css (flex-direction: column)

.box-wrapper {
    border: 10px solid #222;
    display: flex;
    flex-direction: column;       /* main axis is now vertical */
    height: 400px;                /* needed for column layout */
    flex-wrap: wrap;              /* items wrap to next column */
    align-items: flex-start;      /* items align to cross start (left) */
    align-content: space-between; /* space between columns */
    justify-content: space-between; /* space between items in each column */
}

---

Also explored (commented out examples in style.css)

/* Row layout with wrap and full alignment control */
/*
.box-wrapper {
    height: 700px;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: space-around;
    justify-content: space-between;
}
*/

/* Simple centered row layout */
/*
.box-wrapper {
    align-items: center;
    justify-content: space-between;   
}
*/

---

Code used :-

HTML (index.html)

<div class="box-wrapper">
    <div class="box box-1"><h2>Box 1</h2><p>Lorem ipsum...</p></div>
    <div class="box box-2"><h2>Box 2</h2><p>Lorem ipsum...</p></div>
    <div class="box box-3"><h2>Box 3</h2><p>Lorem ipsum...</p></div>
    <div class="box box-4"><h2>Box 4</h2><p>Lorem ipsum...</p></div>
    <div class="box box-5"><h2>Box 5</h2><p>Lorem ipsum...</p></div>
</div>

CSS (style.css)

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&family=Roboto:wght@400;500;700;900&display=swap');

body{
    font-family:"Poppins", sans-serif;
}

.box-wrapper{
    border: 10px solid #222;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 400px;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
}
.box{
    border: 1px solid #666;
}
.box-1{ background: lightblue; }
.box-2{ background: lightcoral; }
.box-3{ background: lightcyan; }
.box-4{ background: lightgoldenrodyellow; }
.box-5{ background: lightsalmon; }

---

Key Points

✅ align-items  = cross axis alignment for single line
✅ align-content = cross axis alignment for multiple lines (needs flex-wrap)
✅ flex-wrap: wrap allows items to overflow onto new lines
✅ Default align-items value is stretch (items fill full cross size)
✅ align-content has NO effect without flex-wrap: wrap
✅ For column direction, always set a height on the container
✅ justify-content and align-items can be combined freely

Full Property Map:-

   justify-content  -> Main Axis  spacing
   align-items      -> Cross Axis single line alignment
   align-content    -> Cross Axis multi line spacing
   flex-wrap        -> enables multi line behavior

________________________________________________________________________________________________________________________________________________

3. DAY 3
DATE 06/09/2026
TOPIC :- Introduction to CSS Grid Layout

In this chapter we transition from the 1D layout of Flexbox to CSS Grid,
a powerful 2D layout system controlling both columns and rows at once.

---

Quick Comparison: Flexbox vs. Grid

Concept         | Flexbox               | CSS Grid
----------------|-----------------------|---------------------------------------
Dimensions      | 1D (Row OR Column)    | 2D (Rows AND Columns simultaneously)
Approach        | Content-driven        | Layout-driven (Design structural grid)
Best Used For   | Components, Navbars   | Main page layouts, complex card grids

---

1. Defining a Grid Container

Turning an element into a grid container layout by setting display to grid.

Values:-
display: grid;         <- Generates a block-level grid container
display: inline-grid;  <- Generates an inline-level grid container

---

2. grid-template-columns & grid-template-rows

Explicitly defines the column and row tracks of your grid layout.

Units used:-
px, %, rem     <- Absolute or relative fixed sizes
fr             <- Fractional unit, represents a fraction of leftover space
repeat(n, size) <- Shortcut to repeat a track pattern 'n' times

Diagram (grid-template-columns: 200px 1fr 1fr; grid-template-rows: auto;)

   200px          1fr            1fr
+----------+--------------+--------------+
|  Box 1   |    Box 2     |    Box 3     |  Row 1 (auto height)
+----------+--------------+--------------+
|  Box 4   |    Box 5     |              |  Row 2 (auto height)
+----------+--------------+--------------+

---

3. gap (Gutters)

Controls the spacing exclusively BETWEEN grid items (not at outer edges).

Values:-
row-gap: 20px;     <- Sets vertical spacing between rows
column-gap: 15px;  <- Sets horizontal spacing between columns
gap: 20px 15px;    <- Shorthand (row-gap column-gap)
gap: 15px;         <- Shorthand setting both axes to equal value

---

Active code in style.css

.grid-wrapper {
    border: 10px solid #222;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns of equal fractional width */
    grid-template-rows: auto;              /* Rows scale based on inner content */
    gap: 15px;                             /* Space between items */
}

---

Also explored (commented out examples in style.css)

/* Fixed sidebar with fluid columns layout */
/*
.grid-wrapper {
    display: grid;
    grid-template-columns: 250px 1fr 2fr;
    gap: 20px;
}
*/

/* Explicitly sized two-row structure */
/*
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 150px 300px;
}
*/

---

Code used :-

HTML (index.html)

<div class="grid-wrapper">
    <div class="box box-1"><h2>Box 1</h2><p>Lorem ipsum...</p></div>
    <div class="box box-2"><h2>Box 2</h2><p>Lorem ipsum...</p></div>
    <div class="box box-3"><h2>Box 3</h2><p>Lorem ipsum...</p></div>
    <div class="box box-4"><h2>Box 4</h2><p>Lorem ipsum...</p></div>
    <div class="box box-5"><h2>Box 5</h2><p>Lorem ipsum...</p></div>
</div>

CSS (style.css)

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&family=Roboto:wght@400;500;700;900&display=swap');

body{
    font-family:"Poppins", sans-serif;
}

.grid-wrapper {
    border: 10px solid #222;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 15px;
}
.box{
    border: 1px solid #666;
}
.box-1{ background: lightblue; }
.box-2{ background: lightcoral; }
.box-3{ background: lightcyan; }
.box-4{ background: lightgoldenrodyellow; }
.box-5{ background: lightsalmon; }

---

Key Points

✅ display: grid defines the structural wrapper for two-dimensional grid layouts
✅ grid-template-columns configures horizontal track sizes and quantities
✅ The fr unit calculates and distributes structural leftover container space proportionally
✅ repeat() is a clean shorthand to eliminate repetitive track width configurations
✅ gap sets track intervals directly without requiring margin resets on grid edge elements