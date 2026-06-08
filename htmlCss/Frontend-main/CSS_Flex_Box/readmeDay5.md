Day 5 
Date :- 08/06/2026

Topic :-  Introduction

What is Flexbox?
One-dimensional layout model (row OR column)

Distributes space along a single axis

Makes responsive layouts easier without floats

Replaces older float-based layouts

Flexbox Properties (Your Code)
Property	Value	Effect
display	flex	Enables Flexbox on container
flex-direction	row (default)	Horizontal layout
flex-direction	column	Vertical layout
justify-content	various	Align along main axis
align-items	various	Align along cross axis
Diagram 1: Flexbox Axes
text
                        MAIN AXIS (Horizontal with row)
                    ←─────────────────────────────→
                
    +------------------+------------------+------------------+
    |                  |                  |                  |
    |      BOX 1       |      BOX 2       |      BOX 3       |
    |                  |                  |                  |
    +------------------+------------------+------------------+
         ↑                                        ↑
         │                                        │
         └────────── CROSS AXIS (Vertical) ───────┘


    When flex-direction: column (axes swap):

                        CROSS AXIS (Horizontal)
                    ←─────────────────────────────→
    
    +------------------+
    |      BOX 1       |  ↑
    +------------------+  │
    |      BOX 2       |  │ MAIN AXIS
    +------------------+  │ (Vertical)
    |      BOX 3       │  ↓
    +------------------+
Diagram 2: Your Current Layout (Without Flex Properties)
text
BEFORE FLEXBOX (default block behavior):

