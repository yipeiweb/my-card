export default (searchQuery, data, languageTag) => {
    if(searchQuery){
       return data.filter((item)=>{
           return searchQuery.toLowerCase().split(' ').every(
                   v => item[languageTag].toLowerCase().includes(v)
           );
       })
   }else{
       return data;
   }
}