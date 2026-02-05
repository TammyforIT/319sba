await Cat.insertMany([
  { name: "Kocho", age: 3, breed: "Chaos Goblin", owner: owners[0]._id, vet: vets[0]._id },
  { name: "Mochi", age: 2, breed: "Ragdoll", owner: owners[1]._id, vet: vets[1]._id },
  { name: "Luna", age: 4, breed: "Bombay", owner: owners[2]._id, vet: vets[2]._id },
  { name: "Salem", age: 5, breed: "Black Shorthair", owner: owners[3]._id, vet: vets[3]._id },
  { name: "Neko", age: 1, breed: "Tabby", owner: owners[4]._id, vet: vets[4]._id }
]);
router.get("/", async (req, res) => {
  const { breed } = req.query;
  const filter = {};

  if (breed) filter.breed = breed;

  const cats = await Cat.find(filter).populate("owner vet");
  res.json(cats);
});
