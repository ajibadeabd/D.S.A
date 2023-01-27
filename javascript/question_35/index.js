function stringConstruction(s) {
    // Write your code here
    let hashString = s.split("").reduce((initial,current)=>{
        if(!initial[0][current]) initial[1]+=1
        
        initial[0][current]=current;
        return initial
    },[{},0])
    return hashString[1]
}
stringConstruction("qscdfc")