function calculateAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1; // 0-based
  const year = parseInt(document.getElementById('year').value);

  const errorDiv = document.getElementById('error');
  const resultDiv = document.getElementById('result');
  errorDiv.textContent = '';
  resultDiv.textContent = '';

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    errorDiv.textContent = '❌ Please enter a valid date.';
    return;
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    errorDiv.textContent = '❌ Birth date cannot be in the future.';
    return;
  }

  let ageYear = today.getFullYear() - birthDate.getFullYear();
  let ageMonth = today.getMonth() - birthDate.getMonth();
  let ageDay = today.getDate() - birthDate.getDate();

  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  resultDiv.innerHTML = `🎉 You are <strong>${ageYear}</strong> years, 
    <strong>${ageMonth}</strong> months and 
    <strong>${ageDay}</strong> days old.`;
}


