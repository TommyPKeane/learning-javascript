const pluralAgeTag = function hstPluralAgeTag(stringElements, name, age) {
  let output = (
    age > 1
    ? `${name} is ${age} years old!`
    : (
      age < 1
      ? (
        age < 0
        ? `${name} can't be ${age} years old?! Ages can't be negative!`
        : `${name} isn't even 1 yet!`
      )
      : `${name} is ${age} year old!`
    )
  );
  return output;
}

console.log(pluralAgeTag`${"First M. Last"} is ${27}`);
console.log(pluralAgeTag`${"Ttl. Last"} is ${70}`);
console.log(pluralAgeTag`${"Person A"} is ${1}`);
console.log(pluralAgeTag`${"Person B"} is ${-12}`);
console.log(pluralAgeTag`${"Person C"} is ${0}`);
console.log(pluralAgeTag`${"Person D"} is ${33.5}`);
