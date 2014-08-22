(function(){

  // for styling console messages
  var bold = 'font-weight: bold;';

  var buildings = {};

  // building constructor
  function Building(name) {
    this.name = name;
    this.contents = [];
    // TODO
    // create an action that adds all buildings to the buildings object on creation
    buildings[this.name] = this.contents;
  }
  console.log('%cCreate Post Office building', bold);
  var postOffice = new Building('postOffice');
  console.log('postOffice: ', postOffice);
  // console.log("instance chk", postOffice instanceof Building);
  // console.log("Buildings hash: ", buildings);

  // package constructor
  function Package(destination) {
    this.destination = destination;
    // TODO
    // create an action that adds all packages to the postOffice's contents on creation
    postOffice.contents.push(this);
  }
// console.log("Post Office contents: ", buildings['postOffice']);
  // truck constructor
  function Truck() {
    this.contents = [];
    this.location = '';

    this.drive = function(destination) {
      // TODO
      // write a method that takes a string as an argument
      // and changes the truck's location to the destination that matches that string
      this.location = destination;
    };

    this.pickUp = function() {
      // TODO
      // write a method that takes no arguments
      // and removes all packages from the truck's location's contents
      // and adds them to the contents of the truck
      for(var i = 0; i < this.location.contents.length; i++){
        this.contents.push(this.location.contents[i]);
      };
      // Not working: this.contents.push(this.location.contents);
      this.location.contents = [];

    };

    this.dropOff = function() {
      // TODO
      // write a method that takes no arguments
      // and removes package all packages from the truck's contents
      // if the package's destination is the same as the truck's location
      // and adds it to the contents of the truck's location
      for(var i = 0; i < this.contents.length; i++) {
        if (this.location.name === this.contents[i].destination) {

          this.location.contents.push(this.contents[i]);

          // this.location.contents[i] = [];
          this.contents[i] = [];
        }
      }
    };

  }

  console.log('%cCreate MakerSquare building', bold);
  var makerSquare = new Building('makerSquare');
  console.log('makerSquare: ', makerSquare);

  console.log('%cCreate Whataburger building', bold);
  var whataburger = new Building('whataburger');
  console.log('whataburger: ', whataburger);

  console.log('%cCreate Capitol building', bold);
  var capitol = new Building('capitol');
  console.log('capitol: ', capitol);

  console.log('%cCreate packages', bold);
  var makerSquarePackage = new Package('makerSquare');
  var whataburgerPackage = new Package('whataburger');
  var capitolPackage = new Package('capitol');
  console.log('postOffice: ', postOffice);

  console.log('%cCreate truck', bold);
  var myTruck = new Truck();
  console.log('myTruck: ', myTruck);

  // TODO
  // Deliver all packages

  myTruck.drive(postOffice);
  myTruck.pickUp();
  console.log("Truck location: ", myTruck.location.name);
  console.log("Truck contents: ", myTruck.contents);
  console.log("Post Office contents", postOffice.contents);
  myTruck.drive(makerSquare);
  console.log("Truck location: ", myTruck.location);
  myTruck.dropOff();
  console.log("MakerSquare", makerSquare.contents);
  console.log("Truck contents", myTruck.contents);
  myTruck.drive(whataburger);
  myTruck.dropOff();
  console.log("Whataburger", whataburger.contents);
  console.log("Truck contents", myTruck.contents);
  myTruck.drive(capitol);
  myTruck.dropOff();
  console.log("Capitol", capitol.contents);
  console.log("Truck contents", myTruck.contents);

  // console.log("I've dropped off the packages, chief");
  console.log("Buildings hash: ", buildings);

})();
