const volume = document.getElementById('volumeninput');
const result = document.getElementById('result');
result.value = volume.value;

volume.addEventListener('change', () => {
  result.value = volume.value;
});