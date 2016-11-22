var fs = require('fs');


module.exports = function(request, response, layoutName){
    var baseResource = fs.readFileSync("./layout/layout.html", "utf8");
    var headerResource = fs.readFileSync("./layout/partials/header.html", "utf8");
    var footerResource = fs.readFileSync("./layout/partials/footer.html", "utf8");
    var contentResource = fs.readFileSync("./layout/" + layoutName + ".html", "utf8");

    baseResource = baseResource.replace("{% header %}", headerResource);
    baseResource = baseResource.replace("{% footer %}", footerResource);
    baseResource = baseResource.replace("{% content %}", contentResource);

    response.write(baseResource);
    response.end();
}
