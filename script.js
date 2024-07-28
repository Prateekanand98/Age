const calculate_age = document.getElementById("calculate");
const birth_day = document.getElementById("birthday");
const final_age = document.getElementById("age");

function calculateAge() {
  const birthdayValue = birth_day.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const [ageYears, ageMonths, ageDays] = getAge(birthdayValue);
    final_age.innerText = `Your are ${ageYears} ${age > 1 ? "years" : "year"} ${ageMonths} months ${ageDays}old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let ageYears = currentDate.getFullYear() - birthdayDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthdayDate.getMonth();
  let ageDays = currentDate.getDate() - birthdayDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const results = [ageYears, ageMonths, ageDays];
  return results;


}

calculate_age.addEventListener("click", calculateAge)