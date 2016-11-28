# eslint-config-wiremore 

A shared ESLint configuration for and by JavaScript developers at [wiremore](https://www.wiremore.com)

## Installation

Get started by running this command in the root of your project:

`npm install --save-dev eslint eslint-config-wiremore`
Then add an `.eslintrc.json` file to the root of your project before running the eslint command, with the following:

```
{
  "extends": [
    "wiremore"
  ]
}
```

Optionally you can also add linting for React/JSX:
```
{
  "extends": [
    "wiremore"
    "wiremore/react"
  ]
}
```

For more information see: http://eslint.org/docs/user-guide/configuring