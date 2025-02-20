import Header from "../components/Header"

const menuCategories = [
  {
    name: "Burgers",
    items: [
      { name: "Maple Syrup Burger", price: "$11.99", description: "Juicy beef patty with a hint of sweet maple syrup" },
      { name: "Poutine Burger", price: "$12.99", description: "Burger topped with fries, cheese curds, and gravy" },
      {
        name: "Bacon Beaver Tail Burger",
        price: "$13.99",
        description: "Burger with crispy bacon and a sweet beaver tail pastry",
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        name: "Poutine Supreme",
        price: "$9.99",
        description: "Classic fries topped with cheese curds and savory gravy",
      },
      {
        name: "Maple Glazed Sweet Potato Fries",
        price: "$6.99",
        description: "Sweet potato fries with a maple syrup glaze",
      },
      { name: "Smoked Meat Poutine", price: "$11.99", description: "Poutine topped with Montreal-style smoked meat" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Butter Tart Delight", price: "$3.99", description: "A rich and buttery treat that's purely Canadian" },
      { name: "Nanaimo Bar", price: "$4.99", description: "Layered chocolate, custard, and coconut dessert bar" },
      { name: "Maple Pecan Pie", price: "$5.99", description: "Classic pecan pie with a maple twist" },
    ],
  },
]

export default function Menu() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-red-600 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

