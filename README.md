# yy - a collection of sass utilities

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