## Spin up the Codespace (browser VS Code)

This will be available for you only when I will start it. So we will only use it during our lessons. For the remaining time you need to have local setup and work locally.

On the repo page, hit Code ▾ → Codespaces → “Create codespace on main”.
Wait for the container to build (∼30–60 s with prebuilds, longer the first time).
From the VS Code web terminal:

```bash
npx live-server public --port=5500 --no-browser
```

---

## Or run it on your local computer

Run server with hot reloading (if you change sth in code it will be reloaded):

`npx http-server`

Ideally have 2 terminals open (+ in vscode). One for server, another for git and others.

---

# Basic Bash Commands

- `ls` — List files and directories  
- `cd <directory>` — Change directory  
- `pwd` — Print working directory  
- `mkdir <directory>` — Create a new directory  
- `touch <file>` — Create a new empty file  
- `cp <source> <destination>` — Copy files or directories  
- `mv <source> <destination>` — Move or rename files/directories  
- `rm <file>` — Remove a file  
- `rm -r <directory>` — Remove a directory and its contents  
- `cat <file>` — Display file contents  
- `echo <text>` — Print text to terminal  

---

# Basic Git Commands


0. `git clone git@github.com:bajor/intro-to-programming-processing-js.git`
   Clone this very repository to your computer. Before ask GPT how to install git, auth with ssh.

1. `git init`  
   Initialize a new Git repository in the current directory.

2. `git status`  
   Show the status of changes as untracked, modified, or staged.

3. `git add <file>`  
   Add a file to the staging area.

4. `git commit -m "message"`  
   Commit staged changes with a message.

5. `git log`  
   Show the commit history.

---

# Create new p5 project

In VsCode do control + P and then write:

`> Create p5.js project`

code autocompletion will work.

