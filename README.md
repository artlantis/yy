# yy - a collection of sass utilities

### responsive-sprite
Allows you to include two versions of a sprited image from two different sprite maps made for low and high resolution screens.

The maps must include images with identical names. You are also required to provide a configuration object with references to different versions of maps. You can find an example of such configuration in `_variables.sass`.

The mixin is called in the following format:
```sass
+responsive-sprite($map, $sprite, $repeat: no-repeat, $width: true, $height: true)
```
Default values are provided for `$repeat`, `$width` and `$height` so they can be omitted in the most typical use case.

`$repeat` can be overridden with any valid value for `background-repeat` CSS property if you want to use the sprite as a repeating background image. Make sure to [configure the sprite layout](http://beta.compass-style.org/help/tutorials/spriting/sprite-layouts/) when generating map with Compass.

`$width` and `$height` may be set to `false` to disable output of sprite dimensions as `width` and `height` properties in the generated CSS.
