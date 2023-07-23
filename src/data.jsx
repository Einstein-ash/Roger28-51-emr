
//------- background of tab links ------
import Tech_fest from "./assets/images/Tech_fest.png"
import gallery from "./assets/images/gallery.png"
import projects from  "./assets/images/projects.png"
import workshop from "./assets/images/workshop.png"
import blog from "./assets/images/blog.png"
import team from "./assets/images/team.png"

import { About, Hero, Experience, Feedbacks,  Navbar,Works, StarsCanvas ,TabLinks,BlogPage
} from "./components";


export const tabData = [
  {
    label: 'TECH FEST',
     path: '/',
     backgroundImage: Tech_fest 
  },
  {
    label: 'Workshops',
     path: '/',
     backgroundImage: workshop
    },
   {
      label: 'PROJECTS',
       path: '/',
       backgroundImage: projects
    },
    {
      label: 'Blog',
       path: '/blog',
       backgroundImage: blog
    },
  
    {
      label: 'GALLERY',
       path: '/',
       backgroundImage: gallery
    },
    {
      label: 'TEAM',
       path: '/',
       backgroundImage: team
    },
    {
      label: 'SOON..',
       path: '/',
       backgroundImage: blog
    },
    
 
];



// data.jsx



export const services = [
  {
    title: "gulu",
    icon: "path/to/web-dev-icon.png",
    path: Hero, // Path to the component you want to navigate to
  },
  {
    title: "Mulu",
    icon: "path/to/mobile-app-icon.png",
    path: "/mobile-app-development", // Path to another component
  },
  // Add more services here...
];
