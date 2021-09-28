## Introduction

This is an exercise app that allows a user to save tags for movies in a single page list. An movie can have a maximum of 5 tags and is removable, but not editable. Each movie in the list displays the name of the movie and date. Tags is persisted so that the tags remain across browser sessions. The list is also filterable by user defined tags through a simple search. The UI components are all created by pure css, without using any third party libraries

Please visit [deployed demo](https://movies-tags.vercel.app/)

## Note

I have implemented Redux to persist movie tags data and Context to handle search string. The reason I did this just to demostrate I am familiar with both of them.

## What I could have done better

This project is required to finish within 3 hours, therefore, time is everything. If given more time, I would definitely improve the following items.

1: try to come up with more efficient data structure for the search algorithm, currently it is stored as an object
with movie id as the key and an array of tags as the property. There maybe more efficient way to handle this to
reduce computation demand.

2: I have satisified 95% of the UI requirement according to the given screenshot design, and I have also implemented partial mobile responsiveness at the last minute, however, I did not have enough time to make it perfect. If I had more time, I would have designed a better mobile layout and refine the css to reflex that design. Also in mobile view, the tags may not display properly right now when they are longer than expected.
So I would have spent more time to set up the grid system
for the mobile view.

## Technology used

ReactJS, Redux
