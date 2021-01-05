import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TodoListService {
    constructor() {

    }

    setItems(todos: { name: string, done: boolean, id: string }[]) {
        const stringifyTodos = JSON.stringify(todos);
        localStorage.setItem('todos', stringifyTodos);
    }
    addItem() {

    }

    getTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    checkTodos() {
        return localStorage.getItem('todos');
    }



    updateItem() {

    }
}