class RDWAPI {
  static API_URL = "https://opendata.rdw.nl/resource/m9d7-ebf2.json";
  static QUERIES = {
    ALL: "SELECT%20kenteken%2C%20voertuigsoort%2C%20merk%2C%20handelsbenaming%2C%20vervaldatum_apk_dt%2C%20inrichting%2C%20aantal_zitplaatsen%2C%20eerste_kleur%2C%20tweede_kleur%2C%20aantal_deuren%2C%20aantal_wielen%2C%20lengte%2C%20breedte%2C%20export_indicator%2C%20wam_verzekerd%2C%20taxi_indicator%2C%20datum_tenaamstelling_dt%2C%20datum_eerste_toelating_dt%20ORDER%20BY%20datum_eerste_toelating_dt%20ASC",
    ONE: "SELECT%20kenteken%2C%20voertuigsoort%2C%20merk%2C%20handelsbenaming%2C%20vervaldatum_apk_dt%2C%20inrichting%2C%20aantal_zitplaatsen%2C%20eerste_kleur%2C%20tweede_kleur%2C%20aantal_deuren%2C%20aantal_wielen%2C%20lengte%2C%20breedte%2C%20export_indicator%2C%20wam_verzekerd%2C%20taxi_indicator%2C%20datum_tenaamstelling_dt%2C%20datum_eerste_toelating_dt%20ORDER%20BY%20datum_eerste_toelating_dt%20ASC%20SEARCH%20%22<KENTEKEN>%22",
  };

  static async findVehicle(licensePlate) {
    const url = this.API_URL + "?$query=" + this.QUERIES.ONE;
    const response = await fetch(url.replace("<KENTEKEN>", licensePlate));
    const data = await response.json();
    return data[0];
  }
}

// Run it
RDWAPI.findVehicle("12BRZ3").then((data) => {
  console.log(data);
});
