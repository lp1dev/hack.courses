+++
title = "Command line 101"
date = "2022-01-09T19:15:35+01:00"
author = "Lp1"
authorTwitter = "lp1dev" #do not include @
cover = ""
tags = ["meta", "hacking", "courses","terminal","command-line"]
keywords = ["hack", "courses","command-line"]
description = "Command line for beginners"
showFullContent = false
+++


<script type="text/javascript">
    function verify(id) {
        const answers = [
            'flag{29e140ef258fc3ec0e485c0648f048d36ee5e017}',
            'flag{1d279c84d51f95a12ea44793212ecc0d5d360d47}'
        ]
        let input = document.querySelector('#chall'+id)
        if (input.value.trim() == answers[id]) {
            alert('Congratulations! You finished the challenge '+id)
        } else {
            alert('It seems this flag is invalid. Try again!')
        }
        input.disabled = true;
    }
</script>

# Introduction 📖

Welcome to this command-line class!

In this entry level course you will learn how to use a terminal and navigate through a Linux filesystem.

This class is supposed to be followed with [hack.courses](https://hack.courses) open alongside, the challenges are made to be completed in the website's interactive terminal.

# What's command-line 💻?

A **command** is an instruction (or a set of instructions) given to a machine.

A **command-line** is (by extension) a textual line containing one or multiple commands destined for a computer.

A **command-line interface** (or CLI) is an interface which is made to be interacted with using **commands-lines**, contrary to a **graphical user interface** (or GUI).

You can type commands in a software called a **command-line interpreter** (or *shell*) for a computer to do specific actions.

The terminal window on [hack.courses](hack.courses) is an example of a command interpreter.

A command usually looks like this :

```bash
$> openfile filename.txt
```

> **Note** : The characters "$>" here are not part of the command, they represent the prompt usually displayed by shells to let the user know they can type a new command.

---

# What are the existing commands?

The commands you can possibly type depends on the **command-line interpreter** you use, and more generally on the **Operating System** you're working on.

Windows machines used to understand commands based on [DOS](https://en.wikipedia.org/wiki/DOS), nowadays they also use [PowerShell](https://fr.wikipedia.org/wiki/Windows_PowerShell)'s syntaxes, Linux and "unix-like" machines (Ubuntu, MacOS) use commands similar to the [Unix Shell](https://en.wikipedia.org/wiki/Unix_shell), this is the type of commands we're going to cover during this class.

> **Note** : If you do not understand precisely what Linux, GNU/Linux and Unix are yet, it's okay, it's not mandatory for this course.

---

# Why do we (still) use command-line?

Whatever you can do with a graphical user interface, you can do with command-line, also most of the time command-line is much more efficient and lightweight! But don't take what I tell you for granted, you'll soon be able to try it for yourself.

Also, commands can be chained and logic can be added, which allows the automation of an almost infinity of tasks!

---

# Hands-on 🤜!

Let's start working on your first commands with a small challenge!

To finish this first challenge, you will have to find the *flag* corresponding to this exercice. 

A flag is a character string following this format :

`flag{f572d396fae9206628714fb2ce00f72e94f2258f}`

Once you found it you can copy/paste it (by right-clicking and selecting "copy" in your browser) in the text field below in order to verify that you have successfully completed the challenge.

## Challenge 0

Type the following commands in your shell, one after the other.

Press Enter after each command. If you typed them correctly, the flag will be given to you.

```bash
ls
cd challenges
cd command_line_101
cat challenge_0.txt
cd
```

<div style="display:flex">
    <input style="width:40rem" type="text" id="chall0" placeholder="flag 0"/><button onclick="verify(0)">Verify</button>
</div>


Now that you entered your first commands, let's details the things you just did.

# Ls

**ls** is the command you will use to list a directory's contents, it displays the files and directories in the location you are at on your computer.

In the terminal on hack.courses, filenames are printed in **green**, directories names in **blue**.

# Cd

**cd** is the command you will use to change the directory you are currently in.

Typing `$> cd challenges` did make you move to the *challenges* directory for instance.

Typing `$> cd` without parameter will make you go back to your user's personal directory.

> **Note** : **cd** -> **c**hange **d**irectory

# Pwd

**pwd** prints the directory you are currently in.

> **Note** : **pwd** -> **p**rint **w**orking **d**irectory

# Cat 🐱

**cat** displays a file's contents, any kind of file, it's going to print what's inside on your screen.

> **Note** : Do not forget to specify the name of the file you want to open after typing `cat`

## Challenge 1

For this next challenge, you're on your own!

The flag you are looking for is in a file located in the *command_line_101* directory within the *challenges* directory.

What you need to do here is :

- Go inside the challenges directory
- Go inside the command_line_101 directory
- List the contents of this directory
- Open the file you think might contain the flag for the first challenge
- Go back to your home directory (Hint : `$> cd`)

<div style="display:flex">
    <input style="width:40rem" type="text" id="chall1" placeholder="flag 1"/><button onclick="verify(1)">Verify</button>
</div>

---

Congrats on making it through this first command-line class!

You can now move on to 

## [command_line_102](../command_line_102) 

whenever you feel like it.

I hope I'll see you soon 😊!