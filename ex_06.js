function findAddresses(toFind) {
let addresses = [
["45 avenue des tulipes ", "92130 Issy - les - Moulineaux "],
["95 avenue parmentier ", "75011 Paris "],
["24 Rue Pasteur ", "92400 Courbevoie "],
["Champ de Mars , 5 Av . Anatole France ", "75007 Paris "],
["Pl . Louis -Armand ", "75571 Paris"]];
let searchString = toFind.trim().toLowerCase();
addresses.forEach(address => {
let fullAddress = address.join(', ').toLowerCase()
if (fullAddress.includes(searchString)) {
console.log(fullAddress.trim()); }
})}
//findAddresses("Paris")