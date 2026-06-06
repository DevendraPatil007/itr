
DAY 4 
06/06/2026

01
foundations
CSS Units — What are they and why do they matter?
Every CSS property that involves a size, distance, or dimension needs a unit. A unit tells the browser: "this number means THIS much on screen." Without knowing units, you can't control layout responsively.

  CSS UNIT TREE
  ─────────────────────────────────────────────────────
                     CSS Units
                         │
          ┌──────────────┴──────────────┐
          │                             │
     ABSOLUTE                       RELATIVE
   (Fixed — never changes)    (Flexible — depends on context)
          │                             │
    ┌─────┼─────┐          ┌────────────┼────────────┐
    px   pt  cm/in/mm      %           em           rem
                                        │
                                  ┌─────┴──────┐
                              Viewport      Font-based
                             vw  vh  vmin vmax
  ─────────────────────────────────────────────────────
    
The fundamental question when choosing a unit is: "What should this value scale relative to?"

If you want it to scale with…	Use
Nothing — always fixed	px
Parent element's size	%
The element's own font size	em
The root (<html>) font size	rem
The browser window width	vw
The browser window height	vh
02
absolute units
Absolute Units — px, in, cm, pt deep dive
Absolute units produce the same visual size regardless of screen, parent, or user settings. They are fixed — they do not respond to zoom preferences or accessibility font size settings (with one exception: px in browsers can be affected by user zoom level).

  ABSOLUTE UNIT CONVERSIONS (exact)
  ─────────────────────────────────────────────────
  1 in  =  96 px   (CSS defines this exactly)
  1 cm  =  37.8 px  (1in / 2.54)
  1 mm  =  3.78 px
  1 pt  =  1.333 px  (1pt = 1/72 of an inch)
  1pc  =  16 px   (1 pica = 12 pt)

  So: 16px default browser font = 12pt = 0.167in
  ─────────────────────────────────────────────────
    
from your code — style.css (1_CSS_Units)
.para1 { font-size: 32px; /* direct pixel */ font-size: 96px; /* same as 1 inch */ font-size: 1in; /* 1 inch = 96px exactly */ font-size: 2.54cm; /* 2.54cm = 1inch = 96px */ font-size: 12pt; /* 16px * 0.75 = 12pt (16px default) */ border: 12pt solid red; /* same conversion */ }
Why px is the king of absolute units
px is the only absolute unit that directly corresponds to the screen's pixel grid. The others (in, cm, pt) are print-era units carried into CSS. In practice:

Use px for borders, outlines, box-shadows, and fine details
Avoid in, cm, pt for screen — they were designed for print
On high-DPI (Retina) displays, 1 CSS px = 2 or 3 physical pixels — the browser handles this automatically
⚠️ Problem with absolute units for font-size
If you set font-size: 16px and the user has increased their browser's base font size for accessibility, your text will NOT respect that — it stays at 16px. This is why relative units (rem) are preferred for text.
03
relative units
% (Percentage) — Parent-relative sizing
The percentage unit is one of the most commonly used in CSS, but its behaviour depends on which property you apply it to. The general rule is: % is always relative to the parent element's corresponding value.

  HOW % WORKS — PROPERTY BY PROPERTY
  ─────────────────────────────────────────────────────────────
  Property          │  % is relative to...
  ──────────────────┼──────────────────────────────────────────
  width             │  Parent's WIDTH
  height            │  Parent's HEIGHT (only if parent has fixed height)
  padding (all)     │  Parent's WIDTH  ← !! both top/bottom too
  margin (all)      │  Parent's WIDTH  ← !! same rule
  font-size         │  Parent's font-size
  ─────────────────────────────────────────────────────────────
    
from your code — style.css (1_CSS_Units)
div { font-size: 10px; width: 50%; /* 50% of the div's parent (body) */ } p { font-size: 200%; /* 200% of PARENT font-size = 200% × 10px = 20px */ width: 50%; /* 50% of div's width */ margin: 10px auto; }
% font-size — inheritance chain example
  html                →  16px (browser default)
    body              →  16px (inherits)
      div             →  font-size: 10px  (explicit)
        p             →  font-size: 200%  =  200% × 10px  =  20px
          span        →  font-size: 150%  =  150% × 20px  =  30px ← compounds!

  Each level multiplies — this is why % for font-size can spiral out of control
    
