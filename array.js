let studentsname=["sona","rohan","rohit"]

    const newarray = studentsname.map((ele,idx)=>
    {
        if(idx%2==0){
             return 'Dr.' + ele;

        }else{
        return ele;
    }
});
console.log(newarray);