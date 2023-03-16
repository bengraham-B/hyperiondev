/*
 * Changes I made after task was submitted:
 * (1) //Added '0.10 -> bounsRate' as an extra attribute to the SalariedEmployee class
 */



//Basic Pay Rates for employees
const salary = 25000 // Monthly salary: R25 000
const hourly = 100 // Employees earn R100 per hour
class Employee{
    constructor(employeeName, employeeType, basicPay, exceedSalesTarget){
        this.employeeName = employeeName
        this.employeeType = employeeType
        this.basicPay = basicPay
        this.exceedSalesTarget = false
    }

    //This method will be inherirted by all the classes which extends the 'Employee' class and will
    //  change the attribute of each class instance of 'exceedSalesTarget' from false to true.
    employeeExceededSalesTarget = () =>{ 
        this.exceedSalesTarget = true
    }
    
}




class SalariedEmployee extends Employee {
    constructor(employeeName, employeeType, basicPay, exceedSalesTarget, bonusRate){ //Added '0.10 -> bounsRate' as an extra attribute to the SalariedEmployee class
        super(employeeName, employeeType, basicPay, exceedSalesTarget)
        this.bonusRate = bonusRate


    }

    displaySlariedPay = () => {
        if(this.exceedSalesTarget === true){
            let exceededPay = this.basicPay + (this.basicPay * this.bonusRate)
            return console.log(`Employee Name: ${this.employeeName}, Type: ${this.employeeType}, Payout is R${exceededPay}(exceeded Sales Target), formula: basicPay + (basicPay * 0.10)`)
        }

        else {
            return console.log(`Employee Name: ${this.employeeName}, Type: ${this.employeeType}, Payout is R${this.basicPay}}`)
        }

    }
}




class HourlyEmployee extends Employee {
    constructor(employeeName, employeeType, basicPay, exceedSalesTarget, hoursWorked){
        super(employeeName, employeeType, basicPay, exceedSalesTarget)
        this.hoursWorked = hoursWorked
    }

    displayHourlyPay = () => {
        let hoursWorkedPay = this.basicPay * this.hoursWorked // this is the emloyees standard payout

        if(this.exceedSalesTarget === true){
            let exceededPay = hoursWorkedPay + (hoursWorkedPay * 0.50) // if the employee exceeds their sales target they will recieve a 50% in crease in salary for the month 
            return console.log(`Employee Name: ${this.employeeName}, Type: ${this.employeeType}, Payout is R${exceededPay}(exceeded Sales Target), formula: (this.basicPay * this.hoursWorked) + (hoursWorkedPay + (hoursWorkedPay * 0.50))`)
        }

        else {
            return console.log(`Employee Name: ${this.employeeName}, Type: ${this.employeeType}, Payout is R${hoursWorkedPay}, formula: this.basicPay * this.hoursWorked`)
        }

    }
}



class HybridEmployee extends Employee{
     constructor(employeeName, employeeType,basicPay, hourly, exceedSalesTarget, hoursWorked){
        super(employeeName, employeeType,basicPay, exceedSalesTarget)
        this.hourly = hourly
        this.hoursWorked = hoursWorked
    }

    displayHybridPay = () => {
        let hoursWorkedPay = hourly * this.hoursWorked  // This is the hourly rated they will recieve for extra work
        let standardPayout = hoursWorkedPay + this.basicPay // This is the basic pay the employee recives as well as the extra hours which they have worked

        if(this.exceedSalesTarget === true){
            let exceededPay = standardPayout + (standardPayout * 0.20) // if the employee exceeds the sales target they will recieve an extra 20% payout
            return console.log(`Employee Name: ${this.employeeName}, Type: ${this.employeeType}, Payout is R${exceededPay}(exceeded Sales Target), formula: this.basicPay + (this.hoursWorked * hourly) + (0.20 * (this.basicPay + (this.hoursWorked * hourly)))`)
        }

        else {
            return console.log(`Employee Name: ${this.employeeName}, Type: ${this.employeeType}, Payout is R${standardPayout}`) // if the employee did not exceed their sales target they will only recvie base pay plus the extra hours they worked.
        }
    }
}


//~ Instances of employees
const employee1 = new SalariedEmployee("Max.G", "salaried Employee", salary, false, 0.10) //Added '0.10 -> bounsRate' as an extra attribute to the SalariedEmployee class
const employee2 = new SalariedEmployee("Toby.G", "salaried Employee", salary, false, 0.10) //Added '0.10 -> bounsRate' as an extra attribute to the SalariedEmployee class

const employee3 = new HourlyEmployee("Bella.G", "Hourly Employee", hourly, false, 96)
const employee4 = new HourlyEmployee("Albert.G","Hourly Employee", hourly, false, 37)

const employee5 = new HybridEmployee("Lindsey.G", "Hybrid Employee",salary, hourly, false, 16)
const employee6 = new HybridEmployee("Ben.G","Hybrid Employee", salary, hourly, false, 21)



//~ Employees payout if they did not exceed the sales target 
employee1.displaySlariedPay()
employee2.displaySlariedPay()
employee3.displayHourlyPay()
employee4.displayHourlyPay()
employee5.displayHybridPay()
employee6.displayHybridPay()

//~ Employees payout if they exceeded the sales target 
employee1.employeeExceededSalesTarget()
employee1.displaySlariedPay()

employee2.employeeExceededSalesTarget()
employee2.displaySlariedPay()

employee3.employeeExceededSalesTarget()
employee3.displayHourlyPay()

employee4.employeeExceededSalesTarget()
employee4.displayHourlyPay()

employee5.employeeExceededSalesTarget()
employee5.displayHybridPay()

employee6.employeeExceededSalesTarget()
employee6.displayHybridPay()


