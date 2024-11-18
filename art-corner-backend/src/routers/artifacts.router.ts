import { Router } from "express";
import { initialArtifacts } from "../initialArtifacts";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { CreateExploreModel } from "../models/createExplore.model";
import multer from 'multer';
import { CreateExplore } from "../../../art-corner/src/app/shared/model/CreateExplore";
import { HTTP_BAD_REQUEST } from "../constants/http_status";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const artifactsCount = await CreateExploreModel.countDocuments();
        if (artifactsCount > 0) {
            res.send("Seed is already done!");
            return;
        }

        await CreateExploreModel.create(initialArtifacts);
        res.send("Seed is Done!");
    }
))

router.get("/", asyncHandler(
    async (req, res) => {
        const artifacts = await CreateExploreModel.find();
        res.send(artifacts);
    }
))

router.get("/:artifactid", asyncHandler(
    async (req, res) => {
        const item = await CreateExploreModel.findById(req.params.artifactid);
        res.send(item);
    }
))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
    }
});

const fileFilter = (req: any, file: any, cb: any) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
    }
  };

const upload = multer({ storage, fileFilter });

router.post("/post-artifact", upload.single('img'), asyncHandler(
    async (req, res) => {
        const { title, desc, index } = req.body;
        const img = req.file?.filename;

        if (!title || !desc || !index || !img) {
            res.status(HTTP_BAD_REQUEST).send('All fields are required, including the image.');
            return;
        }

        const item = await CreateExploreModel.findOne({ img });
        if (item) {
            res.status(HTTP_BAD_REQUEST)
                .send('Image already exists, please insert another image!');
            return;
        }

        const newItem: CreateExplore = {
            id: '',
            title,
            index: parseInt(index, 10),
            desc,
            img,
            link: "#",
            like: false,
            bookmark: false,
            time: ""
        }

        const dbItem = await CreateExploreModel.create(newItem);
        res.send(generateTokenResponse(dbItem));
    }
))

const generateTokenResponse = (item: any) => {
    const token = jwt.sign({
        title: item.title, index: item.index
    }, "SomeRandomText");

    item.token = token;
    return item;
}

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const artifacts = await CreateExploreModel.find({ title: { $regex: searchRegex } })
        res.send(artifacts);
    }
))

export default router;