var work = {
	"jobs": [
		{
		"employer": "employer1",
		"title": "title1",
		"location": "Mountain View, CA",
		"dates": "dates1",
		"description": "description1"
		},
		{
		"employer": "employer2",
		"title": "title2",
		"location": "San Francisco, CA",
		"dates": "dates2",
		"description": "description2"
		}
	]
}

var project = {
	"projects": [
		{
		"title": "project1",
		"dates": "dates1",
		"description": "description1",
		"image": "http://lorempixel.com/150/150"
		},
		{
		"title": "project2",
		"dates": "dates2",
		"description": "description2",
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
	"skills": ["awesome", "JavaScript", "HTML", "CSS"],
}

var education = {
	"schools": [
		{
		"name": "name1",
		"location": "San Francisco, CA",
		"degree": "degree1",
		"majors": ["econ", "psychology"],
		"dates": "dates1",
		"url": "url1",
		"onlineCourses": [
			{
			"title": "title1a",
			"school": "school1a",
			"dates": "dates1a",
			"url": "url1a"
			},
			{
			"title": "title1b",
			"school": "school1b",
			"dates": "dates1b",
			"url": "url1b"
			}
		]
		},
		{
		"name": "name2",
		"location": "Los Angeles, CA",
		"degree": "degree2",
		"majors": ["math", "physics"],
		"dates": "dates2",
		"url": "description2",
		"onlineCourses": [
			{
			"title": "title2a",
			"school": "school2a",
			"dates": "dates2a",
			"url": "url2a"
			},
			{
			"title": "title2b",
			"school": "school2b",
			"dates": "dates2b",
			"url": "url2b"
			}
		]
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

	// TO DO: add online courses
}
displayEducation();


// add widgets to HTML page
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);