💡 Best use of %
Widths and layouts — not font sizes. width: 50% on a child means "take up half the parent's width." This is perfect for responsive columns and flexible layouts.
04
relative units
rem — Root EM explained completely
rem stands for Root EM. It always looks at one fixed place: the <html> element's font-size. No matter how deeply nested an element is, 1rem is always the same computed value.

  REM LOOKUP CHAIN
  ─────────────────────────────────────────────────────────
  Every element that uses rem →→→→→ looks at <html> font-size
                                              │
                                   ┌──────────┘
                                   ▼
                           Default: 16px
                           With trick: 62.5% → 10px

  NO MATTER HOW NESTED:
  body → div → section → article → p { font-size: 2rem }
                                              │
                                   still looks here →  html {16px}
                                              =  2 × 16px  =  32px
  ─────────────────────────────────────────────────────────
    
The 62.5% trick — from your code
from your code — style.css (2_CSS_Units)
html { font-size: 62.5%; /* Browser default font-size = 16px 62.5% of 16px = 10px So now: 1rem = 10px Mental math becomes EASY: 1.6rem = 16px (normal text) 2.4rem = 24px (small heading) 3.2rem = 32px (medium heading) 4.8rem = 48px (large heading) */ } .text-content { font-size: 3rem; /* 3 × 10px = 30px */ border: 1rem solid red; /* 1 × 10px = 10px border */ margin: 0.5rem; /* 5px — note: space before rem = bug in original */ padding: 2.5rem; /* 2.5 × 10px = 25px */ }
:root vs html — are they the same?
Yes — in HTML documents, :root and html select the same element. :root has slightly higher specificity but both set the rem baseline.

html { font-size: 62.5%; } /* ← your code uses this */ :root { font-size: 62.5%; } /* ← same result, seen in 4_em_rem_px */
📌 Why rem is best for font-size
rem does NOT compound. If a parent is 2rem and a child is also 2rem, the child is still 2 × html-font = 20px — it doesn't multiply by the parent. This makes global font scaling trivial: change one value on html and every rem value on the page adjusts proportionally.
05
relative units
em — Element EM and the compounding danger
em stands for the em square in typography — historically the size of the letter M. In CSS, 1em = the computed font-size of the current element. When used on font-size itself, it refers to the parent's font-size.

  em LOOKUP RULE:
  ──────────────────────────────────────────────────────────
  When em is on font-size    →  looks at PARENT's font-size
  When em is on anything else →  looks at OWN (computed) font-size
  ──────────────────────────────────────────────────────────

  Example from your code (3_CSS_Units):

  body { font-size: 16px }          ← default

  h1 { font-size: 2em }             ← 2 × PARENT(body=16px) = 32px
       border: 2em solid black;     ← 2 × OWN(32px) = 64px  ← !!
       padding: 2em;                ← 2 × 32px = 64px

  .box1 { font-size: 20px }         ← parent for h1 inside

  .box1 h1 { font-size: 2em }       ← 2 × PARENT(box1=20px) = 40px
              border: 2em;          ← 2 × OWN(40px) = 80px
    
from your code — style.css (3_CSS_Units)
h1 { font-size: 2em; /* inherits parent font-size, doubles it */ border: 2em solid black; /* 2 × h1's OWN font-size */ padding: 2em; /* same — scales with h1's font-size */ } .box1 { font-size: 20px; /* changes the parent context for h1 inside */ } /* h1 outside .box1: 2em = 2×16 = 32px h1 inside .box1: 2em = 2×20 = 40px ← different! */
The Compounding Problem
  html  { font-size: 16px }
    ul  { font-size: 0.8em }  → 0.8 × 16 = 12.8px
      ul  { font-size: 0.8em }  → 0.8 × 12.8 = 10.24px   ← shrinks!
        ul  { font-size: 0.8em }  → 0.8 × 10.24 = 8.19px  ← too small!

  This is the em compound problem — nested elements keep multiplying
  rem would stay at 0.8 × 16 = 12.8px no matter how deep
    
