import { mailtoUrl } from "./components/Contacts/Contacts"

const phoneNumber = '+919784952873';
const whatsappUrl = `https://wa.me/${phoneNumber}`;


export const nav__links =[
    {
      path: '#home',
      display: 'Home'
    },
    {
      path: '#about',
      display: 'About'
    },
    {
      path: '#team',
      display: 'Team'
    },
    {
      path: '#services',
      display: 'Service'
  },
    {
      path: '#projects',
      display: 'Projects '
    },
    {
        path: '#testimonials',
        display: 'Testimonials'
      },
      {
        path: '#contacts',
        display: 'Contact'
      }

  ]

  export const counterData = [
    {
      number: '12k',
      text: "Clients"
    },
    {
      number: 1200,
      text: "Running Projects"
    },
   
    {
      number: 13000,
      text: "Projects Completed"
    },
  ]

  export const ServicesData =[
    {
      title:'Architectural Deign',
      image: '/images/architecture.png',
      description:"Transforming ideas into architectural marvels, our designs blend innovation and functionality to create spaces that inspire and endure.",
    
    },

    {
      title:'Interior Design',
      image: '/images/interior.png',

      description:"Elevate your living or working environment with our interior design expertise, striking the perfect balance between aesthetics and comfort.",
    },
    {
      title:'Product Design',
      image: '/images/product-.png',
      description:"Crafting visionary products that merge form and function, our design solutions redefine industries and enhance user experiences.",
    },
    {
      title:'Project Monitoring',
      image: '/images/project.png',
      description:"Ensuring the seamless realization of your vision, our project monitoring services provide oversight and support from conception to completion.",
    }
  ]

  export const ChooseData = [
    {
      icon: 'ri-wifi-line',
      title: 'First working process',
      desc:"Delivering excellence from the project's inception, we meticulously plan and execute the initial stages to ensure a seamless and successful home design journey."
    },

    {
      icon: 'ri-creative-commons-by-line',
      title: 'Creative Designs',
      desc:'Infusing innovation and artistic flair into every blueprint, our designs reflect a harmonious blend of functionality and aesthetics, creating dream homes that stand out.'
    },
    {
      icon: 'ri-customer-service-2-fill',
      title: '24/7 Hours Support',
      desc:"Committed to our clients around the clock, our support team ensures responsive assistance, addressing queries and concerns promptly to guarantee a worry-free experience at any hour."
    },
    {
      icon: 'ri-team-line',
      title: 'Dedicated Team',
      desc:"Our passionate and skilled professionals work tirelessly, dedicating their expertise to transform visions into reality, fostering a collaborative approach for personalized and exceptional home architecture."
    },
  ]

  export const TeamData =[
    {
      name: 'Himanshu Jain',
      profile: '/images/boss1.png',
      designation: 'Civil Engineer'
    },
    {
      name: 'Priya Singh',
      profile: '/images/PriyaSingh.png',
      designation: 'Project Manager'
    },
    {
      name: 'Vikram Kapoor',
      profile: '/images/mikah.png',
      designation: 'Marketing Specialist'
    },
    {
      name: 'Rajiv Sharma',
      profile: '/images/Shakur.png',
      designation: 'Architecture Designer'
    },
    
  ]

  export const Clients = [
    {
      name: "Priya R.",
      image: "https://t3.ftcdn.net/jpg/01/87/83/26/360_F_187832626_Z0K54NuFDzPM10NZw6gWdRYMC763xJQM.jpg",
      desc: "Dream Home Design exceeded my expectations! Their attention to detail and commitment to delivering a unique, functional design truly set them apart. Living in my dream home is a testament to their expertise.",
      position: "From Mumbai"
      
    },
    {
      name: "Kunal S.",
      image: "/images/ava-1.jpg",
      position: "From Delhi",   
      desc : "Choosing Dream Home Design was the best decision. The creative prowess of their team turned my vision into a stunning reality. The dedication and professionalism throughout the process were exceptional."
    },
    {
      name: "Aljun B.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-azx6f0rYjaPTpu7Khh68nWuIIlehaXKzSksVCWL3hge7rvl9-jfTozb1Ul-omLFZfU&usqp=CAU",
      position: "From Bangalore",
      desc: "I can't thank Dream Home Design enough for their 24/7 support. Their team was always available, addressing my concerns promptly. It made the entire experience smooth, and the end result is a home that exceeds my expectations." 
    }
    
    
  ]

  export const socialLinks = [
   [ {
      path:"#",
      icon:'ri-twitter-x-line',
      name: 'Twitter'

    },
    {
      path:"#",
      icon:'ri-instagram-line',
      name: "Instagram"

    },
    {
      path:"#",
      icon:'ri-phone-fill',
      name:"Linkedin"

    },
    {
      path:"https://www.facebook.com/profile.php?id=100093607791305&mibextid=vk8aRt",
      icon:'ri-facebook-box-line',
      name:"Facebook",
    }],


    [
      {
        path:"",
        icon:'ri-phone-fill',
        name: '+91-0704-7364'
  
      },
      {
        path:whatsappUrl,
        icon:'ri-whatsapp-line',
        name: "Wattsap"
  
      },
      {
        path:mailtoUrl,
        icon:'ri-mail-send-line',
        name:"Email",
      } ,
      {
        path:"#",
        icon:'ri-map-pin-line',
        name:"India"
  
      }
       
    ]
    ,

    [
      {
        path:"#projects",
        icon:'ri-community-line',
        name: 'Projects'
  
      },
      {
        path:"#",
        icon:'ri-home-line',
        name: "Home"
  
      },
      {
        path:"#contacts",
        icon:'ri-contacts-line',
        name:"Contacts",
      } ,
      {
        path:"#",
        icon:'ri-team-line',
        name:"Testimonials"
  
      }
       
    ]

  ]


  export const Houses = [

    {
      id: 1,
      title: "5 Rooms House",
      cover: "https://housedesign-3d.com/wp-content/uploads/2022/06/3-Bedrooms-House-Plan-15x20-Meter.jpg",
      floo_1: "https://housedesign-3d.com/wp-content/uploads/2022/06/3-Bedrooms-House-Plan-15x20-Meter-Ground-floor-plan.jpg",
      floo_2: "https://housedesign-3d.com/wp-content/uploads/2022/06/3-Bedrooms-House-Plan-15x20-Meter-First-floor-plan.jpg",
      both_floo: "https://housedesign-3d.com/wp-content/uploads/2022/06/3-Bedrooms-House-Plan-15x20-Meter-floor-plan.jpg",
      desc: "Building size: 11 Meter wide 15 meter deep (including porch & steps) Main roof Terrace concrete or zine tile Cars Parking is out side of the house Living room      Bedroom: 3 Bedrooms Bathroom: 3 Bathrooms Dining room with Kitchen Washing room Buddha room",
    },
    {
      id: 2,
      title: "4 Rooms House",
      cover: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/72266/72266-p3.jpg",
      floo_1: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/72266/72266-p4.jpg",
      floo_2: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/72266/72266-p7.jpg",
      both_floo: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/72266/72266-r.jpg",
      desc: "Building size: 11 Meter wide 15 meter deep (including porch & steps) Main roof Terrace concrete or zine tile Cars Parking is out side of the house Living room      Bedroom: 3 Bedrooms Bathroom: 3 Bathrooms Dining room with Kitchen Washing room Buddha room",
    },
    {
      id: 3,
      title: "3 Rooms House",
      cover: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83361/83361-b600.jpg",
      floo_1: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83361/83361-p4.jpg",
      floo_2: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83361/83361-p7.jpg",
      both_floo: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83361/83361-r.jpg",
      desc: "Building size: 11 Meter wide 15 meter deep (including porch & steps) Main roof Terrace concrete or zine tile Cars Parking is out side of the house Living room      Bedroom: 3 Bedrooms Bathroom: 3 Bathrooms Dining room with Kitchen Washing room Buddha room",
    },
    {
      id: 4,
      title: "4 Rooms Family H",
      cover: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83367/83367-b600.jpg",
      floo_1: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83367/83367-p2.jpg",
      floo_2: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83367/83367-p3.jpg",
      both_floo: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83367/83367-r.jpg",
      desc: "Building size: 11 Meter wide 15 meter deep (including porch & steps) Main roof Terrace concrete or zine tile Cars Parking is out side of the house Living room      Bedroom: 3 Bedrooms Bathroom: 3 Bathrooms Dining room with Kitchen Washing room Buddha room",
    },
    {
      id: 5,
      title: "3 Rooms Houser",
      cover: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83372/83372-b600.jpg",
      floo_1: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83372/83372-p2.jpg",
      floo_2: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83372/83372-p2.jpg",
      both_floo: "https://images.familyhomeplans.com/cdn-cgi/image/fit=contain,quality=85/plans/83372/83372-p3.jpg",
      desc: "Building size: 11 Meter wide 15 meter deep (including porch & steps) Main roof Terrace concrete or zine tile Cars Parking is out side of the house Living room      Bedroom: 3 Bedrooms Bathroom: 3 Bathrooms Dining room with Kitchen Washing room Buddha room",
    },
  ]