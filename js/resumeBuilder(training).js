// var awesomeThoughts = "My name is Ronny and I'm awesome";

// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);

var name = "Ronny Hoesada";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front-end Developer Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesome", "programming", "teaching", "JS"];
$("#main").append(skills);

var bio = {
	"name": "Ronny Hoesada",
	"role": "Front-end Developer Ninja",
	"contacts": {
		"home": 123,
		"mobile": 456
	},
	"pictureURL": "www.github.com",
	"welcomeMsg": "Hello",
	"skills": ["awesome", "programming", "teaching", "JS"]
}

$("#main").append(bio.contacts.home);

var education = {
	"schools": [
		{
			"name": "UC Berkeley",
			"city": "Berkeley",
			"major": "Econ",
			"graduation": "2008"
		},
		{
			"name": "UCLA",
			"city": "Los Angeles",
			"major": "Business",
			"graduation": "2011"
		}
	]
}


// Practice for capturing clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


// Practice for returning all work locations
function locationizer(work) {
	var locationArray = [];

	for (i in work.jobs) {
		var myLocation = work.jobs[i].location;
		locationArray.push(myLocation);
		}

	return locationArray;
}


// Practice for changing name to international format
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	console.log(name[0] +" "+ name[1]);

	return name[0] +" "+ name[1];
}
$("#main").append(internationalizeButton);

inName(name);
