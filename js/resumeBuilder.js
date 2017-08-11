/*
This is empty on purpose! Your code to build the resume will go here.
 */
     var education = {
     	"school": [{
     		"name": "haifa almndeel",
     		"location": "Riyadh",
     		"degree": "BA",
     		"majors": ["IT"],
     		"date": "2020",
     		"url": "http://example.com"
     	}],
     	"onlineCourses": [{
     		"title": "front-end developer",
     		"school": "Udacity",
     		"dates": "2017",
     		"url": "http://example.com"
     	}]
     	
     }

     var work = {
     	"jobs": [{
     		"employer": "abdullah",
     		"title": "Paperwork",
     		"location": "Riyadh",
     		"dates": "2017",
     		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
     	}]
     	 
     }

     var projects = {
     	"projects": [{
     		"title": "project1",
     		"dates": "2017",
     		"images": ["http://example.com"] ,
     		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
     	}]
     	
     }

     var bio = {
     	"name": "Haifa Almndeel",
     	"role": "front-end developer",
     	"contacts": {
     		"mobile": "0597180094",
     		"email": "haifaa.almndeel@gmail.com",
     		"github": "haifaalmndeel",
     		"twitter": "haifaAlmndeel",
     		"location": "Riyadh",
     	},
     	"welcome message": "hello nice to meet you",
     	"skills": ["awesomeness","positive","sleep","saving the universe"],
     	"bioPic": "images/fry.jpg"
     }
      
 
 // $("#main").append(InternationalizeButton);

      var Role = "front-end developer";
   var formattedName = HTMLheaderName.replace("%data%","haifa almndeel");
   var formattedRole = HTMLheaderRole.replace("%data%",Role);
   
   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);
   

     if (bio.skills.length >0) {
     	$("#header").append(HTMLskillsStart);
     	var formattedskill =HTMLskills.replace("%data%",bio.skills[0]);
     	$("#skills").append(formattedskill);
     	var formattedskill =HTMLskills.replace("%data%",bio.skills[1])
     	$("#skills").append(formattedskill);
     	var formattedskill =HTMLskills.replace("%data%",bio.skills[2])
     	$("#skills").append(formattedskill);
     	var formattedskill =HTMLskills.replace("%data%",bio.skills[3]);
     	$("#skills").append(formattedskill);
     }
     
     function displaywork(){
     	for(job in work.jobs){
     		$("#workExperience").append(HTMLworkStart);

     		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
     		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
     		var formattedEmployerTitle = formattedEmployer + formattedTitle;
     		$(".work-entry:last").append(formattedEmployerTitle);

     		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
     		$(".work-entry:last").append(formattedDates);
     		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
     		$(".work-entry:last").append(formattedDescription); 
     	}
     }

     displaywork();

  // /*
  $(document).click(function(loc) {
  	var x=loc.pageX;
  	var y=loc.pageY;
  	logClicks(x,y);
  });
 //  
 
 function inName(name) {
 	name = name.trim().split(" ");
 	name[1]=name[1].toUpperCase();
 	name[0]=name[0].slices(0,1).toUpperCase()+name[0].slices(1).toLowerCase();
 	return name+" "+name[1];
 
 

 projects.display=function () {
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
 		$(".project-entry:last").append(formattedTitle);

 		var  formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
 		$(".project-entry:last").append(formattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
 		$(".project-entry:last").append(formattedDescription);

 		if (projects.projects[project].images.length>0) {
 			for(image in projects.projects[project].images){
 				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[image]);
 				$(".project-entry:last").append(formattedImage);
 			}
 		}
 	}
 }
}