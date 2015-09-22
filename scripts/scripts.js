(function() {
  var data = {
     about : {
       banner : "About Jerry",
       description : {
         header: "The young man Jerry Pallath-- a cool, ambitious, and motivated individual on the cusp of bringing fresh air to the world of web development"
       },
       extra: ["Hey, my name is Jerry Pallath-- and I welcome you to my little corner of the internet.  Chances are you're here because I sent you a link-- and you're seeking some sort of proof that I am who I say I am.", "And that's what I'm going to do right here.", "I graduated New York University in 2013 for Psychology  under the PreMedicine Track-- but as soon as I got my diploma, I lost any passion to follow that desire.  I spent awhile figuring out what exactly would be the best fit to my life.  I concluded it can only be technology.", "Since the release of the iPod Classic (maybe even before, if you count the releases of video games), I've been in love with technology.  I watched the annual conferences by Apple and Google, hoping that one day I'll develop a perfect app that'll change people's lives.", "I put my learning for web development in boost mode when I decided to study in General Assembly's Web Development Immersive.  I gathered a thorough understanding of Full Stack technologies (which are listed in my Skills), and developed a few Full Stack Projects (my favorites are detailed in Projects).", "Take your time getting to know more about me and my skills.  If you like what you see, or you want to get more information, then check for my information in Contact.", "Thanks / Jerry"],
       images : [
         "./images/AboutProfilePic.png"
       ]
     },
     background : {
       banner : "Background",
       description : {
         schools: {
           GeneralAssembly: {
             name:"General Assembly", extra:"During my Web Development Immersive experience I learned how to implement web development technologies such as: HTML, CSS, Javascript, jQuery, Angular.js, Ruby, Node.js, Rails, MongoDB, PostGreSql",
             image: "./images/SkillsGA.png"},
           NYU: {
             name:"New York University",
             extra:"During my time at New York University, I studied under the Premedicine Track and Graduated with a BA in Psychology.  I also took a number of classes in Computer Sciences, Mathematics, and Neuroscience",
             image: "./images/SkillsNYU.jpeg"}
         }
       },
     },
     projects : {
       banner : "Projects",
       description : {
         projects: {
           C: {
             name:"My Personal Site",
             extra:["The main reason I wanted to include this in my list of projects is that it's my best example of utilizing Angular.js","The site uses simple HTML, CSS, and Javascript.  What I wanted to be the main draw is the quick requests back and forth from the server with AJAX calls by using Angular.js."],
             image: "./images/PersonalSite.png"},
           B: {
             name:"Project Dibs",
             extra:['In Project Dibs, my plan was to build a full stack application that would be able to allow users to post their ideas to "perfect" something in popular culture.  Once a user posts his idea-- then other users can comment on the post, debating if it is actually possible or worth it',"I utilized MongoDB on the back-end, and on the front-end I integrated Google's Material Design Lite to provide a desirable interface.  The entire app is built on top of Node.js."],
             image: "./images/ProjectDibs.png"},
           A: {
             name:"Pick Up and Go",
             extra:["Pick Up and Go was a collaborated effort.  I worked with two other developers and a product manager to build a full stack app that provides the opportunity to allow users to organize neighborhood games of Soccer, Baseball, Football, and Basketball with friends and other users in the area.","In this application.  I developed the database using Active Record to develop relations in PostGreSQL.  I provided Front-End assistance with HTML, CSS, and Javascript/jQuery, while following the philosophies dictated by the CSS framework, MaterializeCSS"],
             image: "./images/PickUpAndGo.png"}
         }
       }
     },
     contacts : {
       banner : "Contact",
       description : {
         contacts: {
           GitHub: {
             name:"GitHub", extra:"https://www.github.com/jpallath",
             image: "./images/SkillsGA.png"},
           Email: {
             name:"E-mail",
             information:"jpallath@nyu.edu",
             image: "./images/SkillsNYU.png"},
           Information: {
             name:"Information",
             information:"Phone: 815-627-0825 \n Address: 431 Wildrose Ave, Bergenfield NJ 07621",
               image: "./images/SkillsNYU.png"}
         }
       }
     }
  }
  var app = angular.module('ProfileSite', []);

  app.controller('ModuleController', function(){
    this.data = data;
  })
})();
