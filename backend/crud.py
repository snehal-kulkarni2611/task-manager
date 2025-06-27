from database import db, create_task
from models import Task
from schemas import TaskCreate, TaskUpdate
from fastapi import HTTPException

def get_all_tasks():
    return list(db.values())

def add_task(task_data: TaskCreate):
    return create_task(task_data.title, task_data.description, task_data.status)

def update_task(task_id: str, updates: TaskUpdate):
    task = db.get(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    updated_fields = task.dict()
    if updates.title is not None:
        updated_fields["title"] = updates.title
    if updates.description is not None:
        updated_fields["description"] = updates.description
    if updates.status is not None:
        updated_fields["status"] = updates.status

    updated_task = Task(**updated_fields)
    db[task_id] = updated_task
    return updated_task

def delete_task(task_id: str):
    if task_id not in db:
        raise HTTPException(status_code=404, detail="Task not found")
    del db[task_id]
    return {"message": "Task deleted"}
