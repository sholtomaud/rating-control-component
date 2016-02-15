# rating-control-component

A simple rating-control component

Built with `fastn.js`

# Usage

## Example

[Requirebin simple example](http://requirebin.com/?gist=bafa2344b99fad117451)

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