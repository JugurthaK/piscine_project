CC=gcc
CFLAGS= -Werror -Wall -Wextra -std=c99 -pedantic
DEPENDENCIES= sample_project.c

all :
	$(CC) $(CFLAGS) $(DEPENDENCIES) main.c -o hello

clean:
	$(RM) hello

.PHONY: clean all