+--------------------------------------------------+
|  .box-wrapper (border: 10px solid #222)         |
|  +--------------------------------------------+  |
|  |  .box-1 (lightblue)                        |  |
|  |  Takes full width                          |  |
|  +--------------------------------------------+  |
|  |  .box-2 (lightcoral)                       |  |
|  |  Takes full width                          |  |
|  +--------------------------------------------+  |
|  |  .box-3 (lightcyan)                        |  |
|  |  Takes full width                          |  |
|  +--------------------------------------------+  |
|  |  .box-4 (lightgoldenrodyellow)             |  |
|  |  Takes full width                          |  |
|  +--------------------------------------------+  |
|  |  .box-5 (lightsalmon)                      |  |
|  |  Takes full width                          |  |
|  +--------------------------------------------+  |
+--------------------------------------------------+


AFTER display: flex (your code):

+--------------------------------------------------+
|  .box-wrapper (display: flex)                   |
|  +----------+ +----------+ +----------+ +------+|
|  |  .box-1  | |  .box-2  | |  .box-3  | |.box-4||
|  | blue     | | coral    | | cyan     | |yellow||
|  +----------+ +----------+ +----------+ +------+|
|                                                  |
|  +----------+                                   |
|  |  .box-5  |                                   |
|  | salmon   |                                   |
|  +----------+                                   |
+--------------------------------------------------+
(Boxes shrink to fit content width)
Diagram 3: Flexbox Alignment Properties
text
MAIN AXIS ALIGNMENT (justify-content):

justify-content: flex-start (default)
+----------+----------+----------+--------------------+
| Box 1    | Box 2    | Box 3    |  (empty space)     |
+----------+----------+----------+--------------------+

justify-content: flex-end
+--------------------+----------+----------+----------+
| (empty space)      | Box 1    | Box 2    | Box 3    |
+--------------------+----------+----------+----------+

justify-content: center
+----------+----------+----------+----------+----------+
| (space)  | Box 1    | Box 2    | Box 3    | (space)  |
+----------+----------+----------+----------+----------+

justify-content: space-between
+----------+----------+----------+----------+----------+
| Box 1    | (space)  | Box 2    | (space)  | Box 3    |
+----------+----------+----------+----------+----------+

justify-content: space-around
+----+----------+----+----------+----+----------+----+
|spc | Box 1    |spc | Box 2    |spc | Box 3    |spc |
+----+----------+----+----------+----+----------+----+


CROSS AXIS ALIGNMENT (align-items):

align-items: stretch (default)
+--------------------------------------------------+
|  +----------+                                    |
|  | Box 1    | ← All boxes stretch to same height|
|  | (tall)   |                                    |
|  +----------+                                    |
|  +----------+                                    |
|  | Box 2    |                                    |
|  +----------+                                    |
+--------------------------------------------------+

align-items: center
+--------------------------------------------------+
|                                                  |
|  +----------+  +----------+  +----------+       |
|  | Box 1    |  | Box 2    |  | Box 3    |       |
|  +----------+  +----------+  +----------+       |
|                    ↑                             |
|              Vertically centered                 |
+--------------------------------------------------+
Code Example from Your File
Current CSS:

css
.box-wrapper{
    border: 10px solid #222;
    display: flex;  /* Enables Flexbox */
}

.box{
    border: 1px solid #666;
}
Result: All 5 boxes sit side by side horizontally

Diagram 4: Common Flexbox Patterns
text
PATTERN 1: Navigation Bar
+--------------------------------------------------+
|  Logo    Home    About    Services    Contact   |
|  ↑        ↑        ↑          ↑           ↑     |
|  (flex-start)              (flex-end)           |
+--------------------------------------------------+
CSS: .nav { display: flex; justify-content: space-between; }


PATTERN 2: Card Grid (wrap)
+--------------------------------------------------+
|  +--------+  +--------+  +--------+             |
|  | Card 1 |  | Card 2 |  | Card 3 |             |
|  +--------+  +--------+  +--------+             |
|                                                  |
|  +--------+  +--------+                         |
|  | Card 4 |  | Card 5 |                         |
|  +--------+  +--------+                         |
+--------------------------------------------------+
CSS: .container { display: flex; flex-wrap: wrap; }


PATTERN 3: Centered Content
+--------------------------------------------------+
|                                                  |
|                                                  |
|                    +--------+                   |
|                    | Content|                   |
|                    +--------+                   |
|                                                  |
|                                                  |
+--------------------------------------------------+
CSS: .container { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
}
Diagram 5: Flexbox Properties Reference
text
                    FLEXBOX CONTAINER
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   flex-direction     justify-content     align-items
        │                  │                  │
   ┌────┴────┐        ┌─────┴─────┐      ┌─────┴─────┐
   │ row     │        │ flex-start│      │ stretch   │
   │ column  │        │ flex-end  │      │ flex-start│
   │ row-rev │        │ center    │      │ flex-end  │
   │ col-rev │        │ space-btwn│      │ center    │
   └─────────┘        │ space-around      └───────────┘
                      │ space-evenly


                    FLEXBOX ITEMS
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
      flex-grow         flex-shrink        flex-basis
        │                  │                  │
   (How much to        (How much to       (Initial size
    expand)             shrink)            before growing)


COMMON SHORTHAND:
flex: 1;        → flex-grow: 1, flex-shrink: 1, flex-basis: 0
flex: auto;     → flex-grow: 1, flex-shrink: 1, flex-basis: auto
flex: none;     → flex-grow: 0, flex-shrink: 0, flex-basis: auto
Key Takeaways from Your Code
display: flex on parent creates flex container

Child boxes become flex items automatically

Default direction is row (horizontal)

Boxes shrink to fit content width (no wrapping yet)

No extra CSS needed for basic side-by-side layout

Next Steps to Explore
css
/* Add these to see more flex behavior */

.box-wrapper{
    display: flex;
    justify-content: space-between;  /* Spread boxes */
    align-items: center;              /* Center vertically */
    flex-wrap: wrap;                  /* Allow wrapping */
    gap: 20px;                        /* Space between boxes */
}

.box{
    flex: 1;  /* All boxes grow equally */
}

/* Individual box control */
.box-1{
    flex: 2;  /* Box 1 takes twice the space */
}
.box-2{
    order: -1;  /* Box 2 moves to front */
}
Flexbox Quick Reference Card
text
┌─────────────────────────────────────────────────────────┐
│                    FLEXBOX QUICK REF                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  display: flex        → Enable flexbox                  │
│  flex-direction       → row (default) or column         │
│  justify-content      → Align along main axis           │
│  align-items          → Align along cross axis          │
│  flex-wrap            → Allow wrapping to new line      │
│  gap                  → Space between items             │
│                                                          │
│  ON CHILDREN:                                           │
│  flex: 1              → Grow to fill space              │
│  order: -1            → Move to front                   │
│  align-self: center   → Override parent alignment       │
│                                                          │
└─────────────────────────────────────────────────────────┘
---

Day 5
2. 
DATE 06/08/2026
TOPIC :- CSS Flexbox & flex-basis

In this chapter we learn about CSS Flexbox layout
and the flex-basis property for sizing flex items.

---

What is Flexbox?

Flexbox is a CSS layout system that arranges elements
in a row or column automatically.

To activate Flexbox on a container:-

.box-wrapper {
    display: flex;
}

All direct children of that container become FLEX ITEMS.

---

Flex Container Properties (applied to parent)

display: flex           -> activates flexbox on the container
flex-direction: row     -> items arranged LEFT to RIGHT (default)
flex-direction: column  -> items arranged TOP to BOTTOM
flex-wrap: wrap         -> items wrap to next line if no space
flex-wrap: nowrap       -> items stay on one line (default)

---

What is flex-basis?

flex-basis sets the INITIAL SIZE of a flex item
along the MAIN AXIS before any remaining space is distributed.

   Main axis = horizontal when flex-direction: row
   Main axis = vertical   when flex-direction: column

flex-basis is similar to width but smarter:-

   width: 500px         <- always applies width, ignores flex context
   flex-basis: 500px    <- applies size relative to the main axis

When flex-direction: row   -> flex-basis acts like width
When flex-direction: column -> flex-basis acts like height

---

Code used :-

HTML

<div class="box-wrapper">
    <div class="box box-1"><h2>Box 1</h2><p>...</p></div>
    <div class="box box-2"><h2>Box 2</h2><p>...</p></div>
    <div class="box box-3"><h2>Box 3</h2><p>...</p></div>
    <div class="box box-4"><h2>Box 4</h2><p>...</p></div>
    <div class="box box-5"><h2>Box 5</h2><p>...</p></div>
</div>

CSS

.box-wrapper {
    border: 10px solid #222;
    display: flex;
    flex-direction: row;    <- boxes sit side by side
    /* flex-wrap: wrap; */  <- uncomment to allow wrapping
}

.box {
    border: 1px solid #666;
    flex-basis: 500px;      <- each box wants to be 500px wide
}

/* Individual box colors */
.box-1 { background: lightblue; }
.box-2 { background: lightcoral; }
.box-3 { background: lightcyan; }
.box-4 { background: lightgoldenrodyellow; }
.box-5 { background: lightsalmon; }

---

What happens in this code

flex-basis: 500px means each box WANTS to be 500px.
But 5 boxes x 500px = 2500px which is wider than the screen.
Flexbox shrinks them proportionally to fit on one line (flex-shrink default).

To prevent shrinking and allow wrapping instead:-
   add flex-wrap: wrap to .box-wrapper

---

flex-basis vs width

Property        | Context-aware | Works with flex-direction
----------------|---------------|---------------------------
width           |      NO       | Always sets horizontal size
flex-basis      |      YES      | Sets size along the main axis

---

Key Points

✅ display: flex turns a container into a flex container
✅ All direct children automatically become flex items
✅ flex-direction: row = horizontal layout (default)
✅ flex-direction: column = vertical layout
✅ flex-basis sets the initial size of a flex item along the main axis
✅ flex-basis is preferred over width inside flex containers
✅ By default flex items shrink to fit — add flex-wrap: wrap to allow wrapping
✅ Each box can have a unique background color using separate classes
---

3. DAY 5
DATE 06/08/2026
TOPIC :- Flexbox Terminology (Main Axis & Cross Axis)

In this chapter we learn the core terminology of Flexbox
which is needed to understand all flex properties.

---

Flexbox Terminology

When you write display: flex on a container,
Flexbox creates two invisible axes inside it.

---

1. Main Axis

The Main Axis is the PRIMARY direction flex items are placed.

   flex-direction: row     -> Main Axis runs LEFT  to RIGHT  (horizontal)
   flex-direction: column  -> Main Axis runs TOP   to BOTTOM (vertical)

Main Axis has two ends:-
   Main Start  -> where items begin placing (left side in row)
   Main End    -> where items stop placing  (right side in row)

Main Size = the width of a flex item along the main axis
            (this is what flex-basis controls)

---

2. Cross Axis

The Cross Axis runs PERPENDICULAR to the Main Axis.

   flex-direction: row     -> Cross Axis runs TOP to BOTTOM (vertical)
   flex-direction: column  -> Cross Axis runs LEFT to RIGHT (horizontal)

Cross Axis has two ends:-
   Cross Start -> top of the container (in row direction)
   Cross End   -> bottom of the container (in row direction)

Cross Size = the height of a flex item along the cross axis

---

Diagram (from the image)

flex container
+-----------------------------------------------+
|  FlexBox   [Flex Items]          | cross Start |
|  +-----+ +-----+ +-----+ +-----+|             |
|  |     | |     | |     | |     ||  ←cross size |
|  +-----+ +-----+ +-----+ +-----+|             |
|                                  | Cross End   |
|  ←———————— main size ————————→  |             |
|  Main                  Main      |             |
|  Start    Cross Axis   End       |             |
+-----------------------------------------------+
              ↑
           Main Axis (→)

---

Summary Table

Term         | Direction (flex-direction: row)
-------------|----------------------------------
Main Axis    | Horizontal (left → right)
Cross Axis   | Vertical   (top → bottom)
Main Start   | Left edge of container
Main End     | Right edge of container
Cross Start  | Top edge of container
Cross End    | Bottom edge of container
Main Size    | Width of the flex item
Cross Size   | Height of the flex item

---

How Axes Flip with flex-direction

flex-direction: row (default)
   Main Axis  = horizontal →
   Cross Axis = vertical ↓

flex-direction: column
   Main Axis  = vertical ↓
   Cross Axis = horizontal →

This is why flex-basis acts like width in row
and acts like height in column — it always follows the Main Axis.

---

Key Points

✅ Main Axis = direction items are placed (controlled by flex-direction)
✅ Cross Axis = always perpendicular to the Main Axis
✅ Main Start/End = beginning and end of the Main Axis
✅ Cross Start/End = beginning and end of the Cross Axis
✅ flex-basis controls size along the Main Axis
✅ align-items controls alignment along the Cross Axis
✅ justify-content controls alignment along the Main Axis
✅ Axes FLIP when flex-direction changes from row to column

________________________________________________________________________________________________________________________________________________

4. DAY 5
DATE 06/08/2026
TOPIC :- Flexbox justify-content

In this chapter we learn about justify-content
which controls alignment of flex items along the MAIN AXIS.

---

What is justify-content?

justify-content is a FLEX CONTAINER property.
It controls how flex items are distributed and spaced
along the Main Axis (horizontal by default in flex-direction: row).

---

All justify-content Values

1. flex-start (DEFAULT)
   Items packed to the START of the main axis (left side).

   [Box1][Box2][Box3][Box4][Box5]                    |

2. flex-end
   Items packed to the END of the main axis (right side).

   |                    [Box1][Box2][Box3][Box4][Box5]

3. center
   Items packed to the CENTER of the main axis.

   |          [Box1][Box2][Box3][Box4][Box5]          |

4. space-between
   First item at start, last item at end.
   Equal space BETWEEN items. No space at edges.

   [Box1]      [Box2]      [Box3]      [Box4]      [Box5]

5. space-around
   Equal space around each item.
   Edge space = HALF of the space between items.

   |  [Box1]    [Box2]    [Box3]    [Box4]    [Box5]  |
      ↑half↑  ↑full↑   ↑full↑   ↑full↑   ↑half↑

6. space-evenly
   Equal space between all items AND at the edges.

   |   [Box1]   [Box2]   [Box3]   [Box4]   [Box5]   |
      ↑equal↑ ↑equal↑ ↑equal↑ ↑equal↑ ↑equal↑

---

justify-content with flex-direction: column

When flex-direction: column, Main Axis becomes vertical.
justify-content then controls VERTICAL spacing.

Note: container needs a height set for this to be visible.

.box-wrapper {
    flex-direction: column;
    height: 900px;
    justify-content: space-evenly;   <- vertical spacing
}

---

Code used :-

HTML

<div class="box-wrapper">
    <div class="box box-1"><h2>Box 1</h2><p>...</p></div>
    <div class="box box-2"><h2>Box 2</h2><p>...</p></div>
    <div class="box box-3"><h2>Box 3</h2><p>...</p></div>
    <div class="box box-4"><h2>Box 4</h2><p>...</p></div>
    <div class="box box-5"><h2>Box 5</h2><p>...</p></div>
</div>

CSS

.box-wrapper {
    border: 10px solid #222;
    display: flex;

    /* Try these one by one: */
    justify-content: flex-start;    /* default */
    /* justify-content: flex-end; */
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* justify-content: space-around; */
    /* justify-content: space-evenly; */
}

---

Quick Comparison

Value           | Edge space | Between space
----------------|------------|---------------
flex-start      | none       | none (packed)
flex-end        | none       | none (packed)
center          | equal      | none (packed)
space-between   | none       | equal
space-around    | half       | full
space-evenly    | equal      | equal

---

Key Points

✅ justify-content works on the FLEX CONTAINER not the items
✅ It aligns along the MAIN AXIS (horizontal in row, vertical in column)
✅ Default value is flex-start
✅ space-evenly gives the most uniform spacing including edges
✅ space-between is ideal for navbars (first and last item at edges)
✅ For column direction, set a height on the container to see the effect
✅ justify-content has no effect if items already fill the full main axis

________________________________________________________________________________________________________________________________________________

5. DAY 5
DATE 06/08/2026
TOPIC :- Flexbox align-items, align-content & flex-wrap

In this chapter we learn about cross axis alignment
using align-items, align-content and flex-wrap.

---

Quick Recap of All 3 Axes-Based Properties

Property         | Works on    | Axis
-----------------|-------------|------------------
justify-content  | container   | Main Axis
align-items      | container   | Cross Axis
align-content    | container   | Cross Axis (multi-line only)

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
|                           |
|                           |
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

Active code in this file (flex-direction: column)

.box-wrapper {
    display: flex;
    flex-direction: column;     <- main axis is now vertical
    height: 400px;              <- needed for column layout
    flex-wrap: wrap;            <- items wrap to next column
    align-items: flex-start;    <- items align to cross start (left)
    align-content: space-between; <- space between columns
    justify-content: space-between; <- space between items in each column
}

---

Also explored (commented out examples)

/* Row layout with wrap and full alignment control */
.box-wrapper {
    height: 700px;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: space-around;
    justify-content: space-between;
}

/* Simple centered row layout */
.box-wrapper {
    align-items: center;
    justify-content: space-between;
}

---

Code used :-

HTML

<div class="box-wrapper">
    <div class="box box-1"><h2>Box 1</h2><p>...</p></div>
    <div class="box box-2"><h2>Box 2</h2><p>...</p></div>
    <div class="box box-3"><h2>Box 3</h2><p>...</p></div>
    <div class="box box-4"><h2>Box 4</h2><p>...</p></div>
    <div class="box box-5"><h2>Box 5</h2><p>...</p></div>
</div>

CSS

.box-wrapper {
    display: flex;
    flex-direction: column;
    height: 400px;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: space-between;
    justify-content: space-between;
}

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

5. DAY 4
DATE 06/05/2026
TOPIC :- Flexbox flex-direction

In this chapter we learn about defining the direction of the main axis
using the flex-direction property[cite: 4].

---

Quick Recap of Main Axis vs. Cross Axis

Property Value          | Main Axis Direction   | Cross Axis Direction
------------------------|-----------------------|-----------------------
flex-direction: row     | Left to Right         | Top to Bottom
flex-direction: column  | Top to Bottom         | Left to Right

---

1. flex-direction

Controls the direction in which flex items are placed inside the container,
establishing the main axis[cite: 4].

Values:-

flex-direction: row             <- DEFAULT, main axis starts from left to right[cite: 4]
flex-direction: row-reverse     <- main axis starts from right to left[cite: 4]
flex-direction: column          <- main axis starts from top to bottom[cite: 4]
flex-direction: column-reverse  <- ACTIVE, main axis starts from bottom to top[cite: 4]

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
    border: 10px solid #222;[cite: 4]
    display: flex;[cite: 4]
    flex-direction: column-reverse; /* Main Axis start from Bottom to Top of Flexbox Container */[cite: 4]
}

