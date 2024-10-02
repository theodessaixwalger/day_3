function fillBus(peopleAtBusStops, busSeats){
let nbrpassager = 0
let index = 0
while(index < peopleAtBusStops.length){
nbrpassager += peopleAtBusStops[index]
if(nbrpassager >= busSeats){
return index
}index++
}
return -1
}