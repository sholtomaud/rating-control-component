# rating-control-component

A simple rating-control component

Built with `fastn.js`

# Usage

## Settings

```
...

```

## Fastn component

```
var fastn = require('fastn')({
    ... other components...
    ratingControl: require('rating-control-component/ratingControlComponent')
});

var ratingControl = fastn('ratingControl', { options... });
```

ratingControl will attempt to use `text`, `_generic`, `list` and `templater` components provided by fastn.

## Inserting

```
someDomNode.appendChild(ratingControl.element);
```

## Properties

### Show

```
...

```