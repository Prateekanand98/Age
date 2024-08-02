const calculate_age = document.getElementById("calculate");
const birth_day = document.getElementById("birthday");
const final_age = document.getElementById("age");

function calculateAge() {
  const birthdayValue = birth_day.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const [ageYears, ageMonths, ageDays] = getAge(birthdayValue);
    if (ageYears === null) {
      return;
    }
    final_age.innerText = `You are ${ageYears} ${ageYears > 1 ? "years" : "year"} ${ageMonths} ${ageMonths > 1 ? "months" : "month"} ${ageDays} ${ageDays > 1 ? "days" : "day"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  
  if (currentDate < birthdayDate) {
    alert("Not Born Yet");
    return [null, null, null];
  }
  
  let ageYears = currentDate.getFullYear() - birthdayDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthdayDate.getMonth();
  let ageDays = currentDate.getDate() - birthdayDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return [ageYears, ageMonths, ageDays];
}

calculate_age.addEventListener("click", calculateAge);
