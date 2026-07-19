export function DurationForShowingSeconds(seconds) {
     let sec = String(Math.floor(seconds % 60));

    sec = sec.padStart(2,"0") 
   
    return sec;
  }