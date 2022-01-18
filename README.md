# rpn-calculator-cli
An interactive command line Reverse Polar notation calculator built in Node.js.

## What is RPN?
  Reverse Polish notation, also known as postfix notation, is a mathematical notation where operators follow their operands. This is in contrast to Polish notation (prefix notation), wherein operands follow their operators. RPN  found favor in the computer science community for how much specificity it adds to calculating expressions and its ease with stack-oriented programming. Because expressions do not need to be parenthisized, the user can be more confident their intention will be reflected in the calculation.
  
  Calculations are made by pushing numbers onto a stack. Everytime a mathematical operator is called, the last two numbers are popped off the stack, evaluated, and its result is pushed back on to the stack.
  
## Prerequisites

Before you continue, make sure you meet the following requirements:
- Node.js 16.11.1
- Npm 8.1.1

## Install
```bash
npm i -g rpn-calculator-cli
```

### Using
```bash
calculate <flags>
```

Put spaces between each operator and/or operand. The calculator will accept as many or as few elments as you wish to input at once.
```bash
>> 3 3 +
> 6
//also valid:
>> 3
> 3
>> 3
> 3
>> +
> 6
```
Calling calculate with a --showStack flag will show you the stack as you push numbers and evaluations onto it. Even if you don't call the flag, the app will let you know if the stack is too short to be evaluated.

## Contributing to rpn-calculator-cli

To contribute to rpn-calculator-cli, follow these steps:

- Fork this repository.
- Create a branch: git checkout -b <branch_name>.
- Make your changes and commit them: git commit -m '<commit_message>'
- Push to the original branch: git push origin rpn-calculator-cli
- Create the pull request.
- Alternatively see the GitHub documentation on creating a pull request.

## Design
  As someone who hadn't had a lot of experience with node-based CLIs, I opted to scaffold the project with Ahmad Awais [create-node-cli](https://github.com/ahmadawais/create-node-cli). This provided basic strucuture to the project, as well as some design configurations, automatic argument parsing and app documentation. In the spirit of not reinventing the wheel, I also used [Inquirer.js](https://www.npmjs.com/package/inquirer) for my user prompts. This provided an elegant looking user interface out of the box, with filtering and validation built into the prompt object. I used [Jest](https://github.com/facebook/jest) for testing.
  
  For the actual RPN logic, I opted for a functional programming approach with a modular design pattern and a public interface contained in one file. This file, calc.js, consists of a recursive function called parseUserInput. This recursive design allows for each element of the userInputArray to be dynamically handled without the eyesore of a massive loop. parseUserInput accepts an array made up of the user's input, and a current stack that defaults to an empty array. Each element of the user's input is evaluated and handled depending on whether it's a number or an operator, with error handling throughout. Its base case, the userInputArray being empty, returns an object with the currentStack and the currentAnswer (the last element of the stack) for the CLI to show. The currentStack is then passed back into the CLI function so that it can be paired with the userInputArray for the next recursion. In this way, the state of the application is passed back and forth and only mutated when the integrity of the element has been confirmed.
  
  The tradeoff to this approach is that the inputs and the outputs of both the CLI and parseUserInput has to remain consistent, as they are passing arguments back and forth  throughout the lifecycle of the app. To handle this, beyond testing, I would build an interpreter to handle different types of interfaces beyond my CLI, some that may not provide a ready made array or stack for parseUserInput. With this, the core logic of the app could be used with different types of protocols and frontends.
  
Finally, my modules are structured to separate number and operator logic. While the number modules are self-contained, as much of what they do is fairly generic, the operator logic is contained in one public module with a couple of private ones to support it. rpn-operator-helper.js exports out isOperator, a boolean that checks the element against "valid" operators (which are contained in valid-math-operators.js) so that only vetted operators will trigger actions, as well as pushCalculationToStack, which actually evaluates the user's expression and pushes the new value back to the stack. Notably, since this is the only public helper method that directly mutates the stack, I have it returning the stack explictly to avoid side-effects.
  
## Roadmap
While I am proud of the project, there are several steps to make it even better. Implementing more operators would be at the top of my list, as the current crop only covers basic addition, subtraction, division, and multiplication. In addition, while I was able to unit test all the logic and modules in the src folder, I was unable to figure out how to do integration testing with the CLI frontend itself. Simulating user input proved to be difficult, and unfortunately there were many different solutions online that just wasn't cutting it. I stubbed out a fake test that I look forward to filling out with actual logic.

I had a great time doing a more functional programming approach, but it would be fun to break down the logic with object-oriented concepts, like a static all object in a class to maintain state within the backend. As I was learning as I went, functional programming allowed me to stay with the flow of the overall program, which kept me grounded while sifting through the weeds.

## Contact

If you would like to contact me, please email ksamuel92@gmail.com

## License

This project uses the following license: MIT License
