var jsonObject = {
    "name": "Rounak Sengupta",
    "role": ["Software Engineer", "ML-Engineer"],
    "age": "25",
    "phone": "1 (480) 558-6221",
    "email": "1994.ron@gmail.com",
    "address": "Tempe, Arizona - 85281",
    "github": "https://www.github.com/falseid0l",
    "linkedin": "https://www.linkedin.com/in/falseid0l",
    "about": "I'm interested in solving the myriad problems plaguing our world, starting with the small ones. One of the best ways I know how to do that is: by writing code. And that's who I am, a Software Engineer.",
    "resume-intro": "Initially, I desired to be a Hardware Engineer and hence my degree in Electronics. But soon after, after considerable rethoughts, I decided to make a switch to Software. Following this pursuit, I'm undergoing a Master's degree in Computer Engineering.",
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
            "about": "",
            "aboutLonger": ""
        },
        {
            "title": "Kronosphere",
            "image": "AiOutlineSchedule",
            "githubLink": "https://github.com/FalseId0l/Kronosphere",
            "about": "",
            "aboutLonger": ""
        }],
    "courseProjects": [
        {
            "title": "Security Concerns in Cryptocurrencies and their Countermeasures",
            "image": "AiOutlineSecurityScan",
            "githubLink": "https://github.com/FalseId0l/Security-Concerns-in-Cryptocurrencies",
            "about": "",
            "aboutLonger": ""
        },
        {
            "title": "Large Scale Recommendation System",
            "image": "AiOutlineBulb",
            "githubLink": "https://github.com/FalseId0l/Large-Scale-Recommendation-System",
            "about": "",
            "aboutLonger": ""
        },
        {
            "title": "Music Genre Recognition",
            "image": "AiOutlineAudio",
            "githubLink": "https://github.com/FalseId0l/Music-Genre-Recognition",
            "about": "Performed signal processing on the GTZAN music dataset to generate a usable dataset for machine learning. The Python library, Librosa was used for this. Used different models such as Support Vector Machines, Convolution Neural Networks, Logistic Regression to generate the classifiers. The highest accuracy achieved was 96%, using the Multinomial Logistic Regression model.",
            "aboutLonger": ""
        },
        {
            "title": "Food Delivery System using TurtleBot",
            "image": "AiOutlineCar",
            "githubLink": "https://github.com/FalseId0l/TurtleBot-Delivery-System",
            "about": "Solved the problem of a food delivery system where an agent is trying to reach all the destinations within all time constraints with minimal distance covered by leveraging the A* (A-star) algorithm. Added an additional time constraint to the state model of the TurtleBot in Gazebo on the ROS operating system.",
            "aboutLonger": ""
        },
        {
            "title": "Enrollment Prediction",
            "image": "AiOutlineFundView",
            "githubLink": "https://github.com/FalseId0l/Enrollment-Prediction-Database",
            "about": "Built a Python script to generate randomized data for 100 students as a JSON object and CSV file to store in NoSQL and SQL databases, respectively. Used data from MongoDB (the NoSQL database) to train a machine learning bot for predicting the enrollment number for a school for a particular year.",
            "aboutLonger": ""
        }],
    "futureProjects":[
        {
            "title": "Chess bot",
            "image": "AiOutlineRobot",
            "githubLink": "not there yet",
            "about": "",
            "aboutLonger": ""
        },
        {
            "title": "Predicting stocks using DL and other models",
            "image": "AiOutlineStock",
            "githubLink": "not there yet",
            "about": "",
            "aboutLonger": ""
        },
        {
            "title": "Not finalized yet",
            "image": "AiOutlineGold",
            "githubLink": "not finalized",
            "about": "",
            "aboutLonger": ""
        }]
}

console.log(JSON.stringify(jsonObject.futureProjects));