

function saturdayFun(activity = "roller-skate"){
  return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();


function mondayWork(work = "go to the office"){
  return (`This Monday, I will ${work}.`);
}
mondayWork();


let wrapAdjective = function(result='*'){
  return function(adj="new"){
    return `You are ${result}${adj}${result}!`; 
  }
}

/*
function wrapAdjective(result = '*'){
let emphatic = function (){
    return `You are ${result}a hard worker${result}!`; 
}
return `You are ${result}a dedicated programmer${result}!`;
return emphatic;
}
*/