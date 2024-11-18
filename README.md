
# **Art Corner | A Responsive Portfolio Web Application**

## **Project Overview**

**Art Corner** is a responsive portfolio web application that provides users with an interactive platform to explore and showcase art. It includes features such as an interactive navbar, various sections for exploring art, favorites, and a search functionality. The application is built with a focus on performance and responsiveness, making it accessible across different devices.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [System Architecture](#system-architecture)
4. [Sample Videos](#sample-videos)
4. [Project Depandencies](#project-depandencies)
5. [Setup Instructions](#setup-instructions)
6. [Futured Categories](#featured-categories)
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

- **Art Gallery**: Explore a curated collection of breathtaking artworks, ranging from classic to contemporary styles. The gallery showcases diverse mediums like paintings, sculptures, and digital art to inspire art lovers.
  ```ts
  { path: 'index', component: IndexPageComponent }
  ```

- **Educational Resources**: Dive into a wealth of tutorials, guides, and tips to help artists enhance their skills. Whether you're a beginner or a pro, there's something here for every creative mind.
  ```ts
  { path: 'explore', component: ExploreComponentsComponent }
  ```

- **Artists Profiles**: Connect with talented artists by exploring their detailed profiles, featuring bios, portfolios, and personal journeys. Get inspired by their stories and support their creative endeavors.
  ```ts
  { path: 'profile', component: UserLoginDashboardComponent }
  ```

- **Blog / News Section**: Stay updated with the latest trends, news, and insights from the art world. Discover in-depth articles, interviews, and features that celebrate creativity.
  ```ts
  { path: 'news', component: BlogNewsSectionComponent }
  ```

- **Community Forum**: Join a thriving space where art enthusiasts and creators can exchange ideas, seek feedback, and discuss all things art. Build meaningful connections with like-minded individuals.
  ```ts
  { path: 'community', component: CommunityForumComponent }
  ```

- **Accessibility Features**: Experience a platform designed for everyone, with tools like screen readers, text scaling, and alternative text for images. Inclusivity is at the heart of this creative space.
  ```ts
  { path: 'bookmarks', component: AccessibilityFeaturesComponent }
  ```

- **Feedback / About Us**: Learn more about our mission to celebrate creativity and connect artists worldwide. Share your thoughts and suggestions to help us grow and serve you better.
  ```ts
  { path: 'about', component: FeedbackAboutUsComponent }
  ```

---

## **Sample Videos**

  ![Project Screenshot](screenshots/gif1.gif)

  ![Project Screenshot](screenshots/gif2.gif)

  ![Project Screenshot](screenshots/gif3.gif)

  ![Project Screenshot](screenshots/gif4.gif)

  ![Project Screenshot](screenshots/gif5.gif)

  ![Project Screenshot](screenshots/gif6.gif)

  ![Project Screenshot](screenshots/gif7.gif)

---

## **Project Depandencies**

### **Frontend Depandencies**

- ![Angular Animations](https://img.shields.io/badge/Angular-Animations-red?logo=angular&logoColor=white) `@angular/animations`
- ![Angular Common](https://img.shields.io/badge/Angular-Common-red?logo=angular&logoColor=white) `@angular/common`
- ![Angular Compiler](https://img.shields.io/badge/Angular-Compiler-red?logo=angular&logoColor=white) `@angular/compiler`
- ![Angular Core](https://img.shields.io/badge/Angular-Core-red?logo=angular&logoColor=white) `@angular/core`
- ![Angular Forms](https://img.shields.io/badge/Angular-Forms-red?logo=angular&logoColor=white) `@angular/forms`
- ![Angular Router](https://img.shields.io/badge/Angular-Router-red?logo=angular&logoColor=white) `@angular/router`
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap&logoColor=white) `bootstrap`
- ![Bootstrap Icons](https://img.shields.io/badge/Bootstrap-Icons-purple?logo=bootstrap&logoColor=white) `bootstrap-icons`
- ![NGX Toastr](https://img.shields.io/badge/NGX-Toastr-orange?logo=javascript&logoColor=white) `ngx-toastr`
- ![RxJS](https://img.shields.io/badge/RxJS-pink?logo=reactivex&logoColor=white) `rxjs`
- ![Zone.js](https://img.shields.io/badge/Zone.js-blue?logo=javascript&logoColor=white) `zone.js`

### **Backend Depandencies**

- ![CORS](https://img.shields.io/badge/CORS-blue?logo=express&logoColor=white) `cors`
- ![Crypto JS](https://img.shields.io/badge/CryptoJS-darkgreen?logo=lock&logoColor=white) `crypto-js`
- ![Express](https://img.shields.io/badge/Express.js-black?logo=express&logoColor=white) `express`
- ![dotenv](https://img.shields.io/badge/dotenv-green?logo=dotenv&logoColor=white) `dotenv`
- ![Express Async Handler](https://img.shields.io/badge/Express--Async--Handler-grey?logo=express&logoColor=white) `express-async-handler`

### **Framework**

- ![Angular](https://img.shields.io/badge/Angular-Fire-red?logo=angular&logoColor=white) `@angular/fire`
- ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white) `typescript`
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) `@types/node`

### **Database**

- ![MongoDB](https://img.shields.io/badge/MongoDB-darkgreen?logo=mongodb&logoColor=white)

---

## **Setup Instructions**

### **Pre-requisites**
- **Node.js** (v12 or higher)
- **Angular CLI**

```bash
# Install Angular CLI globally
npm install -g @angular/cli
```

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

## **Featured Categories**

1. **Paintings**: Explore a vibrant collection of artworks ranging from traditional oil and watercolor to modern acrylic masterpieces. Dive into themes like portraits, landscapes, and abstract expressions.

2. **Digital Art**: Discover cutting-edge creations that merge technology with artistry, featuring stunning illustrations, 3D designs, and pixel art. A realm where imagination meets innovation.

3. **Photography**: Capture the world through the lens with breathtaking shots of nature, urban landscapes, portraits, and more. Each photo tells a story, freezing moments in time.

4. **Sculptures**: Admire the beauty of three-dimensional art crafted from stone, metal, clay, and beyond. From classical statues to modern installations, feel the art in its tangible form.

5. **Interactive Hover Effects**: Bring categories to life with subtle animations like zoom-ins or color overlays, creating a visually dynamic experience. On hover, display brief descriptions or highlights to engage users further.

6. **Dynamic Category Highlights**: Feature a standout artwork or artist for each category with a thumbnail and their name. This draws attention to top creations and adds depth to the browsing experience.

---

## **Contact Information**

For any questions or contributions, feel free to contact:

- ## Team Members

1. **Ishan Dwivedi(Team Leader)** - DevOps Engineer - Angular Framework
2. **Gaurav Singh** - MongoDB Engineer
3. **Kaushiki Jaiswal** - UI/UX Designer
4. **Gaurav Yadav** - Frontend Developer
5. **Kartik Kushwaha** - Frontend Engineer

- **Email**: [ishandwivedi1210@gmail.com]
- **GitHub**: [https://github.com/Ishan1012](https://github.com/Ishan1012)
