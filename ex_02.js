function findHousing(housingToFind, housingList)
{
let lowerhousingtofind = housingToFind.toLowerCase()
let index = 0
while(index < housingList.length){
if(housingList[index].toLowerCase() === lowerhousingtofind)
{
return [index, housingList[index]]
}
index++
}
return null
}