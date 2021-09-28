## Introduction

This is an exercise app that allows a user to save tags for movies in a single page list. An movie can have a maximum of 5 tags and is removable, but not editable. Each movie in the list displays the name of the movie and date. Tags is persisted so that the tags remain across browser sessions. The list is also filterable by user defined tags through a simple search. The UI components are all created by pure css, without using any third party libraries

Please visit [deployed demo](https://movies-tags.vercel.app/)

## Note

I have implemented Redux to persist movie tags data and Context to handle search string. The reason I did this just to demostrate I am familiar with both of them.

Also, I added dummy movie data copied from the mockAPI, because the key provided is ratelimited and even though I created my own key it still runs out of usage. Therefore, I added logic to use the dummy data in the case if data fetch is blocked by the provider. You should be able to exmine the logic from the MovieList component.

## What I could have done better

This project is required to finish within 3 hours, therefore, time is everything. If given more time, I would definitely improve the following items.

1: try to come up with more efficient data structure for the search algorithm, currently it is stored as an object
with movie id as the key and an array of tags as the property. There maybe more efficient way to handle this to
reduce computation demand.

2: I have satisified 95% of the UI requirement according to the given screenshot design, and I have also implemented partial mobile responsiveness at the last minute, however, I did not have enough time to make it perfect. If I had more time, I would have designed a better mobile layout and refine the css to reflex that design. Also in mobile view, the tags may not display properly right now when they are longer than expected.
So I would have spent more time to set up the grid system
for the mobile view.

3: to add more feature to improve user experience, for example, the error message, such as when user try to input more than 5 tags, or when they input the same tag,is only displayed as red text, I would definitely make the error message display to be more user friendly.
Also, I did not have time enough to put the magnifying glass to the search input according to the screenshot provided. I would definitly add that if I have more time.

4: I would consider adding another search function to filter the movies by name, or date, however, these are not required, they are just additional features to add to the backlog to further improve user experience.

5: I would consider adding colors to the tags, this is another additional feature to improve user experience.

## Technologies used

ReactJS, Redux
