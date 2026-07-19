export function Priority(prior) {
    if (prior === "high") {
      return ["text-red-500/70 border-2 border-red-500"];
    } else if (prior === "medium") {
      return ["text-yellow-500/90 border-2 border-yellow-500"];
    } else {
      return ["text-green-500/90 border-2 border-green-500"];
    }
  }