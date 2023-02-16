let person = {
    name: 'Saroar Hossain Shahan'
   };
    
   let getInfo = function (id) {
   return `Welcome ${this.name}, Your roll number is ${id}.`;
   };
    
   let boundInfo = getInfo.bind(person);
    
   console.log(boundInfo(343543));