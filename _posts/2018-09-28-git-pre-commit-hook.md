---
layout: post
title: Git Pre-Commit Hook
categories: [tip]
tags: [git, setup]
description: Git Pre-Commit Hook
---

Has it ever happened to you that you mistakenly pushed debugger commands/keywords?

For eg in Ruby you may want to skip keywords like `byebug`, `binding.pry`, or for JS `debugger`.

##### For this `git` has provided us the solution called _hooks_.

**What are hooks?**

Git hooks are provided so that you can run something before you commit or after you commit.  
For more info [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

This will be about `pre-commit` for simple thing like check where staged files has one or more keywards you don't want to commit.

**What is pre-commit hook?**

The `pre-commit` hook is run first, before you even type in a commit message. It is used to inspect the snapshot that is about to be committed, to see if you’ve forgotten something.

**How will you avoid committing such keywords?**  
I have written below script

```
  https://gist.github.com/archbloom/c1158e0e82b4de2a8cad7878a17203e2
```

Save this script as `pre-commit` into your '.git/hooks' folder.

Set this as an executable for the `git` with command

```shell
  $ chmod +x pre-commit
```

Now when you stage the files and tries to commit

```shell
  $ git commit -m "Add a sample commit message"
```

You will/might see a warning message

```
  byebug
 `file` has one of the word you don't want to commit. Please remove it
```

And it will NOT allow you to commit if your any of file changes have strings from the ‘LIST’ defined.

_But_ there is a way you can commit the files

```shell
  $ git commit --no-verify -m "I know the risk"
```

And that's it for pre-commit to get started and prevent yourself for pushing unwanted keywords into your commit.
