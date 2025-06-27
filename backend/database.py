from typing import Dict
from models import Task
from uuid import uuid4
from datetime import datetime

# Simulation in memory
db: Dict[str, Task] = {}

def create_task(title: str, description: str, status: str) -> Task:
    task_id = str(uuid4())
    task = Task(
        id=task_id,
        title=title,
        description=description,
        status=status,
        created_at=datetime.utcnow()
    )
    db[task_id] = task
    return task
