
function sortArrByProperty(arrt,propertyStr){

  let arr = arrt;
  let temporal;

  for(let i = 0; i<arr.length - 1;i++){

    for(let j = 0; j < arr.length - 1;j++){


      if(arr[j][propertyStr] > arr[j+1][propertyStr]){

 

        temporal = arr[j];
        arr[j]= arr[j+1];
        arr[j+1] = temporal;

      } 
    }
  }

  return arr;
} 