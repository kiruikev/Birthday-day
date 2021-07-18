days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"


// M
months = new MakeArray(12);
months[1] = "January" 
months[2] = "February" 
months[3] = "March" 
months[4] = "April" 
months[5] = "May" 
months[6] = "June" 
months[7] = "July" 
months[8] = "August"
months[9] = "September" 
months[10] = "October"
months[11] = "November"
months[12] = "December"






function Blankcheck(){
    if (document.getElementById("date1").value == ""){
        alert("Enter Date Born");
        {
            if (document.getElementById("month").value == ""){
                alert("Enter Month Born");
            }   
            {
                if (document.getElementById("yearborn").value == ""){
                    alert("Enter Year Born");
                
    } 
}
        }
    }
        }
       
weekday[1]="Sunday";
weekday[2]="Monday";
weekday[3]="Tuesday";
weekday[4]="Wednesday";
weekday[5]="Thursday";
weekday[6]="Friday";
weekday[7]="Saturday";
function Results(){
            var year = document.getElementById("yearborn")
            var DD = document.getElementById("date1")
            var MM = document.getElementById("month")
            var CC = "20"
            var YY = "04"
        
    var DayofWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    alert(DayofWeek)
}