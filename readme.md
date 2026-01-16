What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Id is always unique.if we need to work on certain element we use id and in js we access it by writing getElementById
on the other hand, when we work with multiple element we access by using getElementByClassName
finally when we want to access only 1 element  we use queryselector but when we want every element we use querySelectorAll
-----------------------------------------------



How do you create and insert a new element into the DOM?
Ans: document.createElement = "div"
we use append to insert a new element
for instance: element.append(newElement)
------------------------------------------------


What is Event Bubbling and how does it work?
Ans: Event bubbling is a concept where we can access upper elements and their roots
---------------------------------------------------
What is Event Delegation in JavaScript? Why is it useful?
Ans:event delegation is based on event bubbling.it uses single event listener to access its childs.

it is useful bcz we don't need to add so many event listeners, it also save ram space. it is more time saving

---------------------------------------------------

What is the difference between preventDefault() and stopPropagation() methods?
Ans:sometimes page reloads automatically.preventDefault() helps to stop this
stopPropagation helps to stop event bubbling.