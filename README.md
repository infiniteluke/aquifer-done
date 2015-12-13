# aquifer-done
Know when your Aquifer build is done.

## Installation
To install this extension, in your Aquifer project, run:

```bash
aquifer extension-add aquifer-done
```

## Use
This extension does not expose an commands for you to use with Aquifer.
It exposes a post build function that will let you know when your Aquifer build is done.

aquifer-done wraps node-notifier and allows you to specify a custom message to display when your build is done.

## Configuration

_in your `aquifer.json` file:_
```javascript
...
"extensions": {
  "aquifer-done": {
    "postBuild": "Aquifer build is done!"    
    "sound": true, // Only Notification Center or Windows Toasters.
    "wait": true // Wait until user action is taken on notification.
}
...

```
