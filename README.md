CampusConnect is a full-stack web application designed for university students to communicate, share information, and collaborate in one centralized platform.

It addresses common campus problems such as missed announcements, lost items, unorganized study groups, and scattered communication channels by providing a clean, moderated, and easy-to-use web solution.

This project is built as a real-world, portfolio-ready application, not a simple tutorial clone.

Problem Statement

University students often rely on multiple WhatsApp groups, notice boards, and informal communication to stay informed. This leads to:
	•	Missed announcements and events
	•	Lost & found items not reaching the right audience
	•	Poor coordination for study groups
	•	Lack of moderation and structure

CampusConnect solves this by offering a single trusted platform for campus-related communication.


Target Users & Roles

Student (Default User)
	•	Register and log in
	•	Create, view, and delete own posts
	•	Comment on posts
	•	View and update profile

Admin (Moderator)
	•	Remove inappropriate or spam posts
	•	Maintain platform quality and safety


Core Features (MVP)

Authentication & Security
	•	User registration and login
	•	JWT-based authentication
	•	Secure password hashing
	•	Protected routes
	•	Role-based access control (Student / Admin)


Posts & Announcements
	•	Create text-based posts
	•	Categorize posts:
	•	Announcements
	•	Events
	•	Lost & Found
	•	Study Groups
	•	View a global feed of posts
	•	View individual post details
	•	Delete own posts
	•	Admin moderation (delete any post)


Interactions
	•	Comment on posts
	•	View comments in chronological order
	•	Basic engagement features (likes – optional)


User Profile
	•	View personal profile
	•	Update basic profile details
	•	View own posts
	•	Ownership-based permissions


Admin Moderation
	•	Remove reported or inappropriate posts
	•	Simple moderation dashboard
	•	Transparent moderation (no content editing)


User Stories

Student
	•	As a student, I want to register and log in so I can access campus updates.
	•	As a student, I want to create posts to share announcements or find lost items.
	•	As a student, I want to view all posts in one feed so I don’t miss updates.
	•	As a student, I want to comment on posts to communicate with others.
	•	As a student, I want to delete my own posts when they are no longer relevant.

Admin
	•	As an admin, I want to remove inappropriate posts to keep the platform safe.


Screens & Pages

MVP Pages
	1.	Login
	2.	Register
	3.	Home Feed (posts + filters)
	4.	Create Post
	5.	Post Details (comments)
	6.	Profile
	7.	Admin Moderation Panel


Data Models (MongoDB)

User
	•	name
	•	email
	•	passwordHash
	•	role (student | admin)
	•	createdAt

Post
	•	content
	•	category
	•	authorId
	•	createdAt

Comment
	•	postId
	•	authorId
	•	text
	•	createdAt


API Design (High-Level)

Authentication
	•	POST /api/auth/register
	•	POST /api/auth/login
	•	GET /api/users/me

Posts
	•	GET /api/posts
	•	POST /api/posts
	•	GET /api/posts/:id
	•	DELETE /api/posts/:id

Comments
	•	GET /api/posts/:id/comments
	•	POST /api/posts/:id/comments

Admin
	•	DELETE /api/admin/posts/:id


Non-Functional Requirements
	•	Clean and maintainable architecture
	•	Secure handling of environment variables
	•	Scalable backend structure
	•	Responsive UI (mobile & desktop)
	•	Clear separation of concerns (frontend / backend)


Feature Prioritization (MoSCoW)

Must Have
	•	Authentication
	•	Posts & feed
	•	Comments
	•	Profile
	•	Admin moderation

Should Have
	•	Pagination
	•	Search & filters
	•	Image uploads

Could Have
	•	Notifications
	•	Bookmarks
	•	Post reporting

Won’t Have (Current Scope)
	•	Real-time chat
	•	Payments
	•	Advanced analytics


Product Roadmap

Version 1 (MVP)
	•	Authentication
	•	Posts & feed
	•	Comments
	•	Profile
	•	Admin moderation

Version 2 (Enhancement)
	•	Search & pagination
	•	Image uploads
	•	UI/UX improvements

Version 3 (Optional)
	•	Notifications
	•	Reporting system
	•	Advanced moderation tools


Why This Project Matters

CampusConnect demonstrates:
	•	Real-world problem solving
	•	Full-stack development skills
	•	Secure authentication practices
	•	Professional backend architecture
	•	Clean Git workflow and documentation

This project is suitable for:
	•	Internship applications
	•	Portfolio showcasing
	•	Academic submissions


Tech Stack
	•	Frontend: React / Next.js
	•	Backend: Node.js, Express
	•	Database: MongoDB (Atlas)
	•	Authentication: JWT
	•	Tools: VS Code, Git, GitHub
