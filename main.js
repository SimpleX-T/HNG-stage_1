const date = new Date();

function updateCurrentInfo() {
	const timeElement = document.querySelector(
		'[data-testid="currentTimeUTC"]'
	);
	timeElement.textContent = date.toUTCString();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const dayElement = document.querySelector('[data-testid="currentDay"]');
	dayElement.textContent = days[date.getDay()];
}

function setProfileInfo() {
	document.querySelector('[data-testid="slackDisplayName"]').textContent =
		"tochukwu";

	// Replace with your actual Slack email
	document.querySelector('[data-testid="slackEmail"]').textContent =
		"your.email@example.com";
}

// Function to set profile picture
function setProfilePicture() {
	const img = document.querySelector('[data-testid="slackProfilePicture"]');
	img.src = "slackdisplaypicture.jpg";
	img.alt = "My Profile Picture";

	// Ensure image has natural dimensions
	img.onload = function () {
		if (this.naturalWidth && this.naturalHeight) {
			console.log("Image has natural dimensions");
		} else {
			console.error("Image does not have natural dimensions");
		}
	};
}

// Update time every second
setInterval(updateCurrentInfo, 1000);

// Initialize page
function initPage() {
	updateCurrentInfo();
	setProfileInfo();
	setProfilePicture();

	document.getElementById("curYear").textContent = date.getFullYear();
}

// Call initPage when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initPage);
