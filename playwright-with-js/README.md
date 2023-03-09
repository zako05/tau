# Playwright by Javascript

Node.js library created by Microsoft.

## What is Playwright & how does it work

https://glebbahmutov.com/blog/cypress-vs-other-test-runners/

It runs in Chrome debugger protocol (CDP) and uses WebSocket connection to communicate from the test runner to the browser.
The browser can expose a lot more via CDP, but the protocol is driven by Chrome. (partially implemented by Firefox).
Test runner runs in the separate process from the browser.

## Install & Run

```
npm init -y && npm i -D playwright
```


