var work = {
	"jobs": [
		{
		"employer": "Google",
		"title": "Front-end Developer",
		"location": "Mountain View, CA",
		"dates": "2015 - present",
		"description": "The best front-end engineer"
		},
		{
		"employer": "Twitter",
		"title": "Junior Front-end Developer",
		"location": "San Francisco, CA",
		"dates": "2012 - 2015",
		"description": "Created the blue bird"
		}
	]
}

var project = {
	"projects": [
		{
		"title": "Street Photography",
		"dates": "2015",
		"description": "Voted the best street photography by Photo magazine",
		"image": "http://lorempixel.com/150/150"
		},
		{
		"title": "BW Photography",
		"dates": "2014",
		"description": "Won 2014 most artistic BW photography",
		"image": "http://lorempixel.com/g/150/150/"
		}
	]
}

var bio = {
	"name": "Ronny Hoesada",
	"role": "Full Stack Developer Ninja",
	"welcomeMessage": "Welcome to My Page",
	"image": "images/fry.jpg",
	"contacts": {
		"mobile": "(415) 123-4567",
		"email": "rh@example.com",
		"github": "pwr2000",
		"twitter": "@pwr2000",
		"location": "San Francisco, CA"
	},
	"skills": ["Ruby on Rails", "JavaScript", "HTML5", "CSS"],
}

var education = {
	"schools": [
		{
		"name": "Stanford University",
		"location": "Stanford, CA",
		"degree": "Master of Science",
		"majors": "Computer Science",
		"dates": "2010",
		"url": "www.Stanford.edu"
		},
		{
		"name": "UC Berkeley",
		"location": "Berkeley, CA",
		"degree": "Bachelor of Science",
		"majors": "EECS",
		"dates": "2008",
		"url": "www.Berkeley.edu"
		}
	],

	"onlineCourses": [
		{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
}

// HEADER Section
function displayBio() {
	// General Bio
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
	var formattedAll = formattedName + formattedRole + formattedWelcomeMessage + formattedBioPic;
	$("#header").prepend(formattedAll);

	// Contact Info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter;
	$("#topContacts").append(formattedContacts);

	// Skills at a glance
	$("#topContacts").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	}

}
displayBio();


// WORK EXPERIENCE Section
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedEmployerTitle);
	}
}
displayWork();


// PROJECT Section
function displayProject() {
	for (p in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[p].description);
		var formattedImage = HTMLprojectImage.replace("%data%", project.projects[p].image);
		var formattedProjectAll = formattedTitle + formattedDates + formattedDescription + formattedImage;
		$(".project-entry:last").append(formattedProjectAll);
	}
}
displayProject();


// EDUCATION Section
function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolAll = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
		$(".education-entry:last").append(formattedSchoolAll);
	}

	// Online courses
	$("#education").append(HTMLonlineClasses);
	for (online in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		var formattedOnlineAll = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
		console.log(formattedOnlineAll);
		$(".education-entry:last").next().append(formattedOnlineAll);
	}
}
displayEducation();


// add widgets to HTML page
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);