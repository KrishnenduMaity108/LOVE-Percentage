const submitButton = document.getElementById('submit-button-js');

submitButton.addEventListener('click', function () {
  const str1 = document.querySelector('.input1-js').value;
  const str2 = document.querySelector('.input2-js').value;
  //console.log(str1);

  const str = (str1.concat(str2)).toUpperCase();
  //console.log(str);

  const charCount = {};

  // Count characters in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== ' ') {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }

  // Convert the charCount object to an array
  let result = Object.values(charCount);
  console.log(result);

  //Adding the array elements 
  let len = result.length;
  while(len > 2){
    for(let i=0; i<Math.floor(len/2); i++){
      result[i] = result[i] + result[len-1-i];
      result.pop(result[len-1-i]);

      //console.log(result);
    }
    
    len = result.length;
    const tempArr = []; 

    for(let i=0; i<len; i++){
      if(result[i] > 9){
        let first = ~~(result[i] / 10);
        let second = result[i] % 10;
        tempArr.push(first);
        tempArr.push(second);
      }else{
        tempArr.push(result[i]);
      }
    }
    result = tempArr.slice();
    
    len = result.length;
    //console.log(len);
  }
  //console.log(result);
  if(str1 && str2){
    document.getElementById('display-percentage-js')
    .innerHTML = `${str1}'s and ${str2}'s love Percentage is: ${result[0]}`+`${result[1]} %`;
  }
});

