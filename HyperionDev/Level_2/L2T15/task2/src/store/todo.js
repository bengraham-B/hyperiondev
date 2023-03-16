import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    nextId: 2,
    data: [
      {
        id: 1,
        content: "Content 1",
        completed: false,
      },
    ],
  },

  reducers: {
    addNewTodo: (state, newTodo) => {
      console.log("From Store", newTodo);
      state.data.push({
        id: state.nextId,
        content: newTodo.payload,
        completed: false,
      });
      state.nextId += 1;
      console.log(state.nextId);
    },

    edit: (state, edit) => {
      console.log(edit.payload);
      console.log("reducer", edit.payload);
      state.data[edit.payload.task].content = edit.payload.userEdit; // user ofr rother reducers
    },

    deleteTodo: (state, id) => {
      state.data.splice([id.payload].content, 1); //* (1) codingbeautydev.com
    },

    complete: (state, id) => {
      state.data[id.payload].completed = !state.data[id.payload].completed; //& Able to toggle todos as completed or not
      console.log("completed", state.data[id.payload].completed);
    },
  },
});

export const { addNewTodo, edit, deleteTodo, complete } = todoSlice.actions;
export default todoSlice.reducer;

/*
 * Resources Used:
 * (1) https://codingbeautydev.com/blog/javascript-remove-element-from-array-by-id/#:~:text=splice()%20methods-,To%20remove%20an%20element%20from%20an%20array%20by%20ID%20in,the%20object%20from%20the%20array: Information regarding the '.splice()' method.
 */
