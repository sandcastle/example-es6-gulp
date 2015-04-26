import gulp from 'gulp';
import argGenerator from './lib/generators';
import Calculator from './lib/classes';


// lambda
gulp.task('hello', () => { console.log('hello'); });


// external file & generators
gulp.task('gen', () => {  

    var argumentsIterator = argGenerator('a', 'b', 'c');

    console.log(
        argumentsIterator.next().value,
        argumentsIterator.next().value,
        argumentsIterator.next().value
    );

});


// Classes
gulp.task('cls', () => {

    var calc = new Calculator(2,3);
    console.log(calc.add());
    console.log(calc.toString());

});


gulp.task('default', ['hello', 'gen', 'cls']);
