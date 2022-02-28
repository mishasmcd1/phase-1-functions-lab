function distanceFromHqInBlocks(someValue) {
    if (someValue < 42)
        return (42 - someValue)
    else if (someValue > 42)
        return (someValue - 42)
};
distanceFromHqInBlocks();
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
distanceFromHqInFeet();
function distanceTravelledInFeet(start, destination) {
    if (start < destination)
        return (destination - start) * 264
    else if (start > destination)
        return (start - destination) * 264;
}
distanceTravelledInFeet();
function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }