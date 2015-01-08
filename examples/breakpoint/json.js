var style;

if ( window.getComputedStyle ) {
    style = window.getComputedStyle(document.body, "::before")
                  .getPropertyValue("content")
                  .replace(/^['"]+|\\|(;\s?})+|['"]$/g, '');
}

style = JSON.parse(style);