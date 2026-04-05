// object: collection of keys and its value
        //create an object usinglitreal way and new keyword
        let student={name:"john",
        age:"23",
         ismarried:"false", 
         address:"mimmii house",
         pincode: 201005,
         state: "mimmmii capital",
         country:"mimmmii territory",
         education:["10th","12th","btech"],
         degree: "btech",
         branch:"cse",
        year:2029, 
         getInfo:function(){
            return "my education qualification are" + student.degree;
        }}
        console.log(student);
        console.log(student.address.pincode);//object
         console.log(student.education(2));//array
          console.log(student.getInfo());//function
           console.log(typeOf(student));
       //find keys in this obeject
       console.log("name" in student);
       //delete keys from object
       console.log(delete student.name);
       console.log(student);
       // find the length of object
       let keyLength=object.keys(student);
        console.log(keysLength.length);
        //iterate keys of object

        for(let i=0;i=keysLength.length;i++){
            console.log(student[keyLength[i]]);
        }
        //iltrate keys of object using for.. in loop
        //for(let x in student){}