from fastapi import FastAPI, Depends
from crud import get_all_tasks, add_task, update_task, delete_task
from schemas import TaskCreate, TaskUpdate
from models import Task
from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ✅ Add this block before any routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # 👈 match your Angular origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI(title="Mini Task Manager API")
print('Snehal')

@app.get("/tasks", response_model=List[Task])
def read_tasks():
    return get_all_tasks()

@app.post("/task", response_model=Task, status_code=201)
def create_new_task(task: TaskCreate):
    return add_task(task)

@app.put("/task/{task_id}", response_model=Task)
def modify_task(task_id: str, updates: TaskUpdate):
    return update_task(task_id, updates)

@app.delete("/task/{task_id}")
def remove_task(task_id: str):
    return delete_task(task_id)
