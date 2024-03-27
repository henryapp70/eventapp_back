const myObj = {
  name: "Weekly Food Festival: A Culinary Journey",
  description: "Experience diverse flavors from all over the world!",
  start_date: "2024-10-26T00:00:00.000Z",
  end_date: "2024-10-27T00:00:00.000Z",
  start_hour: "11:00:00",
  end_hour: "21:00:00",
  location: "Park",
  category: "Food",
  access: "paid",
  image: [
    "https://plus.unsplash.com/premium_photo-1711390047540-a76d80a9620e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  city: "Paris",
  id_user: 1,
};

console.log(myObj.description.toLowerCase().includes("Experience".toLowerCase()))
console.log(myObj.description.includes("experience"))
