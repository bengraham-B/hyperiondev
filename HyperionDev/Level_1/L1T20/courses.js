class Courses {
    constructor(courseName, contactWebsite){
        this.courseName = courseName
        this.contactWebsite = contactWebsite
    }

    displayContactWebsite = () => {
        return console.log(`This is the contact website for ${this.courseName}: ${this.contactWebsite}`)
    }
}

class Subject extends Courses{
    constructor(courseName, contactWebsite, subjectName, credits){
        super(courseName, contactWebsite)
        this.subjectName = subjectName
        this.credits = credits
    }

    displayCourse = () => {
        return console.log(`This subject '${this.subjectName}' belongs to the '${this.courseName}' course, and the subject has a total of ${this.credits} credits associated with it.`)
        
    }
}

const subject1 = new Subject("Full Stack Developer", "www.fullstackdev.co.za", "Introduction to Javascript", 30)
const subject2 = new Subject("software engineer", "www.softwareengineering.co.za", "Advanced Python", 45)
const subject3 = new Subject("Data Science", "www.moderdatasciensecourses.co.za", "Statistical Analysis in Python", 60)

// Instances of the Subject class
subject1.displayContactWebsite()
subject1.displayCourse()

subject2.displayContactWebsite()
subject2.displayCourse()

subject3.displayContactWebsite()
subject3.displayCourse()