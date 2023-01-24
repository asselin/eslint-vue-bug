To show the issue,

- npm install
- npm run lint

**What did you expect to happen?**
No ESLint errors.

**What actually happened?**
Received the error for Child.vue: "4:21 error Unexpected mutation of "value" prop vue/no-mutating-props".

Child does not mutate the prop, it mutates a property inside the passed prop. Vue does not give any error at runtime about mutating a prop. The test cases for this rule seem to indicate that this should be valid... but the rule is complaining.
