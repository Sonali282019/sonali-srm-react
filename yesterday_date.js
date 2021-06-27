var today = new Date();
    var yesterday = new Date(today);
    
    yesterday.setDate(today.getDate() - 1);
    console.log("Original Date : ",yesterday);

    const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    var month = today.getMonth() + 1
    yesterday = yesterday.getDate() + ' ' + monthNames[month] + ' ' + yesterday.getFullYear()
   
    console.log("Modify Date : ",yesterday);