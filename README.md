# rating-control-component

A simple rating-control component

Built with `fastn.js`

# Usage

## Example

[Requirebin simple example](http://requirebin.com/?gist=0275fc20dc656815d94d)

## Settings

Refer to [rating-control](https://github.com/MauriceButler/rating-control), for rating-control settings.

## Fastn component

Use as a fastn component:

```
var fastn = require('fastn')({
    ... other components...
    ratingControl: require('rating-control-component/ratingControlComponent')
});

var ratingControl = fastn('ratingControl', { settings: ... });
```

ratingControl will attempt to use the `_generic` component provided by fastn.