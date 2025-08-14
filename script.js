// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.

let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';

//ALTERNATIVE PROCESS;
// elementH1 = document.createElement('h1');
// console.log(elementH1);
// mainEl.appendChild(elementH1);
// elementH1.textContent= 'DOM Manipulation';

mainEl.innerHTML = "<h1>DOM MANIPUALATION</h1>"
mainEl.classList.add('flex-ctr');
console.log(mainEl);

// /Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.
let topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

/*
Iterate over the entire menuLinks array and for each "link" object:
Create an <a> element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the topMenuEl element. */

var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

for (links of menuLinks) {
  let anchor = document.createElement('a');
  anchor.setAttribute("href", links.href);
  anchor.textContent = `${links.text}`;
  topMenuEl.append(anchor);
}
// console.log(anchor);

/*
  Part 2: Adding Additional HTML and CSS
One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable.
In order to facilitate this, add the following additional "sub-menu" <nav> element to the index.html file within your <header> element, beneath the existing <nav> element
*/

// let header = document.querySelector('header');
// let nav =document.createElement('nav');
// header.append(nav);
// header.lastChild.setAttribute("id",'sub-menu');
// console.log(header);

/*Part 3: Creating the Submenu
A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
All future steps should be completed within the index.js file.
1 -Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
2 -Set the height subMenuEl element to be "100%".
3 -Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
4 -Add the class of flex-around to the subMenuEl element. */

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
console.log(subMenuEl);

/*Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
Set the CSS position property of subMenuEl to the value of absolute.
Set the CSS top property of subMenuEl to the value of 0.*/
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

// ---------------PART 4---------------

/*`1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
 2 .Attach a delegated 'click' event listener to topMenuEl.
 --The first line of code of the event listener function should call the event object's preventDefault() method.
--The second line of code of the function should immediately return if the element clicked was not an <a> element.
--Log the content of the <a> to verify the handler is working.*/

// let topMenuLinks = topMenuEl.childNodes;
// console.log("element a", topMenuLinks);

// for (let i = 0; i < topMenuLinks.length; i++) {
//   console.log("element a", topMenuLinks[i]);

// }

// topMenuEl.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (e.target.tagName !== 'A') {
//     return;

//   }
//   let active = e.target.classList.contains('active');


//   for (const link of topMenuLinks) {
//     link.classList.remove('active');
//   }

//   if (active) {
//     e.target.classList.remove('active');
//   } else {
//     e.target.classList.add('active');
//   }


//   console.log(e.target.innerText.toLowerCase());

// });

/* Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:

// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error! */





// -------------------PART 5----------
/*Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
 a) If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.

 b) Otherwise, set the CSS top property of subMenuEl to 0.
 Hint: Caching the "link" object will come in handy for passing its subLinks array later.*/



let topMenuLinks = topMenuEl.childNodes;
console.log("element a", topMenuLinks);

for (let i = 0; i < topMenuLinks.length; i++) {
  console.log("element a", topMenuLinks[i]);

}

topMenuEl.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'A') {
    return;

  }
  let active = e.target.classList.contains('active');


  for (const statusLink of topMenuLinks) {
    statusLink.classList.remove('active');
  }

  if (active) {
    e.target.classList.remove('active');
  } else {
    e.target.classList.add('active');
  }


  let clickedLink = e.target.textContent;
  let linkObject;
  console.log("i am cliked", clickedLink);

  for (const link of menuLinks) {
    console.log('tada', link.text);
    if (clickedLink == link.text) {
      linkObject = link;
    }
  }

  if (clickedLink && linkObject.subLinks) {
    subMenuEl.style.top = '100%';
    buildSubmenu(linkObject.subLinks);
  } else {
    subMenuEl.style.top = 0;
  }

  console.log(e.target.innerText.toLowerCase());

});

function buildSubmenu(subLinks){
  subMenuEl.remove.textContent;
  for(const item of subLinks){
    let anchor = document.createElement('a');
    anchor.setAttribute("href", item.href);
    anchor.textContent = `${item.text}`;
  subMenuEl.append(anchor);
  }
}