---

Also explored (commented out examples in style.css)

/* Main Axis start from left to end to right of Flexbox Container */
/* flex-direction: row; */[cite: 4]

/* Main Axis start from right to end to left of Flexbox Container */
/* flex-direction: row-reverse; */[cite: 4]

/* Main Axis start from Top to end to Bottom of Flexbox Container */
/* flex-direction: column; */[cite: 4]

---

Code used :-

HTML (index.html)

<div class="box-wrapper">[cite: 3]
    <div class="box box-1"><h2>Box 1</h2><p>...</p></div>[cite: 3]
    <div class="box box-2"><h2>Box 2</h2><p>...</p></div>[cite: 3]
    <div class="box box-3"><h2>Box 3</h2><p>...</p></div>[cite: 3]
    <div class="box box-4"><h2>Box 4</h2><p>...</p></div>[cite: 3]
    <div class="box box-5"><h2>Box 5</h2><p>...</p></div>[cite: 3]
</div>[cite: 3]

CSS (style.css)

.box-wrapper{
    border: 10px solid #222;[cite: 4]
    display: flex;[cite: 4]
    flex-direction: column-reverse;[cite: 4]
}
.box{
    border: 1px solid #666;[cite: 4]
}
.box-1{ background: lightblue; }[cite: 4]
.box-2{ background: lightcoral; }[cite: 4]
.box-3{ background: lightcyan; }[cite: 4]
.box-4{ background: lightgoldenrodyellow; }[cite: 4]
.box-5{ background: lightsalmon; }[cite: 4]

---

Key Points

✅ flex-direction determines what is considered the "Main Axis"[cite: 4]
✅ row layouts lay items horizontally, column layouts lay items vertically[cite: 4]
✅ reverse values (-reverse) flip the starting position and order of items[cite: 4]
✅ Changing the direction shifts how formatting properties like justify-content apply
____________________________________________________________________________________________________________________________________

25. DAY 5
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
   ____________________________________________________________________________________________________________________________________________________________________________________________________