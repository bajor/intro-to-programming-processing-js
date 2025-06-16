{
  "name": "processing-js",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "postCreateCommand": "npm install live-server",
  "forwardPorts": [5500],
  "customizations": {
    "vscode": {
      "extensions": [
        "MS-vsliveshare.vsliveshare",     // pair programming
        "ritwickdey.LiveServer",          // quick static preview
        "esbenp.prettier-vscode"
      ],
      "settings": {
        "editor.tabSize": 2,
        "files.autoSave": "onFocusChange"
      }
    }
  }
}

