function Person(fist, last, age, gender) {
    this.fistName = fist;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    this.fullName = function(){
        return this.fistName + " " + this.lastName;
    };
};

const mySelf = new Person("Ivan","Sitnikov", 21,"Man");

document.getElementById("demo").innerHTML = "Мои данные " + mySelf.fullName();

