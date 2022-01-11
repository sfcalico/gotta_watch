# Watch my stories

## Overview
A site on which you can search for movies and shows from the IMDB API and save specific results to your profile. There are separate pages to view your saved movies and saved shows (i.e. series). After you have watched any of them, you can toggle that on the saved pages, which will remove them from that page and push it to a fourth page that lists out all the shows and movies you've seen.

## User Stories
- When I arrive at the landing page, I can either log in or sign up for an account
- When I land on the home page, I can search for movies or shows from the IMDB API
- When I see search results, I can click on specific results to display more info about the selection
- When I see search results, I can click a save button that will save the selection to either my saved movies page or saved series page
- When I view my saved movies page or saved series page, I can click on a specific listing to show more info about the selection
- When I view my saved movies page or saved series page, I can delete a listing from my account so that it no longer appears on that page
- When I view my saved movies page or saved series page, I can indicate that I have watched the listing, which removes it from the current page and pushes it to my history page
- If I accidentally indicate that I've seen a movie when I haven't, I can edit my history page

## MVP functionality
- Users can sign up, login, and logout
- Users can edit their bio, which displays on the home page
- Users can use the IMDB API to search for movies and series
- Users can save listings, which will show up on their saved movies and saved series pages
- On the saved movies and saved series pages, users can remove listings from their account
- On the saved movies and saved series pages, users can push listings to their history page, which removes it from the "saved" pages
- On the history page, users can remove listings in case they pushed them there by accident

## HTTP Routes
  post('/users/signup', ...)        // 1, signup user
  post('/users/login', ...)         // 2, login user
  post('/users/verify, ...)         // 3, verify user
   put('/users/bio, ...)            // 4, update user's bio
  post('/viewings/save/id', ...)    // 5, save listing to profile
  post('/viewings/watch', ...)      // 6, move listing to history page
delete('/viewings/remove/id', ...)  // 7, remove listing from profile

## Completion timeline
- Finish Signup, Login, and backend server by EOD Monday
- Finish API implimentation by EOD Tuesday
- Finish MVP checklist by EOD Wednesday
- Use Thursday to polish up and refine styling