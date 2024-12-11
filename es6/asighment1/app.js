const alertFunction = () => {
  let age = prompt("what is your age?", "20");
  let name = prompt("what is your name", "musfira");
  let caste= prompt("what is your caste","punjabi")
  let nationality= prompt("what is your nationality","pakistani")
  let mothertongue= prompt("what is your mother tongue","urdu")

  document.write("<br> your "," caste ", " is ", caste)
  document.write("<br>  your "," name ", " is ", name)
  document.write("<br> your "," nationality ", "is ", nationality)
  document.write(" <br> your "," mothertongue ", " is ", mothertongue )

  if (age > 18 && age < 70) {
    return document.write("<br>", name, " is ", age, " years old");
  }
};