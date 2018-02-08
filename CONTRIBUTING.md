Contributing code
Make sure you have a GitHub Account

Fork the relevant repository (how to fork a repo)

Create a local checkout of the code. You can use the main repository to easily check out all core modules.

Make your changes, and commit them

Follow the code style of the rest of the project (see below). Run npm run lint (in the main repository checkout) to make sure that the linter is happy.

If your changes are easy to test or likely to regress, add tests in the relevant test/ directory. Either put them in an existing test-\*.js file, if they fit there, or add a new file.

Make sure all tests pass. Run npm run test to verify tests pass (you will need Node.js v6+).

Submit a pull request (how to create a pull request). Don't put more than one feature/fix in a single pull request.

By contributing code to ProseMirror you

Agree to license the contributed code under the project's MIT license.

Confirm that you have the right to contribute and license the code in question. (Either you hold all rights on the code, or the rights holder has explicitly granted the right to use it like this, through a compatible open source license or through a direct agreement with you.)

Coding standards
ES6 syntax, targeting an ES5 runtime (i.e. don't use library elements added by ES6, don't use ES7/ES.next syntax).

2 spaces per indentation level, no tabs.

No semicolons except when necessary.

Follow the surrounding code when it comes to spacing, brace placement, etc.

Brace-less single-statement bodies are encouraged (whenever they don't impact readability).

getdocs-style doc comments above items that are part of the public API.

When documenting non-public items, you can put the type after a single colon, so that getdocs doesn't pick it up and add it to the API reference.

The linter (npm run lint) complains about unused variables and functions. Prefix their names with an underscore to muffle it.

ProseMirror does not follow JSHint or JSLint prescribed style. Patches that try to 'fix' code to pass one of these linters will not be accepted.
