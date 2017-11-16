var salaries = {
    John : 100,
    Bill : 300,
    Mike : 250
};
var salaries2 = {
    Chris : 150,
    Brain : 600,
    John : 300,
    Steve : 400,
    Bill : 50
};
function maxSalary(tmp){
    var max = 0;
    for(var key in tmp){
        if(max < tmp[key]){
            max = tmp[key];
        }
    }
    return max;
}
console.log("Max salary :" + maxSalary(salaries));
console.log("Max salary :" + maxSalary(salaries2));
