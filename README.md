# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/Screenshot%202023-06-27%20201407.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/introsectionwithdropdown-TBWnOb5MLF](https://www.frontendmentor.io/solutions/introsectionwithdropdown-TBWnOb5MLF)
- Live Site URL: [https://tahobbit11.github.io/intro-section-with-dropdown/](https://tahobbit11.github.io/intro-section-with-dropdown/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

I learned how to make a sidebar pop out and display as well as a drop down menu

To see how you can add code snippets, see below:

```html
<div class="nav-body">
          <ul class="nav-list">
            <li class="listed-item">
              <a href="#">Features</a>
              <img src="./images/icon-arrow-down.svg" alt="arrow down" class="down-arrow">
              <img src="./images/icon-arrow-up.svg" alt="arrow up" class="up-arrow hide-arrow">
              <ul class="nested-list"  id="feature">
                <li>
                  <img src="./images/icon-todo.svg" alt="todo">
                  Todo list
                </li>
                <li>
                  <img src="./images/icon-calendar.svg" alt="calendar">
                  Calendar
                </li>
                <li>
                  <img src="./images/icon-reminders.svg" alt="reminder">
                  Reminder
                </li>
                <li>
                  <img src="./images/icon-planning.svg" alt="planning">
                  Planning
                </li>
              </ul>
            </li>
            <li class="listed-item">
              <a href="#">Company</a>
              <img src="./images/icon-arrow-down.svg" alt="arrow down" class="down-arrow">
              <img src="./images/icon-arrow-up.svg" alt="arrow up" class="up-arrow hide-arrow">
              <ul class="nested-list"  id="company">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li class="item"><a href="#">Careers</a></li>
            <li class="item"><a href="#">About</a></li>
          </ul>
          <div class="buttons">
            <button class="login">Login</button>
            <button class="register">Register</button>
          </div>
        </div>
```
```css
  .nested-list {
    color: hsl(0, 0%, 41%);
    margin-left: 1rem;
    padding: 0;
    list-style: none;
    height: 0;
    width: 0;
    overflow: hidden;
  }

  .show-nested-list {
    width: auto;
    height: auto;
  }
```
```js
listedItem.forEach((list) => {
    list.addEventListener("click", (e) => {
        let element = e.currentTarget;
        const nestedList = element.querySelector(".nested-list");
        const upArrow = element.querySelector(".up-arrow");
        const downArrow = element.querySelector(".down-arrow");
        if(nestedList.classList.contains("show-nested-list")){
            upArrow.classList.add('hide-arrow');
            downArrow.classList.remove('hide-arrow');
            nestedList.classList.remove('show-nested-list');
        } else {
            upArrow.classList.remove('hide-arrow');
            downArrow.classList.add('hide-arrow');
            nestedList.classList.add('show-nested-list');
        }
    })
})
```

### Continued development

I could in the future make some animations for the drop down and side bar

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)