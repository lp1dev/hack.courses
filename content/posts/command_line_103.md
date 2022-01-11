+++
title = "Command line 102"
date = "2022-01-11T19:00:35+01:00"
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
            'flag{333610b9a7955f54efdddea14634ab93d77a0d64}',
            'flag{3833de1724aba85be072244d222595c697c29a87}'
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

# Hidden files 🕶️

On a linux filesystem, every file and directory whose name starts with a dot . will be hidden.

Such files will *not* be displayed when using a regular `ls`.

You can actually see hidden files and directories using `ls -a` for "all" though. 

This command will also display a single dot . which means "the current directory" in Linux and two dots .. which means "the directory above this one in the arborescence". 

Observe the difference between :

```bash
$> ls .
$> ls -a .
$> ls ..
```

# Advanced ls

`ls` can give you even more useful information about files and directories!

Using `ls -l` on the *challenges/command_line_101* directory will print the following list :

```bash
$> ls -l challenges/command_line_101/
total 0
-rwxrwxrwx 1 lp1 lp1 111 Jan  9 12:39 challenge_0.txt
-rwxrwxrwx 1 lp1 lp1  77 Jan  9 21:50 challenge_1.txt
drwxrwxrwx 1 lp1 lp1 512 Jan 11 21:13 challenge_2
```

We're going to leave some of the information printed in this list for another class, but you can already recognize the file and directories names! 

The hours and dates are the last modification date for each item and the number printed on the left of the month (Jan->January in this example) is the file's size in bytes.

Also note, lines starting with *d* are directories!

# Executing scripts 📜

## About scripts

What are scripts, you're wondering? 

Scripts are files containing commands and logic which can be used to automatize mostly any task you do on a computer!

Linux and Operating Systems in general are full of scripts, some of them are used to install softwares, update files, make sure programs are not outdated, update the time, move log files, display alerts etc... 

## Executing your first script

In order to run a script, you just need to write its **path** in your terminal.

For instance, a script is located in */usr/bin/foxsay* on [hack.courses](https://hack.courses).

Type the following command in the terminal to run this script :

```bash
/usr/bin/foxsay hello
```

![The output should be a fox saying "hello" in your terminal](/foxsay.png)

Congrats, you just ran your first script!

Now, this is not the *only* way to run a script. 

The path you used here is what is called an **absolute path**. An absolute path starts from **the root** of your filesystem ("/").

You can also run a script using its **relative path**, a relative path is, contrary to an **absolute** path, a path which does not start with "/".

To run a script within the directory you are currently in, type "./" followed by the script name.

For instance, move inside the */usr/bin* directory using `cd /usr/bin`.

Now, use the following syntax to run the same script again :

```bash
./foxsay hello
```

> **Hint** : Don't forget to type `cd` to go back to your home directory.

---

# Hands-on 🤜!

Ready to take one some harder challenges? Let's go then!

# Challenge 4

The *challenges/command_line_101* directory contains a flag for this challenge. 

But beware, it's *hidden*!

<div style="display:flex">
    <input style="width:40rem" type="text" id="chall0" placeholder="flag 4"/><button onclick="verify(0)">Verify</button>
</div>

<details>
  <summary>Hint</summary>

> **Hint** : Advanced ls

</details>

# Challenge 5

The flag for this challenge is not hidden, it is in the same directory!

But this time, it is not a text file that you can `cat`, it is a script! 

Run the script to get the flag.

<div style="display:flex">
    <input style="width:40rem" type="text" id="chall1" placeholder="flag 5"/><button onclick="verify(1)">Verify</button>
</div>

---

Ready to continue? Make sure to take a break, drink some water and move on to

## [Command line 104](../command_line_104)