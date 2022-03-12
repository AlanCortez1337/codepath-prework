# Pre-work - *Memory Game*

**Memory Mania** is a Light & Sound Memory game for CodePath's SITE Program application. 

Submitted by: **Alan Cortez**

Time spent: **9** hours spent in total

Link to project: https://glitch.com/edit/#!/synonymous-cedar-parmesan

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- Added difficulty options which reveal more buttons, and faster clue reveal speed times depending on the difficulty
- Difficulty button turns yellow when a user beat that difficulty to display their triumph

## Video Walkthrough (GIF)

DIFFICULTY BUTTONS
![Difficulty Display](https://user-images.githubusercontent.com/78040578/156964885-b2ff323c-b5df-4ad3-8ee4-8f948ae0cbe9.gif)
BEATING THE TUTORIAL
![tutorial](https://user-images.githubusercontent.com/78040578/156965821-0e22c725-a2d9-471e-a7fa-315980cba29b.gif)
LOSING IN EASY MODE
![Losing in easy mode](https://user-images.githubusercontent.com/78040578/156969911-db196b94-423b-4faa-a3c5-0c4407d27f04.gif)
INSANE MODE EXAMPLE
![Insane mode example](https://user-images.githubusercontent.com/78040578/156972993-0e9073fb-5d9f-46b8-ac6e-ccc7962ee420.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- https://htmlcolorcodes.com/color-picker/
- https://www.w3schools.com/cssref/pr_font_font-style.asp
- https://www.w3schools.com/html/html_paragraphs.asp
- https://www.w3schools.com/cssref/pr_class_display.asp
- https://www.w3schools.com/jsref/jsref_push.asp
- https://www.w3schools.com/js/js_random.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge that stumped me while developing this project was fully understanding the capabilities of Javascript, HTML, and CSS. These three tools are merely something that I recently started learning upon deciding that I want to focus in web development. Personally, picking up on Javascript was the easiest of the three to comprehend since I am quite familiar with Python and in a way they are fairly similar. For instance, when developing the randomized pattern feature, I managed to nail the logic aspect due to previous experiences with Python. However, it was definitely a bit tricky when I wanted to write the code due to the significant syntax difference. Which led me to W3schools in order to find the proper syntax and information on how to import the random library in Javascript. Little did I know at the time that Javascript already had the Math library built into it, which was a nice change. Normally I love seeing at the top of my code all the imported libraries, and header files but I suppose this is more simple. On the other hand, I found a significant amount of time overwhelmed with all the tools and techniques I could do with HTML and CSS. Eventually, I feel I got a modest grip of these tools after looking up the documentation and first-hand practice. While I wish I could style this website a bit more, I am proud of the result and the additional features I added using these three tools. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I suppose one question that really stuck with me throughout this process is: what determines a good color palette? Is this merely subjective or are there web development rules set in place to dictate what the color palette of a website should be? I understand that there are definitely some grotesque combinations that should never be used, like lime green and pink. But would this be something that a web developer has to worry about or is this something fit for another role? These questions originated when I felt like trying to find a suitable color background for the website to make it different from the original template. It led to many websites but one tip that I kept finding myself back to was the color wheel. Funny enough, I struggled comprehending this wheel, eventually settling for a nice purple background with gray text. Is it really as simple as finding two great color combinations from the wheel and applying them on a website or is there more at play?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Two big things come to mind when I wonder what else I can add to this project. The first change I would make is definitely to fix the format of the text and buttons. What I had in mind was centering the crucial information like the description, the start and difficulty buttons according to the title's position. This is more of a simple change that I believe will go far in making the website more enjoyable, however my next idea is really ambitious. I want to create a new difficulty mode called “infinite” next to the current "insane" button. This would piggy back off of the functions I made for creating a random pattern and selecting a mode but add a unique twist. The idea is to keep pushing randomly generated numbers into the pattern variable until the user loses. What makes this unique from the rest is that in my vision it has a visible score box which displays how many rounds the user passes. That way, the idea of “trying to beat my last top score” is in the back of the players head which motivates them to play more and enjoy the game in a different way. In the end, there are many more features I can think of implementing but if I had more free time the previously mentioned features would be at the top of the list.

## Interview Recording URL Link

[My 5-minute Interview Recording]https://fullerton.zoom.us/rec/share/cG10ioi06uQXkQ2w_EBlkCfWdKjjXv4iic6AIUyPwjHm8DDqKcDwZF1S1qd6J3zK.AtPrN9J483YBjgC9?startTime=1647038186000 
(Passcode: sRfu$20T)

## License

    Copyright [Alan Cortez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
