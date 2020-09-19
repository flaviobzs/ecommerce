import uuid from "uuid/v4"

let inventory = [
  {
    categories: ["masculino"],
    name: "Boneco",
    price: "100",
    image: "../images/products/boneco.png",
    description: "Um boneco exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["masculino", "infantil"],
    name: "Boneco Robô",
    price: "100",
    image: "../images/products/boneco2.png",
    description: "Um boneco exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["masculino", "feminino"],
    name: "Caneca",
    price: "100",
    image: "../images/products/caneca.png",
    description: "Uma caneca exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["infantil"],
    name: "Brinquedo",
    price: "100",
    image: "../images/products/construcao.png",
    description: "Um brinquedo exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["masculino"],
    name: "Dado",
    price: "100",
    image: "../images/products/dado.png",
    description: "Um dado exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["feminino"],
    name: "Óculos",
    price: "100",
    image: "../images/products/oculos.png",
    description: "Um óculos exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["feminino", "infantil"],
    name: "Pelúcia",
    price: "100",
    image: "../images/products/pelucia.png",
    description: "Uma pelúcia exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["feminino", "infantil"],
    name: "Porco de Pelúcia",
    price: "100",
    image: "../images/products/porco.png",
    description: "Um porco de pelúcia exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["feminino"],
    name: "Pulseira",
    price: "100",
    image: "../images/products/pulseira.png",
    description: "Um pulseira exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
  {
    categories: ["masculino"],
    name: "Pulseira",
    price: "100",
    image: "../images/products/pulseira2.png",
    description: "Um pulseira exemplo.",
    brand: "Lembrei!",
    currentInventory: 14,
  },
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
