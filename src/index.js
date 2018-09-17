/**
 * @returns number of love triangles
 * @param f
 */
 module.exports = function getLoveTrianglesCount(arr){
     let triangles=0;
     for(let i=0; i<arr.length; i++){

         /*if(arr[i]==i-1){
             break;
         }

         var first=arr[i];
         var second=arr[first-1];
         var third=arr[second-1];

         if(i==third-1){
          triangles++;
          arr[i]=0;
          arr[first-1]=0;
          arr[second-1]=0;

         }*/

         if(arr[i]!==i+1 && arr[arr[arr[i]-1]-1]===i+1){
             triangles++;
         }

     }
     return triangles/3;
 };
 	
