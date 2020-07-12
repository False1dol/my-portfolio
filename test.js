var jsonObject = {
    "name": "Rounak Sengupta",
    "role": ["Software Engineer", "ML-Engineer"],
    "age": "25",
    "phone": "1 (480) 558-6221",
    "email": "1994.ron@gmail.com",
    "address": "Tempe, Arizona - 85281",
    "github": "https://www.github.com/falseid0l",
    "linkedin": "https://www.linkedin.com/in/falseid0l",
    "about": "I'm keen on solving the myriad problems plaguing our world, starting with the small ones. One of the best ways I know how to do that is: by writing code. And that's who I am, a Software Engineer.",
    "resumeIntro": "Initially, I desired to be a Hardware Engineer and hence my degree in Electronics. Soon, after considerable re-thoughts, I decided to make a switch to Software. Following this pursuit, I'm undergoing a Master's degree in Computer Engineering.",
    "education": [
        {
            "university": "Arizona State University, Tempe",
            "years": "2019-2020",
            "degree": "Masters in Computer Engineering (CS)"
        },
        {
            "university": "Arizona State University, Polytechnic",
            "years": "2018-2019",
            "degree": "Masters in Information Technology (Switched Majors)"
        },
        {
            "university": "National Institute of Technology, Karnataka (NITK, India)",
            "years": "2012-2016",
            "degree": "Bachelor of Technology in Electronics & Communication (ECE)"
        }],
    "employment":[
        {
            "company": "CloudPact (acquired by ASG Technologies), Hyderabad, India",
            "years": "2016-2017",
            "role": "Software Engineer"
        },
        {
            "company": "Zemoso Labs, Hyderabad, India",
            "years": "2016-2016",
            "role": "Software Engineering Intern"
        }],
    "generalSkills": [
        {
            "skill": "JavaScript",
            "value": "90"
        },
        {
            "skill": "React",
            "value": "90"
        },
        {
            "skill": "MongoDB",
            "value": "90"
        },
        {
            "skill": "Python",
            "value": "80"
        },
        {
            "skill": "TensorFlow",
            "value": "60"
        },
        {
            "skill": "PyTorch",
            "value": "50"
        },
        {
            "skill": "Java",
            "value": "50"
        },
        {
            "skill": "C++",
            "value": "50"
        }],
    "personalProjects": [
        {
            "title": "Ultimate Calendar",
            "image": "AiOutlineCalendar",
            "githubLink": "https://github.com/FalseId0l/ultimate-calendar",
            "about": "An Event-Calendar library, built with React to help me in my Kronosphere project.",
            "aboutLonger": ""
        },
        {
            "title": "Kronosphere",
            "image": "AiOutlineSchedule",
            "githubLink": "https://github.com/FalseId0l/Kronosphere",
            "about": "Creates a blister in spacetime, trapping all units caught in its sphere of influence and causes you to move very quickly inside it.",
            "aboutLonger": ""
        }],
    "courseProjects": [
        {
            "title": "Large Scale Recommendation System",
            "image": "AiOutlineBulb",
            "githubLink": "https://github.com/FalseId0l/Large-Scale-Recommendation-System",
            "about": "Built a Recommendation System using an Attention model coupled with a DNN-CTR model to significantly boost recommendation accuracy.",
            "aboutLonger": ""
        },
        {
            "title": "Music Genre Recognition",
            "image": "AiOutlineAudio",
            "githubLink": "https://github.com/FalseId0l/Music-Genre-Recognition",
            "about": "Used different models such as SVMs, CNNs, Logistic Regression to generate the classifiers. Accuracies of up to 96% were achieved.",
            "aboutLonger": ""
        },
        {
            "title": "Food Delivery System using TurtleBot",
            "image": "AiOutlineCar",
            "githubLink": "https://github.com/FalseId0l/TurtleBot-Delivery-System",
            "about": "Solved the problem to reach all the destinations within all time and distance constraints by leveraging the A* algorithm in Gazebo (ROS).",
            "aboutLonger": ""
        },
        {
            "title": "Security Concerns in Cryptocurrencies and their Countermeasures",
            "image": "AiOutlineSecurityScan",
            "githubLink": "https://github.com/FalseId0l/Security-Concerns-in-Cryptocurrencies",
            "about": "Reviewed and discussed the variety of areas in which blockchain has been applied and its security concerns.",
            "aboutLonger": ""
        },
        {
            "title": "Enrollment Prediction",
            "image": "AiOutlineFundView",
            "githubLink": "https://github.com/FalseId0l/Enrollment-Prediction-Database",
            "about": "Used randomly generated data from MongoDB (the NoSQL database) to train a machine learning bot for predicting the enrollment number for a school for a particular year.",
            "aboutLonger": ""
        }],
    "futureProjects":[
        {
            "title": "Chess bot",
            "image": "AiOutlineRobot",
            "githubLink": "#",
            "about": "Work in Progress",
            "aboutLonger": ""
        },
        {
            "title": "Predicting stocks using DL and other models",
            "image": "AiOutlineStock",
            "githubLink": "#",
            "about": "Work in Progress",
            "aboutLonger": ""
        },
        {
            "title": "Not finalized yet",
            "image": "AiOutlineGold",
            "githubLink": "#",
            "about": "Work in Progress",
            "aboutLonger": ""
        }]
}


const fs = require('fs');

var data = "";
data = data + "REACT_APP_USER_NAME = " + JSON.stringify(jsonObject.name) + "\n";
data = data + "REACT_APP_USER_ROLE = " + JSON.stringify(jsonObject.role) + "\n";
data = data + "REACT_APP_USER_AGE = " + JSON.stringify(jsonObject.age) + "\n";
data = data + "REACT_APP_USER_PHONE = " + JSON.stringify(jsonObject.phone) + "\n";
data = data + "REACT_APP_USER_EMAIL = " + JSON.stringify(jsonObject.email) + "\n";
data = data + "REACT_APP_USER_ADDRESS = " + JSON.stringify(jsonObject.address) + "\n";
data = data + "REACT_APP_USER_GITHUB = " + JSON.stringify(jsonObject.github) + "\n";
data = data + "REACT_APP_USER_LINKEDIN = " + JSON.stringify(jsonObject.linkedin) + "\n";
data = data + "REACT_APP_USER_ABOUT = " + JSON.stringify(jsonObject.about) + "\n";
data = data + "REACT_APP_USER_RESUME_INTRO = " + JSON.stringify(jsonObject.resumeIntro) + "\n";
data = data + "REACT_APP_USER_EDUCATION = " + JSON.stringify(jsonObject.education) + "\n";
data = data + "REACT_APP_USER_EMPLOYMENT = " + JSON.stringify(jsonObject.employment) + "\n";
data = data + "REACT_APP_USER_GENERAL_SKILLS = " + JSON.stringify(jsonObject.generalSkills) + "\n";
data = data + "REACT_APP_USER_PERSONAL_PROJECTS = " + JSON.stringify(jsonObject.personalProjects) + "\n";
data = data + "REACT_APP_USER_COURSE_PROJECTS = " + JSON.stringify(jsonObject.courseProjects) + "\n";
data = data + "REACT_APP_USER_FUTURE_PROJECTS = " + JSON.stringify(jsonObject.futureProjects) + "\n";


fs.writeFile(".env", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


console.log(data);