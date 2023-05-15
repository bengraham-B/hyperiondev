INSTRUCTIONS FOR TESTING API WITH POSTMAN

(1) Open postman and type "http://localhost:8080/api" in the "Enter request URL" input.

(2) to make a GET request, change the verb GET and select the "none" option under the input
    and press the "send" button

(3) To make a POST request, change the verb to POST, select the "body" option under the input,
    select the "raw" button, on the drop down menu select JSON and enter the below code in text field: 
    {
        "id": 4,
        "title": "New Web Project",
        "description": "This is a new web project",
        "URL": "https://newproject.com"
    }


(4) To make a DELET request, change the verb to DELETE, select the "body" option under the input,
    select the "raw" button, on the drop down menu select JSON and enter the below code in text field: 
    {
        "title": "Express Todo App!"
    }   



(5) To make a PUT request, change the verb to "PUT", select the "body" option under the input,
    select the "raw" button, on the drop down menu select JSON and enter the below code in text field: 
    {
        "update_id": 1,
        "update_title": "REACT Snake Game!",
        "update_description": "Learn how to make a snake game in react!"
    }