CampusConnect is a full-stack web application designed for university students to communicate, share information, and collaborate in one centralized platform.

It addresses common campus problems such as missed announcements, lost items, unorganized study groups, and scattered communication channels by providing a clean, moderated, and easy-to-use web solution.

This project is built as a real-world, portfolio-ready application, not a simple tutorial clone.

Problem Statement

University students often rely on multiple WhatsApp groups, notice boards, and informal communication to stay informed. This leads to:
	•	Missed announcements and events
	•	Lost & found items not reaching the right audience
	•	Poor coordination for study groups
	•	Lack of moderation and structure

CampusConnect solves this by offering a single trusted platform for campus-related communication.


Target Users & Roles

Student (Default User)
	•	Register and log in
	•	Create, view, and delete own posts
	•	Comment on posts
	•	View and update profile

Admin (Moderator)
	•	Remove inappropriate or spam posts
	•	Maintain platform quality and safety


Core Features (MVP)

Authentication & Security
	•	User registration and login
	•	JWT-based authentication
	•	Secure password hashing
	•	Protected routes
	•	Role-based access control (Student / Admin)


Posts & Announcements
	•	Create text-based posts
	•	Categorize posts:
	•	Announcements
	•	Events
	•	Lost & Found
	•	Study Groups
	•	View a global feed of posts
	•	View individual post details
	•	Delete own posts
	•	Admin moderation (delete any post)


Interactions
	•	Comment on posts
	•	View comments in chronological order
	•	Basic engagement features (likes – optional)


User Profile
	•	View personal profile
	•	Update basic profile details
	•	View own posts
	•	Ownership-based permissions


Admin Moderation
	•	Remove reported or inappropriate posts
	•	Simple moderation dashboard
	•	Transparent moderation (no content editing)


User Stories

Student
	•	As a student, I want to register and log in so I can access campus updates.
	•	As a student, I want to create posts to share announcements or find lost items.
	•	As a student, I want to view all posts in one feed so I don’t miss updates.
	•	As a student, I want to comment on posts to communicate with others.
	•	As a student, I want to delete my own posts when they are no longer relevant.

Admin
	•	As an admin, I want to remove inappropriate posts to keep the platform safe.


Screens & Pages

MVP Pages
	1.	Login
	2.	Register
	3.	Home Feed (posts + filters)
	4.	Create Post
	5.	Post Details (comments)
	6.	Profile
	7.	Admin Moderation Panel


Data Models (MongoDB)

User
	•	name
	•	email
	•	passwordHash
	•	role (student | admin)
	•	createdAt

Post
	•	content
	•	category
	•	authorId
	•	createdAt

Comment
	•	postId
	•	authorId
	•	text
	•	createdAt


API Design (High-Level)

Authentication
	•	POST /api/auth/register
	•	POST /api/auth/login
	•	GET /api/users/me

Posts
	•	GET /api/posts
	•	POST /api/posts
	•	GET /api/posts/:id
	•	DELETE /api/posts/:id

Comments
	•	GET /api/posts/:id/comments
	•	POST /api/posts/:id/comments

Admin
	•	DELETE /api/admin/posts/:id


Non-Functional Requirements
	•	Clean and maintainable architecture
	•	Secure handling of environment variables
	•	Scalable backend structure
	•	Responsive UI (mobile & desktop)
	•	Clear separation of concerns (frontend / backend)


Feature Prioritization (MoSCoW)

Must Have
	•	Authentication
	•	Posts & feed
	•	Comments
	•	Profile
	•	Admin moderation

Should Have
	•	Pagination
	•	Search & filters
	•	Image uploads

Could Have
	•	Notifications
	•	Bookmarks
	•	Post reporting

Won’t Have (Current Scope)
	•	Real-time chat
	•	Payments
	•	Advanced analytics


Product Roadmap

Version 1 (MVP)
	•	Authentication
	•	Posts & feed
	•	Comments
	•	Profile
	•	Admin moderation

Version 2 (Enhancement)
	•	Search & pagination
	•	Image uploads
	•	UI/UX improvements

Version 3 (Optional)
	•	Notifications
	•	Reporting system
	•	Advanced moderation tools


Why This Project Matters

CampusConnect demonstrates:
	•	Real-world problem solving
	•	Full-stack development skills
	•	Secure authentication practices
	•	Professional backend architecture
	•	Clean Git workflow and documentation

This project is suitable for:
	•	Internship applications
	•	Portfolio showcasing
	•	Academic submissions


Tech Stack
	•	Frontend: React / Next.js
	•	Backend: Node.js, Express
	•	Database: MongoDB (Atlas)
	•	Authentication: JWT
	•	Tools: VS Code, Git, GitHub