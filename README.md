## React Face Login Application

React login system using face built using face-api.js

[View Live](https://face-app-pi.vercel.app/)

PS: you need to enable camera access to use the application.

## How it works
- When application loads on the browser it displays the Login page.
- On initial render the Login Component will do 2 things
  1. access the Webcam of the device and display in inside video tag.
  2. load face detection model from face-api.js
- When click on 'Login' it will use the model to find the face in the video.
- if facial feature is completely visible then it will redirect to home page.
- else it will alert "cannot find face"

## Video
https://github.com/SumanGurung01/face-login-submission/assets/92732976/5e501614-7b8c-4a96-b3fa-30d1599214a5

