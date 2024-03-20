"use strict";
// exercise 37
function make_shirt(size = 'Large', text = 'I love typescript.') {
    console.log(`creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', ' I love python');
