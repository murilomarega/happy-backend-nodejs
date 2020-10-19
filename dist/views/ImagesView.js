"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(image) {
        return {
            id: image.id,
            // url: `http://localhost:3333/uploads/${image.path}`
            url: `http://192.168.0.117:3333/uploads/${image.path}`
        };
    },
    renderMany(images) {
        return images.map(image => this.render(image));
    }
};