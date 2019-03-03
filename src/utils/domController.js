
export const changeIcon = function (icon) {
    let link = document.querySelector('link[rel="shortcut icon"]') ||
        document.querySelector('link[rel="icon"]');

    if (!link) {
        link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'shortcut icon';
        link.herf = icon;
        document.head.appendChild(link);
    }
};
