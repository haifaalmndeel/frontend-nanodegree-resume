/*
This is empty on purpose! Your code to build the resume will go here.
 */
var education = {
    schools: [{
        "name": "Princess Nora bint AbdulRahman University",
        "location": "barcelona",
        "degree": "BA",
        majors: ["IT"],
        "dateس": "2020",
        "url": "http://example.com"
    }],
    onlineCourses: [{
        "title": "front-end developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com",
        "location": "Riyadh"
    }],
    display: function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dateس);
            $(".education-entry:last").append(formattedDates);

            var formattedoLcation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedoLcation);

            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedMajors);
        }


        for (var j = 0; j < education.onlineCourses.length; j++) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);

            var formattedSchoolTitle = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedSchoolTitle);

            var formattedoLcation2 = HTMLschoolLocation.replace("%data%", education.onlineCourses[j].location);
            $(".education-entry:last").append(formattedoLcation2);

            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            $(".education-entry:last").append(formattedDate);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

var work = {
    jobs: [{
        "employer": "abdullah",
        "title": "Data entry",
        "location": "dubai",
        "dates": "2017",
        "description": "I have worked as Data entry for my dad all the time to finish his work"
    }],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    projects: [{
        "title": "portfolio site",
        "dates": "2017",
        images: ["images/project2.png"],
        "description": "the portfolio site project was my second project in Udacity, I worked so hard to make the website good in design and responsive in the same time"
    }],
    display: function() {

        for (var a = 0; a < projects.projects.length; a++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[a].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[a].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[a].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[a].images.length > 0) {
                for (var b = 0; b < projects.projects[a].images.length; b++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[a].images[b]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

var bio = {
    "name": "Haifa Almndeel",
    "role": "front-end developer",
    contacts: {
        "mobile": "0597180094",
        "email": "haifaa.almndeel@gmail.com",
        "github": "haifaalmndeel",
        "twitter": "haifaAlmndeel",
        "location": "Riyadh",
    },
    "welcomeMessage": "hello hop you enjoy",
    skills: ["awesomeness", "positive", "saving the universe", "good with Technology"],
    "biopic": "images/fry.jpg",
    display: function() {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMsg);

        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedbioPic);


        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

        $("#header").append(HTMLskillsStart);

        for (var h = 0; h < bio.skills.length; h++) {
            var formattedskill = HTMLskills.replace("%data%", bio.skills[h]);
            $("#skills").append(formattedskill);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);

$("#projects").css("background-color", "rgba(251, 239, 203, 0.48)");
$("#mapDiv").css("background-color", "rgba(251, 239, 203, 0.48)");
$("#workExperience").css("background-color", "rgba(255, 236, 179, 0.62)");
$("#education").css("background-color", "rgba(255, 236, 179, 0.62)");