const cast = [
  {
    "name": "Viola",
    "age": 22,
  },
  {
    "name": "Orsino",
    "age": 24,
  },
  {
    "name": "Olivia",
    "age": 21,
  },
  {
    "name": "Sir Toby Belch",
    "age": 19,
  },
  {
    "name": "Sir Andrew",
    "age": 21,
  },
  {
    "name": "Malvolio",
    "age": 35,
  },
  {
    "name": "Feste",
    "age": 27,
  },
];


let stage_dir_toggle = true;

for (character of cast) {
  const stage_dir = stage_dir_toggle ? "left" : "right";
  console.log(
    `${character.name} (Age: ${character.age}) enters stage ${stage_dir}!`
  );
  stage_dir_toggle = !stage_dir_toggle;
}
