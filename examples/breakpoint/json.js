var style;

if ( window.getComputedStyle ) {
    style = window.getComputedStyle(document.body, "::before")
                  .getPropertyValue("content")
                  .replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
}

style = JSON.parse(style);