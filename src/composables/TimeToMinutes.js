export function DurationForShowingMinutes(seconds) {
    let min = String(Math.floor(seconds / 60));

    min = min.padStart(2,"0") 
   
    return min;
  }