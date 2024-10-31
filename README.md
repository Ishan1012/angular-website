
# **Art Corner | A Responsive Portfolio Web Application**

## **Project Overview**

**Art Corner** is a responsive portfolio web application that provides users with an interactive platform to explore and showcase art. It includes features such as an interactive navbar, various sections for exploring art, favorites, and a search functionality. The application is built with a focus on performance and responsiveness, making it accessible across different devices.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [System Architecture](#system-architecture)
5. [Setup Instructions](#setup-instructions)
6. [Future Enhancements](#future-enhancements)
7. [Contact Information](#contact-information)

---

## **Features**
1. **Responsive Design**: The website is fully responsive, adapting to different screen sizes, from mobile devices to desktops.
2. **Interactive Navigation**: A fixed top navigation bar that provides links to various sections of the site like Explore, Favourites, About, and Contact Us.
3. **Search Functionality**: Users can search through the portfolio content using the search bar.
4. **Dynamic Content**: The main content area dynamically loads components like the home page and explore section using Angular's `<app-root>` and `<app-index-page>` tags.
5. **Theming & Branding**: Includes branding elements like a favicon (`corner.ico`) and logo (`logo-navbar.png`).

![Project Logo](screenshots/corner.ico)

---

## **Technologies Used**
- **Frontend**: HTML5, CSS3, Angular Framework
- **Responsive Design**: Bootstrap for layout and styling
- **Assets**: Custom icons and logos (e.g., `corner2.ico`, `logo-navbar2.png`)
- **Version Control**: Git

---

## **System Architecture**

This application is structured as a **Single Page Application (SPA)** using Angular. Key architectural components include:

- **Modules of this Project**: The modules in which the Angular application is divided into are as follows. These modules are evenly divided between the team members for better efficiency.
  
  ![Project Screenshot](screenshots/Beige%20Minimalist%20Timeline%20Diagram%20Graph.png)

- **Index.html**: The root HTML file that loads the Angular application. It includes the base href, metadata, and an app-root directive to load the main Angular component.
  ```html
  <app-root></app-root>
  ```
  ![Project Screenshot](screenshots/Screenshot%202024-10-21%20232050.png)

- **Explore Page**: The primary Angular component that manages the layout, including the navigation bar and content sections.
  ```html
  <nav class="navbar fixed-top bg-light navbar-expand-lg">
    <!-- Navbar content with links to Home, Explore, Favourites, About, and Contact Us -->
  </nav>
  <div class="contents container-fluid">
    <app-index-page></app-index-page>
  </div>
  ```
  ![Project Screenshot](screenshots/Screenshot%202024-10-21%20232056.png)

- **Content Page**: The primary Angular component that manages the layout, including the navigation bar and content sections.
  ```html
  <nav class="navbar fixed-top bg-light navbar-expand-lg">
    <!-- Navbar content with links to Home, Explore, Favourites, About, and Contact Us -->
  </nav>
  <div class="contents container-fluid">
    <app-educational-resources-page></app-educational-resources-page>
  </div>
  ```
  ![Project Screenshot](screenshots/Screenshot%202024-10-29%20120431.png)

  ![Project Screenshot](screenshots/Screenshot%202024-10-29%20120439.png)

  ![Project Screenshot](screenshots/Screenshot%202024-10-29%20120959.png)

- **Favourites Page**: The primary Angular component that manages the layout, including the navigation bar and content sections.
  ```html
  <nav class="navbar fixed-top bg-light navbar-expand-lg">
    <!-- Navbar content with links to Home, Explore, Favourites, About, and Contact Us -->
  </nav>
  <div class="contents container-fluid">
    <app-accessibility-features-page></app-accessibility-features-page>
  </div>
  ```
  ![Project Screenshot](screenshots/Screenshot%202024-10-22%20192353.png)

---

## **Setup Instructions**

### **Pre-requisites**
- **Node.js** (v12 or higher)
- **Angular CLI**

### **Steps to Run the Application Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/art-corner.git
   ```

2. Navigate to the project directory:
   ```bash
   cd art-corner
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the Angular development server:
   ```bash
   ng serve
   ```

5. Open the application in a browser:
   ```
   http://localhost:4200
   ```

---

## **Future Enhancements**

1. **User Authentication**: Implement user login and registration features for personalized portfolios.
2. **Gallery Section**: Add a dedicated gallery section where users can upload and manage their artwork.
3. **Advanced Search**: Improve the search functionality to include filters by categories, tags, or artists.
4. **Social Media Integration**: Enable sharing of artwork on social media platforms directly from the site.

---

## **Contact Information**

For any questions or contributions, feel free to contact:

- ## Team Members

1. **Ishan Dwivedi** - DevOps Engineer - Angular Framework
2. **Gaurav Singh** - MongoDB Engineer
3. **Kaushiki Jaiswal** - UI/UX Designer
4. **Gaurav Yadav** - Frontend Developer
5. **Kartik Kushwaha** - Frontend Engineer

- **Email**: [ishandwivedi1210@gmail.com]
- **GitHub**: [https://github.com/Ishan1012](https://github.com/Ishan1012)