⚠️ Never use em for font-size on components that nest
Lists inside lists, cards inside cards — em font-size compounds at each level. Use rem for font sizes on any component that might be nested. Use em only for padding/margin where you want it to scale with the element's own text size.
06
decision guide
em vs rem vs px — Decision Framework
Your course code gives this exact summary in comments. Here it is explained fully:

from your code — style.css (4_em_rem_px) comments
/* font-size → rem padding & margin → em thin border → px layout widths → % */
Property	Unit	Why
font-size	rem	Consistent everywhere. No compounding. Easy global scaling.
padding	em	Scales with the button/card's own text size. Bigger text → bigger padding automatically.
margin	em or rem	Either works. em gives proportional spacing; rem gives uniform spacing.
border	px	Borders should be crisp pixel values — 1px, 2px. No need to scale.
width / layout	%	Makes columns flexible. Responds to parent container size.
full-screen sections	vw / vh	Fills viewport regardless of content or parent size.
Worked example from your code (4_em_rem_px)
  :root { font-size: 62.5% }     → html = 10px base

  h1 {
    font-size: 2.8rem   → 2.8 × 10px = 28px    ← uses rem ✓
    border: 4px         → fixed thin border     ← uses px ✓
    padding: 1rem       → 1 × 10px = 10px       ← could use em too
  }

  IF padding was 1em:
    em looks at h1's OWN font-size = 28px
    padding = 1 × 28px = 28px  ← much larger padding

  IF padding was 1rem:
    rem looks at root = 10px
    padding = 1 × 10px = 10px  ← smaller, consistent

  Pick em when you want padding to feel proportional to text.
  Pick rem when you want uniform spacing across all elements.
    
07
viewport units
Viewport Units — vw, vh, vmin, vmax
Viewport units are relative to the browser window size, not to any element or font. 1vw = 1% of the viewport's width. They update when the window is resized.

  ┌──────────────────────────────────────────────────┐
  │                 BROWSER WINDOW                   │
  │  ◄────────────── 100vw ──────────────►           │
  │  ▲                                               │
  │  │  ← 50vw →                                     │
  │  │  ┌────────┐                                   │
  │  │  │ box    │ width:50vw  height:50vh            │
  │ 100vh │        │                                  │
  │  │  └────────┘                                   │
  │  ▼  ▲                                            │
  └─────┼────────────────────────────────────────────┘
        └── 50vh
    
Unit	Full Name	= 1% of...	Use Case
vw	Viewport Width	Browser window width	Full-width sections, hero banners
vh	Viewport Height	Browser window height	Full-screen hero (height:100vh)
vmin	Viewport Minimum	Smaller of vw or vh	Square elements that fit any orientation
vmax	Viewport Maximum	Larger of vw or vh	Background fills, oversized elements
vw vs % — The Critical Difference (from your code comments)
  SCENARIO: .box1 is 50% wide. h1 is inside .box1.

  .box1 { width: 50%; }     → box1 = 50% of body = 50vw (approx)

  h1 { width: 70%; }        → 70% of PARENT (.box1)
                              = 70% of 50vw = 35vw

  h1 { width: 70vw; }       → 70% of VIEWPORT directly
                              = 70vw  (ignores .box1 completely)

  ─────────────────────────────────────────────────────
  %   = relative to parent          CARES about parent
  vw  = relative to viewport        IGNORES parent
  ─────────────────────────────────────────────────────
    
from your code — style.css (5_Viewport_Units)
/* full-viewport colored box */ .box { height: 100vmax; /* 100% of the LARGER dimension */ background-color: aqua; } /* Common hero section pattern: */ .hero { width: 100vw; /* full window width */ height: 100vh; /* full window height */ }
💡 vmin use case
If you want a square element that is always visible without scrolling: width: 80vmin; height: 80vmin; — it uses 80% of whichever dimension is smaller, so it fits on both portrait and landscape screens.
08
css floats
CSS Floats — How float works internally
The float property was originally designed for magazine-style text wrapping around images — like a photo with text flowing around it. It was later repurposed for multi-column layouts before Flexbox and Grid existed.

