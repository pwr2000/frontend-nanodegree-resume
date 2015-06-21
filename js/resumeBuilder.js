var work = {
	"jobs": [
		{
		"employer": "employer1",
		"title": "title1",
		"location": "location1",
		"dates": "dates1",
		"description": "description1"
		},
		{
		"employer": "employer2",
		"title": "title2",
		"location": "location2",
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
		"image": "image1"
		},
		{
		"title": "project2",
		"dates": "dates2",
		"description": "description2",
		"image": "image2"
		}
	]
}

var bio = {
	"name": "firstName1 lastName1",
	"role": "role1",
	"welcomeMessage": "message1",
	"contacts": {
		"mobile": "mobile1",
		"email": "email1",
		"github": "github1",
		"twitter": "twitter1",
		"location": "location1"
	},
	"skills": ["awesome", "JavaScript", "HTML", "CSS"]
}

var education = {
	"schools": [
		{
		"name": "name1",
		"location": "location1",
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
		"location": "location2",
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
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


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
}
displayEducation();

// TO DO: add online courses



// add widgets to HTML page
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);