## Homework

16 June 25:

- Install on local computer tools for programming:
    - [ ] Visual Studio Code
    - [ ] Local web server - node.js - ask chat gpt for help
    - [ ] Create account on github.com
    - [ ] Clone this repo - again ask gpt for help
    - [ ] Run server for example with `npx http-server`
    - [ ] Open browser on `127.0.0.1:8080` - check if you see our app
---

## Spin up the Codespace (browser VS Code)

On the repo page, hit Code ▾ → Codespaces → “Create codespace on main”.
Wait for the container to build (∼30–60 s with prebuilds, longer the first time).
From the VS Code web terminal:

```bash
npx live-server public --port=5500 --no-browser
```

---

## Or un it on your local computer

In terminal go to directory of lesson you want to run. For example:
```
cd lesson_1
```


Run server for example with:

`npx http-server`

