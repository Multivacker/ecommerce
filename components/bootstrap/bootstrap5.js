let bootstrapCSSCDN = document.createElement("link");
let bootstrapIconsCDN = document.createElement("link")
let bootstrapJS = document.createElement('script');
let bootstrapJSCDN = document.createElement('script');

bootstrapCSSCDN.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'
bootstrapCSSCDN.rel = 'stylesheet'
bootstrapCSSCDN.integrity = 'sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ'
bootstrapCSSCDN.crossOrigin = 'anonymous'

bootstrapIconsCDN.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
bootstrapIconsCDN.rel = 'stylesheet'


bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js'
bootstrapJS.integrity = 'sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE'
bootstrapJS.crossOrigin = 'anonymous'
bootstrapJSCDN.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js'
bootstrapJSCDN.integrity = 'sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ'
bootstrapJSCDN.crossOrigin = 'anonymous'

document.head.append(bootstrapCSSCDN);
document.head.append(bootstrapIconsCDN);
document.head.append(bootstrapJSCDN);
document.head.append(bootstrapJS);

