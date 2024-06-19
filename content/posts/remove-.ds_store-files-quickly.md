---
title: Remove .DS_Store Files Quickly
date: 2024-06-08
description: Annoyed by .DS_Store files cluttering up your directories? Learn how to remove them quickly using the terminal on macOS.
tags:
  - macos
  - terminal
  - git
---

`.DS_Store` files are hidden files created by macOS to store custom attributes of a folder, such as the position of icons or the background color. While these files are hidden by default, they can clutter up your directories when working with version control systems like Git, and I got annoyed by them. Here's how you can remove `.DS_Store` files quickly using the terminal on macOS.

A smiple command that removes all `.DS_Store` files in the current directory and its subdirectories is:

```bash
find . -name '.DS_Store' -type f -delete
```

This command uses the `find` utility to locate all files named `.DS_Store` in the current directory (`.`) and its subdirectories. The `-type f` flag specifies that we are looking for files, and the `-delete` flag removes the files that match the search criteria.

You can add a <abbr title="Visual Studio Code">VSCode</abbr> task to run this command with a keyboard shortcut, it will save you a lot of time ~~and frustration~~.
