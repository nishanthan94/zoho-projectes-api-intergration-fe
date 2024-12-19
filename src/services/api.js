// src/services/api.js
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const API_BASE_URL = "https://appsail-50023954251.development.catalystappsail.in";

// const API_BASE_URL = "http://localhost:3000";

export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/zoho/portals/60035390018/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            credentials: 'omit' 
        });

        const data = await response.json();
        return data.data.projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const createProject = async (projectData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/zoho/portals/60035390018/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
            mode: 'cors',
            credentials: 'omit' 
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};

export const updateProject = async (projectId,projectData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/zoho/portals/60035390018/projects/${projectId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
            mode: 'cors',
            credentials: 'omit'
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};

export const deleteProject = async (projectId, projectData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/zoho/portals/60035390018/projects/${projectId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
            mode: 'cors',
            credentials: 'omit'
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};

