import {MenuItem} from "../types/Menu";
import {getAllItems} from "../model/menuModel";
import {Request, Response} from "express";
import * as path from "path";

export const getMenu = (req: Request, res: Response): void => {
        getAllItems().then((menuItems: MenuItem[]) => {
            res.status(200);
            res.send(menuItems);
        }).catch((err: Error) => {
            res.status(500);
            res.send(err);
        });
}

export const getBestsellers = (req: Request, res: Response): void => {
    getAllItems().then((menuItems: MenuItem[]) => {
        const beststellers = menuItems.filter((item: MenuItem) => item.itemId === 1 || item.itemId === 2 || item.itemId === 3 || item.itemId === 4);
        res.status(200);
        res.send(beststellers);
    }).catch((err: Error) => {
       res.status(500);
       res.send(err);
    });
}

export const getImage = (req: Request, res: Response): void => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '..', 'assets', 'images', imageName);
    res.sendFile(imagePath)
}
