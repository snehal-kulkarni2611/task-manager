from fastapi import FastAPI, Depends
from crud import get_all_tasks, add_task, update_task, delete_task
from schemas import TaskCreate, TaskUpdate
from models import Task
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"], ## added for cors issue in local
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI(title="Mini Task Manager")

# get task list from local storage
@app.get("/tasks", response_model=List[Task])
def read_tasks():
    return get_all_tasks()

# add new task in local db until it refresh
@app.post("/task", response_model=Task, status_code=201)
def create_new_task(task: TaskCreate):
    return add_task(task)

# edit task 
@app.put("/task/{task_id}", response_model=Task)
def modify_task(task_id: str, updates: TaskUpdate):
    return update_task(task_id, updates)

# delete task
@app.delete("/task/{task_id}")
def remove_task(task_id: str):
    return delete_task(task_id)
