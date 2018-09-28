module.exports = function longestConsecutiveLength(array = []) {
  let len = array.length;
  let leng = (len === 0)?0:1;
  let lengmax = (len === 0)?0:1;
  array.sort((left, right) => left - right);
    for (let i = 0; i < len-1; i++){ 
        if (array[i+1]-array[i] === 1) {
            leng++; 
            lengmax = (leng>=lengmax)?leng:lengmax; 
        }
        else { if (array[i+1] === array[i]) lengmax = (leng>=lengmax)?leng:lengmax; 
              else leng = 1;
        }   
    } 
  return lengmax;
}
