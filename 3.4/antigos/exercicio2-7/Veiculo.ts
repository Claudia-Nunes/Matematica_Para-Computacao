class Veiculo {
    private coordenadaLongitude: number;
    private coordenadaLatitude: number;
  
    constructor(longitude: number, latitude: number) {
      this.coordenadaLongitude = longitude;
      this.coordenadaLatitude = latitude;
    }
  
    mover(longitude: number, latitude: number) {
      this.coordenadaLongitude = longitude;
      this.coordenadaLatitude = latitude;
    }
  }
  export{Veiculo}