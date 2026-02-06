import dotenv from "dotenv";
import mongoose from "mongoose";
import Owner from "./models/Owner.js";
import Vet from "./models/Vet.js";
import Cat from "./models/Cat.js";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);

  await Owner.deleteMany();
  await Vet.deleteMany();
  await Cat.deleteMany();

  const owners = await Owner.insertMany([
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Cindy", email: "cindy@example.com" },
    { name: "David", email: "david@example.com" },
    { name: "Eve", email: "eve@example.com" }
  ]);

  const vets = await Vet.insertMany([
    { name: "Dr. Whiskers", clinic: "Happy Paws" },
    { name: "Dr. Garcia", clinic: "Cat Care Clinic" },
    { name: "Dr. Luna", clinic: "Feline Health" },
    { name: "Dr. Charles", clinic: "Nightshade Vet" },
    { name: "Dr. Carson", clinic: "Tabby Town Clinic" }
  ]);

  await Cat.insertMany([
    { name: "Kocho", age: 3, breed: "Chaos Goblin", owner: owners[0]._id, vet: vets[0]._id },
    { name: "Mochi", age: 2, breed: "Ragdoll", owner: owners[1]._id, vet: vets[1]._id },
    { name: "Luna", age: 4, breed: "Bombay", owner: owners[2]._id, vet: vets[2]._id },
    { name: "Salem", age: 5, breed: "Black Shorthair", owner: owners[3]._id, vet: vets[3]._id },
    { name: "Neko", age: 1, breed: "Tabby", owner: owners[4]._id, vet: vets[4]._id }
  ]);

  console.log("Database seeded");
  process.exit();
}

seed();
