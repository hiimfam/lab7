function read(){
    
    var courseList = [
        {code:'1515', name:'Scripting for IT', date:'Fall 2020'},
        {code:'1630', name:'Database System', date:'Fall 2020'},
        {code:'1310', name:'Technical Math for IT', date:'Fall 2020'}
    ];

    var userinput = prompt('Please enter a 4-digit number');
    var inputlength = userinput.length;
    while (isNaN(userinput) === true || inputlength != 4){
        prompt('Invalid input, please try again!');
        inputlength = userinput.length;
    }

    for (i = 0; i < courseList.length; i++){
        if (courseList[i].code == userinput){
            alert(`Yes I am taking the course: ACIT ${courseList[i].code} - ${courseList[i].name} Date: ${courseList[i].date}`);
            if (userinput == courseList[0].code){
                var x = document.getElementById("course1");
               x.style.backgroundColor = "green";
            
            break
        }
        else{
            var newCourse = {code: userinput, name: null, date: 'Fall 2020'};
            courseList.push(newCourse);
            alert('Success!');
        }


        }
        if (userinput == courseList[1].code){
            var y = document.getElementById("course2");
            y.style.backgroundColor = "green";
            break
        }
        else if (userinput == courseList[2].code){
            var z = document.getElementById("course3");
            z.style.backgroundColor = "green";
            break
        }

    }

}
