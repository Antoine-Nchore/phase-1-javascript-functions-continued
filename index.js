function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  //Test 2

  // Function for Saturday fun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function for Monday work
  function mondayWork(work = "go to the office") {
    return `This Monday, I need to ${work}.`;
  }
  
  // Function for wrapAdjective
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}`;
    };
  }
  
  // Example usage of wrapAdjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));