var PaperCanvas = function () {

}

PaperCanvas.prototype.init = function (canvasId) {
    console.log(project);
}

PaperCanvas.prototype.setBackgroundImage = function (url, insertChild) {
    var raster = new Raster(url);
    raster.name = "backgroundImage";
    raster.on('load', function () {
        raster.position = view.center;
        raster.size = view.size;
    });
    if (insertChild) {
        project.activeLayer.insertChild(0, raster);
    } else {
        project.activeLayer.addChild(raster);
    }
}

