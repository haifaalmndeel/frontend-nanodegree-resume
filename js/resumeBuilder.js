/*
This is empty on purpose! Your code to build the resume will go here.
 */
var education = {
    schools: [{
        "name": "Princess Nora bint AbdulRahman University",
        "location": "barcelona",
        "degree": "BA",
         majors: ["IT"],
        "date": "2020",
        "url": "http://example.com"
    }],
    onlineCourses: [{
        "title": "front-end developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }],
    display: function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
            $(".education-entry:last").append(formattedDates);

            var formattedoLcation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedoLcation);

            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedMajors);
        }


        for (var i = 0; i < education.onlineCourses.length; i++) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

            var formattedSchoolTitle = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedSchoolTitle);

            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
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
            "title": "animal trading cards",
            "dates": "2017",
            "images": ["images/project1.png"],
            "description": "animal trading cards project was my first project in css language, I had a lot of fun doing it and I build it for my online Course in Udacity"
        },
        {
            "title": "portfolio site",
            "dates": "2017",
            images: ["images/project2.png"],
            "description": "the portfolio site project was my second project in Udacity, I worked so hard to make the website good in design and responsive in the same time"
        }
    ],
    display: function() {

        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
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
    "welcomemessage": "hello hop you enjoy",
    skills: ["awesomeness", "positive", "saving the universe", "good with Technology"],
    "bioPic": "images/fry.jpg",
    display: function() {
        var formattedcontacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedcontacts);
        var formattedcontacts = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedcontacts);
        var formattedcontacts = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedcontacts);
        var formattedcontacts = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedcontacts);
        var formattedcontacts = HTMLlocation.replace("%data%", bio.contacts.locations);
        $("#footerContacts").append(formattedcontacts);

        var formattedcontacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedcontacts);
        var formattedcontacts = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedcontacts);
        var formattedcontacts = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedcontacts);
        var formattedcontacts = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedcontacts);
        var formattedcontacts = HTMLlocation.replace("%data%", bio.contacts.locations);
        $("#topContacts").append(formattedcontacts);
    }
};

bio.display();
work.display();
projects.display();
education.display();




var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
$("#header").append(formattedwelcomeMsg);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedskill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedskill);
    var formattedskill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedskill);
    var formattedskill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedskill);
    var formattedskill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedskill);
}


$("#mapDiv").append(googleMap);

$("#projects").css("background-color", "#efede6");
$("#workExperience").css("background-color", "#f9f7ed");
$("#education").css("background-color", "#f9f7ed");
$("#mapDiv").css("background-color", "#efede6");