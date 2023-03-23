// Code your solution in this file!
  const distanceFromHqInBlocks=function(destination,location){
    const location =42;
    return (destination-location);
 }
 const distanceFromHqInFeet=function(distanceFromHqInBlocks){
    return (distanceFromHqInBlocks*264);
    
 }
 const distanceTravelledInFeet = function(start,destination){
    return ((destination-start)*264);
 }
function calculatesFarePrice(start,destination){
    
    if((start-destination)=distanceTravelledInFeet<400){
        return 'gives customers a free sample';
    }
    if((start-destination)=distanceTravelledInFeet>=400 && distanceTravelledInFeet<=2000){
        return `${(2*distanceTravelledInFeet)} cents`;
    }
    if((start-destination)=distanceTravelledInFeet>2000 && distanceTravelledInFeet<2500) {
        return '25 dollars';
    }
    if((start-destination)=distanceTravelledInFeet>2500) {
        return 'cannot travel that far';
    }
}
     
    
    
    
   
 