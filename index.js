function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (worker = "go to the office") {
    return `This Monday, I will ${worker}.`;
}
function wrapAdjective(symbol = "*") {
    return function(description = "special") {
        return `You are ${symbol}${description}${symbol}!`;
    } 
} 