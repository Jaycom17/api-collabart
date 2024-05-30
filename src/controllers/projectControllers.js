import { pool } from "../db/db.js";

export const getProjects = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM projects");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProject = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM projects WHERE id = ?", [req.params.id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createProject = async (req, res) => {
    try {
        const [result] = await pool.query("INSERT INTO projects (name, user_id) VALUES (?, ?)", [req.body.name, req.body.userID]);
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProject = async (req, res) => {
    try {
        await pool.query("UPDATE projects SET name = ?, user_id = ? WHERE id = ?", [req.body.name, req.body.userID, req.params.id]);
        res.json({ message: "Project updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProject = async (req, res) => {
    try {
        await pool.query("DELETE FROM projects WHERE id = ?", [req.params.id]);
        res.json({ message: "Project deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}