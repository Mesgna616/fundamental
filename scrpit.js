var input_value, counting_sheep, counting_other;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('text').value);
  if (input_value != '') {
    if (input_value == 'sheep') {
      counting_sheep = (typeof counting_sheep === 'number' ? counting_sheep : 0) + 1;
      let element_sheep_count = document.getElementById('sheep_count');
      element_sheep_count.innerText = counting_sheep;
    }
    if (input_value != 'sheep') {
      counting_other = (typeof counting_other === 'number' ? counting_other : 0) + 1;
      let element_other_count = document.getElementById('other_count');
      element_other_count.innerText = counting_other;
    }
  }

});
