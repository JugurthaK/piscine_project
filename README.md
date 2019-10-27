# Startup quickly

This script is creating needed files to start a simple C project quickly.

**Node is needed to execute it, and you should install some dependencies with `npm i`**

## How to use it
`your_alias --dir "int-sum" [--file "int_sum"] --sign "int sum(int a, int b)" [--out "my_binary_file"]"`

**Your filename shouldnt end with `.c`, it will be done by the script**

This script creates a `int-sum` directory with `int_sum`.c, `int_sum`.h, main.c, and Makefile in it.

### Params :
* `file` param is not mandatory. If it's not given, your files will be named from `--dir` option. In our case it will have been `int-sum.c` instead of `int_sum.c` (care about underscore)

* Even for `--out`, it will be `a.out` if not given

### Content of files :

* `file.h` : Will contain function `--sign` param and a semi-colon
* `file.c` : Will contain an include of `file.h` the `--sign` param and open brackets
* `main.c` : Will contain dependecies to stdio.h, assert.h and `file.h`. And a main function with void params and open brackets
* `Makefile` : Will contain a `all` dependency to build your project from `file.c` and `main.c` and create a bin with `--out` param as name