#  JouV calculator


##  ***What is this proyect about?***
Jouv is simple **calculator** without any objetive but educational. It's a personal proyect just to practice what I've learned about Javascript,CSS, HTML and even programing (I already have made other personal proyect, but in other programming language). 


## ***Dependencies***

No, this proyect doesn't need any third party module/framework or library, just vanilla **Javascript**, **CSS** And **HTML.**
The only thing you need is a browser to run the **"program"** (Better if the browser is not a outdated one).
 <br></br>



- <a href="#Quick-start">Quick start</a>
  -  <a href="#to-the-final-user">To the final user</a>
  -  <a href="#to-developers">To developers</a>
  -  <a href="#proyect-strutucture">Proyect strutucture</a>
  -  <a href="#how-it-works">How it works</a>
  - <a href="#global-parentheses">Global parentheses</a>
- <a href="#documentation">Documentation</a>
- <a href="#lincense">Lincense</a>

<br></br>

# ***Quick start***

<a name="to-the-final-user"></a>

### ***To the final user***
As a "final consummer", this is just like a another calculator you've seen so is not difficult to understand how to use it. The caclulator is the intuituive enought to not write a manual.

<a name="to-developers"></a>

### ***To developers***
The proyect is strutuctured using a **MVC 'pattern'**, or that what it seems. The proyect is like works this way:

<a name="proyect-struture"></a>

## ***Proyect strutucture***
Theses are the main files/modules of the proyect: 

- The [view controller](index.html)
- The [logic controller](calculator/controller.js)
- The [input controller](input.js)
- The [ouput controller](render/output.js)

- And the [config file](config.js)

<a name="how-it-works"></a>

## ***How it works***
The program/calculator work this way:

When a button (virtual) is pressed the [view](index.html) call the [input()](input.js) function with the pressed button's information as arguments. 

The argument are: 

-  A character (can be a number) that match with the button's one
- A indentifier

E.g. : 
```Javascript
input("%","division-symbol");
```
If the character is a number, It's not necesary to write the second argument.

Then the input will be formating and adding to the buffer the characters it gets. but when the user is ready It will send the expression/buffer to the controller. 

The controller could:

- Resolve the mathematical expression and add it to the history.


-   Return the same buffer in case the expression is bad formated or incomplete and the controller can't do anything (users fault) or an error occured (program fault).

<a name="global-parentheses"></a>

## ***Global parentheses***

The controller only can resolve expressions inside parentheses. It resolve the expression inside the parentheses with the higest importance first and do the same till it has resolve all the expressions inside parentheses.

The parentheses  with the lowest importance are the **"global parentheses"** so they have inside the last  expression to solve.

So the **controller** always will put the buffer/expression inside a global parentheses no matter what in order to solve it (It means it  will be the last expression to solve).

Eg:  
-  **1+3+3+4** <--*Without global parentheses*

-  **+(1+3+3+4)** <--*After controller add them*

---
- **(2+3+4)  + (4+3)** <--*Without global parentheses*
-  **+( (2+3+4) + (4+3) )** <--*After controller add them*

<br></br>
### ***Final example***

A general view of how controller resolve a expression to understand better what is a **global parentheses**.
<br></br>

---
- **1+3+(2+(1*3)) + (1+9)**<--*Accept a expression*
---
- **+(1+3+(2+(1*3)) + (1+9))**<--*Puts the global parentheses*
---
-  **+(1+3+(2+3) + (1+9))**<--*Resolves the expression inside the parentheses with the higest importance*
---
- **+(1+3+5 + 10)**<--*Resolves the expressions inside the parentheses with the higest importance*
---
- **+(19)**<--*Resolves the last parentheses' expression (with the lowest importance)*
---
- **19** <---*Returns the result*
---
<br></br>

<a name="documentation"></a>

# ***Documentation*** (Coming soon...)

- [Dev documentation]() 
- [User documetation]()
- [User guide]()


<a name="lincense"></a>

 # ***Lincense***
 Thinking



<br></br>


----------


>Ronel E. Cruz 2021 january 5
