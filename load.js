$.ajax({
    dataType: 'html',
    url: 'navigation.html?acec72472e9fd980f68c95b0d01fa0b1'
}).done(data => $('.nav-container').html(data));
$.ajax({
    dataType: 'html',
    url: 'footer.html?5bf76ac3a09a29d598a4bb47d615d4c8'
}).done(data => $('.footer-contents').html(data));
