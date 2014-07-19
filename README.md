# yy - a collection of sass utilities

Documentation: https://astina.github.io/yy

### responsive-sprite
Allows you to include two versions of a sprited image from two different sprite maps made for low and high resolution screens.

The maps must include images with identical names. You are also required to provide a configuration object (Sass map) with references to different versions of maps. You can find an example of such configuration in `examples/sprite/_responsive-sprite-compass.sass`.

The mixin is called in the following format:
```sass
+responsive-sprite($map, $sprite, $repeat: no-repeat, $width: true, $height: true)
```
Default values are provided for `$repeat`, `$width` and `$height` so they can be omitted in the most typical use case.

`$repeat` can be overridden with any valid value for `background-repeat` CSS property if you want to use the sprite as a repeating background image. Make sure to [configure the sprite layout](http://beta.compass-style.org/help/tutorials/spriting/sprite-layouts/) when generating map with Compass.

`$width` and `$height` may be set to `false` to disable output of sprite dimensions as `width` and `height` properties in the generated CSS.

### respond-to
Allows you to specify properties under the current selector and have them included wrapped in a media query of your choice.

The mixin is called in the following format:
```sass
+respond-to($breakpoint)
    color: black
    text-align: center
    ...
```
To work, the mixin requires configuration in the form of a Sass map where keys are names for breakpoints/screen sizes you should provide yourself (this is the `$breakpoint` parameter you pass when calling the mixin) and values are maps of settings for the respectable breakpoint. One of these settings is `mq`, which should include a string with the media query and is used by the mixin to generate CSS. Check out an example of the configuration in `examples/sprite/_respond-to.sass`.

### json
Encodes information about your breakpoints from Sass and allows you to access it from JavaScript to use with libraries like [enquire.js](//wicky.nillia.ms/enquire.js/) without having to repeat your media queries in JS code.

This presumes you are using the `respond-to` mixin described above and have  configured your breakpoints using the prescribed Sass map. To use, simply include it anywhere in your stylesheets like so:
```sass
+json
```
It will generate a `::before` pseudo element on the document body and store information about breakpoints encoded in a JSON array inside its `content` property. To read it, you need a few lines of JavaScript, provided in `breakpoint/json.js`.

### remPxFallback
`+remPxFallback(property,value)` sets the given property to the value in `rem` and in `px` as a fallback. You can pass the value as `rem` or `px`. The values are computed based on `$remBase` which defaults to 16. There are some mixins for convenience: `padding`, `margin`, `font-size` and `line-height`.

### responsive-font
With the responsive-font system you can define your fonts (and their media query dependant variants) in one place (you can use map-merge if you want it in multiple places) and then assign these styles to different selectors by using the name of the font.
The mixin uses @extend per default to not repeat the same properties over and over again. If you don't want this, set `$responsive-font-extend-fontstyles` to `false`.
```sass
+responsive-font(font-name)
```
See examples/font/_font-settings.scss for an example of a font-definition map. The map has to be named `$fonts`.

### clearfix
There is a `+clearfix` mixin. It adds this:
```sass
&:before,
&:after
    content: ""
    display: table
&:after
    clear: both
```
