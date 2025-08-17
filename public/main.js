document.getElementById('autocomplete-result').addEventListener('click', () => {
    const input = document.getElementById('destination-input').value;
    document.getElementById('results').textContent = `Hotels in ${input}`;
  });
  