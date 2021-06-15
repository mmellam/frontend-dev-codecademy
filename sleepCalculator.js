const getSleepHours = (userInput) => {

    if (userInput === "monday" || userInput === "tuesday" || userInput === "wednesday" || userInput === "thursday" || userInput === "friday" || userInput === "saturday" || userInput === "sunday") {
      console.log("Entered day: " + userInput);
   switch (userInput) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 10;
        break;
      case 'saturday':
        return 11;
        break;
      case 'sunday':
        return 12;
        break;
    }} else {
      return "please enter a valid day";
    };
   
  };
  console.log(getSleepHours('saturday'));
  
  const totalSleepHours = () => (getSleepHours('monday')) + (getSleepHours('tuesday')) + (getSleepHours('wednesday')) + (getSleepHours('thursday')) + (getSleepHours('friday')) + (getSleepHours('saturday')) + 
  (getSleepHours('sunday'));
  console.log(totalSleepHours());
  
  const getIdealSleep = (hours) => {
  
    return hours * 7;
  };
  console.log(getIdealSleep(8));
  
  const sleepDebt = () => {
    const sleepHours = totalSleepHours();
    const idealSleep = getIdealSleep(8);
    if (sleepHours === idealSleep) {
      console.log("perfect amount of sleep");
    } else if (sleepHours < idealSleep) {
      console.log("get more rest! you slept too little");
    } else {
      console.log("you got " + (idealSleep - sleepHours) + " more than needed");
    }
  }; 
  sleepDebt();
  