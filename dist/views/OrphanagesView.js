"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImagesView_1 = __importDefault(require("./ImagesView"));
exports.default = {
    render(orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: ImagesView_1.default.renderMany(orphanage.images)
        };
    },
    renderMany(orphanages) {
        return orphanages.map(orphanage => this.render(orphanage));
    }
};
