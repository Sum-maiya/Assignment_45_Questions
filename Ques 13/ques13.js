//. Your Own Array: Think of your favorite mode of transportation, such as a
//motorcycle or a car, and make a list that stores several examples. Use your list to
//print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["car", "motorcycle", "bicycle", "scooter", "skateboard"];
for (var _i = 0, favoriteTransportation_1 = favoriteTransportation; _i < favoriteTransportation_1.length; _i++) {
    var item = favoriteTransportation_1[_i];
    console.log("I would like to own a ".concat(item, "."));
}
