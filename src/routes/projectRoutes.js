import { Router } from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "../controllers/projectControllers.js";

const projectRouter = Router();

projectRouter.get('/', getProjects)
projectRouter.get('/:id', getProject)
projectRouter.post('/', createProject)
projectRouter.put('/:id', updateProject)
projectRouter.delete('/:id', deleteProject)

export default projectRouter;
