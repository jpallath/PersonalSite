(function() {
  var data = {
     about : {
       banner : "About Jerry",
       description : {
         header: "The young man Jerry Pallath-- a cool, ambitious, and motivated individual on the cusp of bringing fresh air to the world of web development"
       },
       extra: ["Hey, my name is Jerry Pallath-- and I welcome you to my little corner of the internet.  Chances are you're here because I sent you a link-- and you're seeking some sort of proof that I am what I say I am.", "And that's what I'm going to do right here.", "I graduated New York University in 2013 for Psychology  under the PreMedicine Track-- but as soon as I got my diploma, I lost any desire to follow that desire.  I spent awhile figuring out what exactly would be the best fit to my life.  I concluded it can only be technology.", "Since the release of the iPod Classic (maybe even before, if you count the releases of video games), I've been in love with technology.  I watched the annual conferences by Apple and Google; hoping that one day I'll develop a perfect app that'll change people's lives.", "I put my learning for web development in boost mode when I decided to study in General Assembly's Web Development Immersive.  I gathered a thorough understanding of Full Stack technologies (which are listed in my Skills), and developed a few Full Stack Projects (my favorites are detailed in Projects).", "Take your time getting to know more about me and my skills.  If you like what you see, or you want to get more information-- then check for my information in Contact.", "Thanks / Jerry"],
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
             image: "./images/SkillsNYU.png"}
         }
       },
     },
     projects : {
       banner : "Projects",
       description : {
         projects: {
           ProjectDibs: {
             name:"Project Dibs", extra:"During my Web Development Immersive experience I learned how to implement web development technologies such as: HTML, CSS, Javascript, jQuery, Ruby, Node.js, Rails, MongoDB, PostGreSql",
             image: "./images/SkillsGA.png"},
           PickUpAndGo: {
             name:"Pick Up and Go",
             extra:"During my time at New York University, I studied under the Premedicine Track and Graduated with a BA in Psychology.  I also took a number of classes in Computer Sciences, Mathematics, and Neuroscience",
             image: "./images/SkillsNYU.png"}
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
