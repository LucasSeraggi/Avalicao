const marcasValidas = [
  "Toyota", "Volkswagen", "Ford", "Chevrolet", "Honda", "Hyundai", "Nissan", "Kia",
  "Mercedes-Benz", "BMW", "Audi", "Peugeot", "Renault", "Fiat", "Skoda", "Mazda",
  "Subaru", "Jeep", "Chrysler", "Dodge", "Ram", "Buick", "Cadillac", "GMC",
  "Tesla", "Volvo", "Lexus", "Acura", "Infiniti", "Genesis", "Mini", "Mitsubishi",
  "Land Rover", "Jaguar", "Porsche", "Ferrari", "Lamborghini", "Maserati", "Aston Martin",
  "Alfa Romeo", "Bugatti", "Rolls-Royce", "Bentley", "Seat", "Cupra", "Citroen",
  "Opel", "DS Automobiles", "Haval", "Chery", "BYD", "Great Wall", "Geely", "BAIC",
  "FAW", "Dongfeng", "Zotye", "Lifan", "JAC", "Saab", "Scion", "Smart", "Rivian",
  "Lucid", "Polestar", "VinFast", "Tata", "Mahindra", "Perodua", "Proton", "Holden",
  "Daewoo", "Isuzu", "Suzuki", "SsangYong", "Dacia", "Roewe", "NIO", "XPeng",
  "Voyah", "Aiways", "Fisker", "Faraday Future", "Spyker", "Koenigsegg", "Pagani",
  "TVR", "Morgan", "Wiesmann", "Zenos", "Caterham", "Donkervoort"
]

function validate(marca) {
  return marcasValidas.includes(marca)
}

module.exports = { validate }