What float actually does to the document flow
  NORMAL FLOW (no float):
  ┌──────────────────────────────────┐
  │  Block A  (takes full width)     │
  ├──────────────────────────────────┤
  │  Block B  (next row)             │
  ├──────────────────────────────────┤
  │  Block C  (next row)             │
  └──────────────────────────────────┘

  WITH float: left on A:
  ┌──────────────────────────────────┐
  │  ┌────────┐  Block B text wraps  │  ← B sees A floated,
  │  │ Block A│  around the float.   │     wraps beside it
  │  │ float: │  remaining text goes │
  │  │  left  │  here →              │
  │  └────────┘                      │
  ├──────────────────────────────────┤
  │  Block C  (below the float)      │  ← C clears the float
  └──────────────────────────────────┘
    
Float removes the element from normal flow
A floated element is lifted out of document flow. It no longer takes up space in the normal block layout. Other block elements act as if the float doesn't exist — except for inline content (text) which still wraps around it.

from your code — style.css (6_CSS_Floats)
.mozart { width: 50%; background-color: lightgoldenrodyellow; float: left; /* pushed to left, out of flow */ } .beethoven { width: 50%; float: left; /* also floated left — sits beside .mozart */ background-color: lightsalmon; } /* Result: two side-by-side columns, each 50% wide */
.mozart
float:left 50%
.beethoven
float:left 50%
← these two sit side by side because both are float:left
4-column layout from your index1.html
/* style2.css — 4 floated columns */ .mozart, .beethoven, .bach, .paganini { width: 25%; /* 4 × 25% = 100% */ float: left; padding: 20px; }
.mozart
25%
.beethoven
25%
.bach
25%
.paganini
25%
← 4 floated columns, each 25% wide = 100% total
📌 box-sizing: border-box is required
Without * { box-sizing: border-box }, adding padding: 20px to a width: 25% element makes it 25% + 40px wide — breaking the layout. border-box includes padding inside the width, so total stays at 25%.
09
float collapse & clearfix
Float Collapse & Clearfix — Full Theory
The Float Collapse Problem
When all children of a container are floated, the parent has no in-flow content to size itself against — so its height collapses to zero. This causes the border/background of the parent to disappear.

  FLOAT COLLAPSE:

  .fav-musicians (parent)
  ┌─────────────────────────────────┐  ← border doesn't show!
  │ height = 0 (collapsed!)         │
  └─────────────────────────────────┘
  ┌───────────┐┌───────────┐           ← floats hang outside
  │  .mozart  ││ .beethoven│              parent's boundary
  │ float:left││ float:left│
  └───────────┘└───────────┘
  ┌─────────────────────────────────┐
  │  .box div (next element)        │
  └─────────────────────────────────┘
  (floats overlap .box because parent didn't contain them)
    
Fix 1 — Clearfix div (your index.html approach)
Add an empty div at the end of the floated parent with clear: both. This forces the parent to extend below the floats.

<!-- HTML --> <div class="fav-musicians"> <div class="mozart">...</div> <div class="beethoven">...</div> <div class="clearfix"></div> <!-- the fix --> </div> /* CSS */ .clearfix { clear: both; /* this element won't sit beside any float */ }
⚠️ Downside of Fix 1
It pollutes HTML with a meaningless empty div. Not semantic. If you forget it, layout breaks silently.
Fix 2 — clear on next sibling (style.css .box approach)
.box { clear: both; /* the element AFTER the floated parent clears them */ }
Fix 3 — ::after pseudo-element (modern, clean — style2.css)
This is the cleanest approach. A CSS-generated empty block is inserted inside the parent, after all floated children, forcing the parent to expand.

from your code — style2.css (6_CSS_Floats)
.fav-musicians::after { content: ""; /* required — creates the pseudo-element */ display: block; /* must be block to take up vertical space */ clear: both; /* forces it below all floats */ } /* No extra HTML needed. The parent now wraps its floated children. */
  AFTER ::after clearfix:

  .fav-musicians (parent)
  ┌──────────────────────────────────────┐
  │  ┌───────────┐  ┌───────────┐        │  ← parent now
  │  │  .mozart  │  │ .beethoven│        │    wraps children
  │  └───────────┘  └───────────┘        │
  │  [::after — clear:both — invisible]  │
  └──────────────────────────────────────┘
  ┌──────────────────────────────────────┐
  │  .box (sits cleanly below)           │
  └──────────────────────────────────────┘
    
How clear works
Value	Meaning
clear: left	Element won't sit beside any left float
clear: right	Element won't sit beside any right float
clear: both	Element won't sit beside any float — most common
clear: none	Default — floats can be beside it
10
css positions
CSS Positions — All 5 values in depth
The position property controls how an element is placed in the document and what reference point the browser uses for its top/right/bottom/left offsets.

  POSITION VALUES OVERVIEW
  ─────────────────────────────────────────────────────────────────
  Value     │ In Flow? │ Reference Point        │ Scrolls?
  ──────────┼──────────┼────────────────────────┼─────────────────
  static    │   YES    │ Normal flow (no offset) │  YES (normal)
  relative  │   YES    │ Own original position   │  YES
  absolute  │   NO     │ Nearest positioned anc. │  YES (with page)
  fixed     │   NO     │ Viewport                │  NO (stays put)
  sticky    │   YES    │ Own position / viewport │  BOTH
  ─────────────────────────────────────────────────────────────────
    
static — the default
Every element starts as position: static. It sits in the normal document flow. The top, left, right, bottom properties have no effect. z-index also has no effect.

div { position: static; /* default — you almost never write this explicitly */ top: 50px; /* IGNORED — has no effect on static */ }
relative — offset from self
The element stays in document flow (its original space is preserved) but it is visually shifted using top/right/bottom/left offsets. Other elements don't rearrange — they behave as if the element is still in its original spot.

.container h1 { position: relative; top: 150px; /* moves DOWN 150px from original position */ left: 50px; /* moves RIGHT 50px from original position */ /* The gap where it was still exists in flow */ }
📌 Key job of relative
position: relative on a PARENT makes it the positioning anchor for any position: absolute children. This is the most common reason to set an element to relative even when you don't move it.
absolute — removed from flow, anchored to parent
The element is completely removed from document flow. Other elements act as if it doesn't exist. Its top/left/right/bottom offsets are relative to its nearest ancestor with a non-static position. If none exists, it uses the <html> element (the initial containing block).

  ABSOLUTE ANCHOR SEARCH:
  ─────────────────────────────────────────────────────────
  absolute child looks upward through its ancestors:
  
  <html>  position: static (skip)
    <body>  position: static (skip)
      <section>  position: static (skip)
        <div class="container">  position: RELATIVE  ← STOP HERE
          <h1>  position: absolute                   ← anchors to .container
  ─────────────────────────────────────────────────────────
  If NO positioned ancestor found → anchors to <html>
  ─────────────────────────────────────────────────────────
    
from your code — style.css (7_CSS_Positions)
.container { position: relative; /* becomes the anchor */ width: 800px; height: 500px; } .container h1 { position: absolute; left: 50%; /* 50% of .container's width */ top: 50%; /* 50% of .container's height */ transform: translate(-50%, -50%); /* Problem: left:50% places the LEFT EDGE at center Solution: translate(-50%) shifts the element LEFT by 50% of its OWN width → true center */ }
  CENTERING EXPLAINED STEP BY STEP:
  ┌────────────────────────────────────┐ .container (800×500)
  │                  │                 │
  │                  ▼ left:50%        │
  │                  ┌─────────┐       │  ← h1's LEFT edge is at
  │                  │   h1    │       │    center — not quite right
  │                  └─────────┘       │
  │                                    │
  │  After transform:translate(-50%,-50%):
  │           ┌─────────┐             │
  │           │   h1    │             │  ← h1 shifted left by
  │           └─────────┘             │    half its own width
  │                ↑ true center ✓    │
  └────────────────────────────────────┘
    
fixed — anchored to the viewport
Like absolute but its reference point is always the browser viewport, not any ancestor. It is removed from flow and never scrolls — it stays pinned to the same spot on screen even as the page scrolls.

.container h3 { position: fixed; top: 0px; /* sticks to top of viewport */ bottom: 0px; /* or bottom of viewport */ z-index: 10; /* sit above other content */ } /* Use for: sticky navbars, floating chat buttons, cookie banners */
sticky — the hybrid
Sticky behaves like relative while scrolling — it stays in normal flow. But when the page scrolls past a defined threshold, it sticks to that position like fixed. It then unsticks when the user scrolls past the parent container's boundary.

  STICKY PHASES:
  ─────────────────────────────────────────────────────────
  Phase 1: Before threshold → behaves like position:relative
           Element is in normal flow
  
  Phase 2: User scrolls past top:0 threshold → sticks!
           Element behaves like position:fixed
           Stays visible at top of screen
  
  Phase 3: User scrolls past the PARENT container's bottom
           Element unsticks again and scrolls away
  ─────────────────────────────────────────────────────────
  Requires: top / bottom / left / right value to activate!
  Without it, sticky has NO effect — common gotcha.
  ─────────────────────────────────────────────────────────
    
from your code — style.css (7_CSS_Positions)
h3 { background: black; color: #fff; position: sticky; top: 0px; /* triggers sticking when h3 reaches top of viewport */ } /* The h3 scrolls normally until it hits the top, then it freezes there while the rest of the page continues scrolling */
sticky	fixed
In document flow?	✅ Yes	❌ No
Affects layout of siblings?	✅ Yes	❌ No
Reference for offset	Own position / viewport	Viewport always
Stays inside parent?	✅ Yes (unsticks at parent boundary)	❌ No
Requires top/bottom?	✅ Yes (mandatory)	✅ Yes (usually)
11
z-index
z-index & Stacking Contexts
z-index controls which element appears on top when elements overlap. Think of it as layers in Photoshop — higher z-index = closer to the viewer.

  Z-INDEX STACK (viewed from the side):
  
  Screen (you) ──►  z:10 [navbar]
                    z:5  [modal overlay]
                    z:1  [tooltip]
                    z:0  [normal content] (auto = 0)
                    z:-1 [background decoration]
  
  Rules:
  • Only works on POSITIONED elements (not static)
  • Higher number = in front
  • Negative values = behind normal flow
  • Default (auto) = same as 0
    
z-index: 0 (base)z-index: 1z-index: 5z-index: 10 (top)
from your code — style.css (7_CSS_Positions)
.container h1 { z-index: -1; /* goes BEHIND normal content */ } .container h3 { position: fixed; z-index: 10; /* auto = 0, so 10 puts it above everything */ }
⚠️ z-index only works on positioned elements
If an element has position: static (default), setting z-index has absolutely no effect. You must set position to relative, absolute, fixed, or sticky first.
Stacking context
A stacking context is an isolated z-index group. Elements inside a stacking context are layered among themselves first, then the whole group is layered against outside elements. A new stacking context is created by: position + z-index, opacity < 1, transform, filter, and a few others. This is why a child with z-index: 9999 sometimes won't appear above a sibling — its parent's stacking context is lower.

★ Master Cheatsheet — CSS Part 3
📏 Units — When to Use
font-size
rem (consistent)
padding / margin
em (scales with text)
border
px (crisp, fixed)
layout width
% (parent-relative)
full viewport
vw / vh
🔢 rem Trick
html { font-size: 62.5% }
→ 1rem = 10px
1.6rem
= 16px
2.4rem
= 24px
3.2rem
= 32px
rem vs em
rem = root, em = own
🌊 Viewport Units
vw
% of viewport width
vh
% of viewport height
vmin
% of smaller dimension
vmax
% of larger dimension
vw vs %
vw ignores parent
🎈 Floats
float: left/right
out of flow, beside
clear: both
stop sitting beside float
clearfix div
empty div with clear:both
::after method
content:""; display:block; clear:both
collapse fix
either clearfix method
📍 Positions
static
default, no offset, no z-index
relative
in flow, offset from self, anchor for absolute
absolute
out of flow, anchors to nearest non-static ancestor
fixed
out of flow, anchors to viewport, never scrolls
sticky
in flow → sticks at threshold → unsticks at parent edge. Needs top value!
centering trick
parent:relative + child:absolute + left:50% top:50% + translate(-50%,-50%)
z-index
higher = front. Only on positioned (non-static) 

