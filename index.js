let studentsnames=["Neha","Rohan","Rohit"]
for(let i=0;i<studentsnames.length;i++){
    console.log(studentsnames[i]);
}
const newarray=studentsnames.map((ele,indx)=>
{
    if(indx==0){
        return `Dr ${ele}`;
    }else{
        return ele;
    }
});
console.log(newarray);
