# hysteria
Slow, feature-rich, object oriented parser toolkit for JavaScript.

Hysteria is a research project, it will take forever to get it up and running,
but it aims to become an OOP DSL for parsing ambiguous grammars.

It is not a good idea to use a custom language to parse things in JavaScript,
so here we are starting out with neat OOP classes to clearly express our needs.

There will be an object that will keep state, but most of everything else are just functions in an array.

## Theory Of Operation

```JavaScript

const p = new Parser();

const data = `I: Bus=0003 Vendor=046d Product=c33a Version=0111`; // this is the thing we want to parse.

const numericAssignment = p.match(/[A-Za-z0-9]+=\d+/);
const nullaryAssignment = new Token('Nullary Assignment', /[A-Za-z0-9]+= /);

p.struct([
    p.match(/[A-Z]{1}: /),
    p.any([
      nullaryAssignment,
      numericAssignment,
    ])
])

p.parse(data,structure);

// etc...

```

Volunteers welcome.
