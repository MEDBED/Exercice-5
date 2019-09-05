const s1 = "hello";
console.log(s1.toUpperCase());
const s2 = new String('Hello');
console.log(s2.toUpperCase());
console.log(window);
//alert('hello world !');
//prompt('saisir you age !');
const book1 = {
    title: 'walk dud',
    auther: 'MEDBED',
    year: '2019',
    getSummary: () => {
        return `${this.title} was written By ${this.auther} in ${this.year}`;
    },
    getSummary2() {
        return `${this.title} was written By ${this.auther} in ${this.year}`
    }
};

console.log(book1.title);
console.log(book1.getSummary());
console.log(book1.getSummary2());
// these objects do the same

let user = {
    name: "John",
    age: 30
};
user = {
    sayHi: function() {
        alert("Hello");
    }
};

// method shorthand looks better, right?
user = {
    sayHi() { // same as "sayHi: function()"
        alert("Hello");
    }
};



user.sayHi = function() {
    alert("Hello!");
};

user.sayHi2 = () => {
    alert("hello !");
}

user.sayHi(); // Hello!