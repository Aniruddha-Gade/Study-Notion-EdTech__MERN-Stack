
<img src='https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/frontend/src/assets/Logo/Logo-Full-Light.png' />

# Project Description
StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. <br/>
The platform is built using the **MERN stack**, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.


<h2>Live link 🌍📡 - [  https://study-notion-mern-stack.netlify.app/  ]</h2>
<hr/>


## StudyNotion Aim :<br/>
1️⃣ A seamless and interactive learning experience for students, making education more accessible and engaging.<br/>
2️⃣ A platform for instructors to showcase their expertise and connect with learners across the globe.<br/>

# Tech Stack

## Frontend :
<code title="React.js"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/react%20ogo.png"></code>
<code title="Vite"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/Vitejs-logo.png"></code>
<code title="Redux.js"><img height="35" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/redux-logo.png"></code>
<code title="css"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/css%20logo.png"></code>
<code title="Tailwind css"><img height="35" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/tailwind%20css%20logo.png"></code>


## Backend :
<code title="Nodejs"><img height="80" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/nodejs%20logo.png"></code>
<code title="Nodejs"><img height="80" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/nodejs-logo.png"></code>
<code title="Express"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/express%20logo.png"></code>
<code title="Tailwind css"><img height="40" src=""></code>
<code title="Tailwind css"><img height="35" src=""></code>


## Database

<div align ="center">
<code title="Mongodb"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/mongodb%20logo.png"></code>
</div>

## System Architecture <br/>
The StudyNotion ed-tech platform consists of three main components:  <br/>
The front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

1️⃣ Front-end <br/>
The front end of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

2️⃣ Back-end<br/>
The back end of the platform is built using NodeJS and ExpressJS, which are popular frameworks for building scalable and robust server-side applications. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

3️⃣ Database <br/>
The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data, which is useful for storing course content such as videos, images, and PDFs. The database stores the course content, user data, and other relevant information related to the platform.



## Architecture Diagram
Here is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech platform:



<hr/>

#### The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are: 

For Students:
- **Homepage:** A brief introduction to the platform with links to the course list and user details.
- **Course List:** A list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist:** Displays all the courses that a student has added to their wishlist.
- **Cart Checkout:** Allows the user to complete course purchases.
- **Course Content:** Presents the course content for a particular course, including videos and related material.
- **User Details:** Provides details about the student's account, including their name, email, and other relevant information.
- **User Edit Details:** Allows students to edit their account details.

For Instructors:
- **Dashboard:** Offers an overview of the instructor's courses, along with ratings and feedback for each course.
- **Insights:** Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages:** Enables instructors to create, update, and delete courses, as well as manage course content and pricing.
- **View and Edit Profile Details:** Allows instructors to view and edit their account details.



### Back-end

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

#### Back-end Features

- **User Authentication and Authorization:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.
- **Cloud-based Media Management:** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.



#### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema:** Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema:** Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema:** Includes fields such as course name, description, instructor details, and media content.

### Database

The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.


