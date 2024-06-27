     //27-04-2024
        //Today Topics
        //Math.floor
        //New date();
        //getDate date ko show karny k liye
        //getMonth month ko show karny k liye
        //getYear year ko show karny k liye

    //Task 1 : user koi bhi name likhy tu us ka last digit show hojay.
    var userName = prompt("Enter Your Name")
    console.log(userName[userName.length-1]);

//Task 2 : Browser py 3 digit ka number shoe karwana h na 3 sy ziada hoon na 3 sy kum, jub bbi refresh
//... karien tu 3 digit hi ayn.

    var num = Math.floor(Math.random()*900)
    console.log(num);
    console.log(num+100);

//Task 3 : Find the generate date and time?
       var now = new Date();
       console.log(now);
    // agar is ko string main convert karien tu.
       console.log(now.toString());
    // agar date jo string main convert karien tu.
       console.log(now.toDateString());
    // agar time ko string main convert karien tu.
       console.log(now.toTimeString());
       
//Task 4 : array main week names hyn tu us main say day of nikalna hy..
       var daynames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
       var now = new Date();
       console.log(daynames [now.getDay()]);  
        
//Task 5 : date ko desired format main convert karien (DD/MM/YYYY)
       var today = new Date();
       var date = today.getDate();
       var month = today.getMonth()+1;
       var year = today.getFullYear();
       var formattedDate = date + '/' + month + '/' + year;
        console.log(formattedDate);