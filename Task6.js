var country = {
  name : "Украина",
    language : "украинский",
    capital : {
      name : "Киев",
        population : 299212,
        area : 847.15
    }
};
function format(beginMsg, endMsg){
    console.log(beginMsg + this.name + endMsg);
}
format.call(country,"<",">");
format.apply(country,["[", "]"]);
format.call(country,"\"\"","\"\"");
format.apply(country,["\"", "\""]);