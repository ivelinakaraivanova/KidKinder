# KidKinder

This project represents a platform for kid's courses. It can be used by a user who is not logged in (as a guest) and by a teacher or parent as logged in user. Depending on the role of the user, a course can be viewed, created, edited, booked, unbooked, deleted.

## This is an application for:
* accounts for teachers and parents
* kid's courses
* kid's courses bookings

## The application has:
### Public part (pages accessible without authentication)
* Home - contains basic information about the platform
* About - the idea of the platform and how to work with it
* Courses - a list of courses with some basic details
* Teachers - a list of registered teachers
* Login - form where the registered user can login
* Register - form for registering a new user

### Private part (pages available for registered users)
* for users who are registered as a teacher:
  * Create course - registering a new course
  * Edit course - updating a course details - only for a teacher who is a course creator/owner
  * Delete course - deleting a course - only for a teacher who is a course creator/owner
  * My Courses - a list of courses created by the teacher
  * My Profile - viewing and updating user details

* for users who are registered as a parent:
  * My Bookings - a list of courses booked by the parent with the possibility to view details and unbook
  * My Profile - viewing and updating user details

## This project was built with:
* [React.js](https://reactjs.org)
* [Back4app](https://www.back4app.com/)
* [HTML Codex](https://htmlcodex.com)

and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
