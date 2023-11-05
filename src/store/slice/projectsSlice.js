import { createSlice } from "@reduxjs/toolkit";
import { ProjectData } from "../../data/ProjectData";


const initialState = {
    projects: ProjectData,
}

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        filterProjects: (state, action) => {


        }

    }

})

export default projectSlice.reducer;
export const { filterProjects } = projectSlice.actions;