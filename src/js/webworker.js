importScripts("filter.js");

self.addEventListener('message', function(event) {
    let { imageId, imageData, width, height} = event.data;
    applyFilter(imageData.data, width, height);
    self.postMessage({imageId, imageData});
}, false);
