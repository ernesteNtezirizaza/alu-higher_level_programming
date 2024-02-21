#!/usr/bin/python3
def remove_char_at(string, n):
    if n >= 0:
        x = string[:n] + string[n + 1:]
    else:
        x = string
    return x
