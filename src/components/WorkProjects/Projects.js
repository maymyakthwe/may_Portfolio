import petShelter1 from '../images/pet-shelter/1.png'
import petShelter3 from '../images/pet-shelter/3.png'
import petShelter6 from '../images/pet-shelter/6.png'
import petShelter7 from '../images/pet-shelter/7.png'
import petShelter8 from '../images/pet-shelter/8.png'
import petShelter9 from '../images/pet-shelter/9.png'
import petShelter10 from '../images/pet-shelter/10.png'
import petShelter11 from '../images/pet-shelter/11.png'
import petShelter12 from '../images/pet-shelter/12.png'
import petShelter13 from '../images/pet-shelter/13.png'
import petShelter14 from '../images/pet-shelter/14.png'
import petShelter15 from '../images/pet-shelter/15.png'
import nora1 from '../images/nora/nora1.png'
import nora2 from '../images/nora/nora2.png'
import nora3 from '../images/nora/nora3.png'
import nora4 from '../images/nora/nora4.png'
import nora5 from '../images/nora/nora5.png'
import nora6 from '../images/nora/nora6.png'
import burmese1 from '../images/burmeseAi/1.png'
import burmese2 from '../images/burmeseAi/2.png'
import ds1 from '../images/ds/1.png'
import ds2 from '../images/ds/2.png'
import ds3 from '../images/ds/3.png'
import ds4 from '../images/ds/4.png'
import ds5 from '../images/ds/5.png'
import snake1 from '../images/game/snake1.png'
import snake2 from '../images/game/snake2.png'
import t1 from '../images/game/t1.png'
import t2 from '../images/game/t2.png'
import t3 from '../images/game/t3.png'
import assignment1 from '../images/assignment/1.png'
import assignment2 from '../images/assignment/2.png'
import assignment3 from '../images/assignment/3.png'
import assignment4 from '../images/assignment/4.png'
import assignment5 from '../images/assignment/5.png'
import assignment6 from '../images/assignment/6.png'
import assignment7 from '../images/assignment/7.png'

let allProjects = [
    {
        id: 1,
        name: 'Pet Shelter Website',
        description: 'This pet shelter website is my first full-stack project, built with React.js, Node.js, Express, and MongoDB. It includes full CRUD functionality, JWT authentication, and handles complex many-to-many database relationships effectively.',
        imgArr: [petShelter1, petShelter3, petShelter6, petShelter7, petShelter8, petShelter9, petShelter10, petShelter11, petShelter12, petShelter13, petShelter14, petShelter15],
        framework: 'MERN STACK',
        catagory: 'highlight',
        stack: 'FULL STACK',
        isDeployed: false,
        demoLink: "",
        href: "projects/1",
        date: "May, 2024"
    },
    {
        id: 2,
        name: 'Food Delivery Website',
        description: 'For this food delivery website, I used PHP and MySQL database.The UI / UX is similar to my previous project because it was my first attempt at CRUD functionality with PHP and I focused more on the backend aspects of these core features.',
        imgArr: [assignment1, assignment2, assignment3, assignment4, assignment5, assignment6, assignment7],
        framework: 'PHP',
        catagory: 'personal',
        stack: 'FULL STACK',
        isDeployed: false,
        demoLink: "",
        href: "projects/2",
        date: "Augest, 2024"
    },
    {
        id: 3,
        name: 'Education Website',
        description: 'I built this education website a year ago, and it was where I really honed my React.js skills. It includes reusable JSX components, and a fully functional search bar. I used Framer Motion for smooth component render animations.',
        imgArr: [nora6, nora1, nora2, nora3, nora4, nora5],
        framework: 'ReactJS',
        catagory: 'highlight',
        stack: 'FRONT END',
        isDeployed: true,
        demoLink: "https://nora-hazel.vercel.app/",
        href: "projects/3",
        date: "November, 2023"
    },
    {
        id: 4,
        name: 'AI Website',
        description: 'I built this test website shortly after learning React.js. When compared with the recent ones, it reflects the growth in my web development expertise and marks a significant milestone in my journey as a developer.',
        imgArr: [burmese1, burmese2],
        framework: 'FRONT END',
        catagory: 'personal',
        stack: 'FRONT END',
        isDeployed: true,
        demoLink: "https://burmese-ai.vercel.app/",
        href: "projects/4",
        date: "June, 2023"
    },
    {
        id: 5,
        name: 'Demon Slayer Project',
        description: 'This project was designed to sharpen my pure HTML and CSS skills, serving as a foundational step in my journey toward more advanced and amazing projects. It represents the beginning of what I hope I will be.',
        imgArr: [ds1, ds2, ds3, ds4, ds5],
        framework: 'HTML, CSS',
        catagory: 'personal',
        stack: 'FRONT END',
        isDeployed: true,
        demoLink: "https://demon-slayer-project.vercel.app/",
        href: "projects/5",
        date: "Jan, 2023"
    },
    {
        id: 6,
        name: 'Snake Game Project',
        description: 'This Snake game project started as a YouTube tutorial that I followed, but then customized and improved it to a more refined version. This experience allows me to better understand core concepts of Vanila JS.',
        imgArr: [snake1, snake2],
        framework: 'HTML, CSS, JS',
        catagory: 'youtube',
        stack: 'FRONT END',
        isDeployed: false,
        demoLink: "",
        href: "projects/6",
        date: "June, 2023"
    },
    {
        id: 7,
        name: 'Tic-Tac-Toe Project',
        description: 'I developed this Tic Tac Toe game project as a way to refine and expand my JavaScript skills. It was a hands-on exercise that allowed me to practice and experiences in problem-solving and implementing features',
        imgArr: [t1, t2, t3],
        framework: 'HTML, CSS, JS',
        catagory: 'game',
        stack: 'FRONT END',
        isDeployed: false,
        demoLink: "",
        href: "projects/7",
        date: "July, 2023"
    },
]

export default allProjects;