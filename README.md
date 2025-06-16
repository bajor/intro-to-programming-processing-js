## Spin up the Codespace (browser VS Code)

On the repo page, hit Code ▾ → Codespaces → “Create codespace on main”.
Wait for the container to build (∼30–60 s with prebuilds, longer the first time).
From the VS Code web terminal:

```bash
npx live-server public --port=5500 --no-browser
```

