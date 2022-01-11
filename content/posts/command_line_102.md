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
            'flag{442fcf28466515a81d5434931496ffa64611cc8e}',
            'flag{4a4c6edef220f300dc6bc58df3d3b2e3c0bc8842}'
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

# Linux filesystem arborescence 🌳

Let me tell you a bit about the way linux filesystems are organized.

**/** is where everything starts, it's the *root* of your filesystem, a little bit like *C:* is usually where everything is stored on a Windows machine.

**/home** (which is located inside **/**, that's why it starts with the same character) is where the user's directories are usually stored. It is analogous to the **C:\Users** directory on Windows.

Each user has its own **home** 🏠 directory, you can see which one is yours using the following command :

```bash
$> echo $HOME
```

In a Linux terminal, the **$** character designates a variable. The *$HOME* variable has been predefined in your terminal by the operating system, such a variable is named an **environment variable**.

Observe the difference between your terminal's output when you type :

```bash
$> echo $HOME
```

and

```bash
$> echo HOME
```

> **Note** : $HOME can also be replaced with the ~ character.

---

# Manual pages 📚

Did you know that Linux comes with manuals for almost every command installed?

For instance, `man ls` will display the manual pages for the command *ls*.

You can use your *keyboard's arrows* to navigate inside the manpages, the *space* key to skip to the next page and *q* to quit.

> **Note** : It's also time to let you know that you can access those classes directly in the terminal using the `classes` command! Select a class with your keyboard keys and press enter to open a course's contents. You can navigate through the files exactly like you would with a manual page.

---

# Stopping a command 🛑

Let's say you use the *sleep* command and type something like `sleep 42`.

Your shell is going to wait 42 seconds before allowing you to type new commands, until then, you're stuck!

If at some point you get stuck in a command-line which blocks the execution of new commands, you can use the **CTRL + C** shortcut to force the current program to quit.

Exiting a program in such a way is called *killing* a program.

---

# Echo 🔉 

Echo (which for some uknown reason always reminds me of [Ecco the Dolphin](https://en.wikipedia.org/wiki/Ecco_the_Dolphin)) is an incredibly useful Linux command!

You can use it to display character strings on your screen.

For instance if you want to print "Hello, world", you can type :

```bash
$> echo Hello, world
```

You can also use it to display a variable's value, for instance :

```bash
$> echo Hello, $USER
```

---

# Hands-on 🤜!

Why don't we challenge your new command-line knowledge?

Let's start with a little treasure hunt.

## Challenge 2

Enter the *challenge_3* directory.

This directory contains the flag, but where is it?! You'll need to cleverly navigate through multiple directories in order to fetch this challenge's flag.

> **Hint** : You can go through multiple directories at once, instead of writing `cd /gu3st` and `cd challenges` you can directly type `cd /gu3st/challenges`.

<div style="display:flex">
    <input style="width:40rem" type="text" id="chall0" placeholder="flag 2"/><button onclick="verify(0)">Verify</button>
</div>

## Challenge 3

> **Hint** : Don't forget to type `cd` when you're done with an exercice to go back to your home directory.

This fourth (counting the challenge 0) flag is not hidden in a file, it is stored in an environment variable! 

The name of the variable is FLAG3. 

Good luck!

<div style="display:flex">
    <input style="width:40rem" type="text" id="chall1" placeholder="flag 3"/><button onclick="verify(1)">Verify</button>
</div>

---

Wow, you're still there?

Congrats on making though those first challenges!

You can now move on to 

## [Command line 103](../command_line_103)