// Here are the EV charging station data class.


class Coords {
  x = 0
  y = 0
  constructor(x,y) {
      this.x = x
      this.y = y
  }
}


class EVStation {

  coords = undefined
  name = undefined
  station_id = 0

}
// 

class User {
  name = undefined
  user_id = undefined
  birthdate = undefined
  home_location = undefined
  favouriteStations = new Set()
  addFavouriteStation(station_id) {
    this.favouriteStations.add(station_id)
}
removeFavouriteStation(station_id) {
  this.favouriteStations.delete(station_id)
}
  
}
class UserBuilder {
 
   _user = new User(undefined,undefined,undefined);
  name(name) {
      this._user.name = name;
      return this
  }
  birthdate(birthdate) {
      this._user.birthdate = birthdate;
      return this

  }
  home_location(home_location) {
      this._user.home_location = home_location;
      return this
  }
  build() {
      let res = this._user;
      this._user = new User(undefined,undefined,undefined)
      return res;
  }
  user_id(user_id) {
    this._user.user_id = user_id
    return this
  }


}

function test() {
  const uf = new UserBuilder()
  const tim = uf.name("tim").home_location(new Coords(1,1)).birthdate(new Date("12/12/2002")).user_id(1).build()
  console.log(tim.name === 'tim')
}
function test2() {
  const uf = new UserBuilder()
  const tim = uf.name("tim").home_location(new Coords(1,1)).birthdate(new Date("12/12/2002")).user_id(1).build()
  tim.addFavouriteStation(11)
  console.log(tim.favouriteStations.size ==1)
}

test2()