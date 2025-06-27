from pydantic import BaseModel
from typing import Literal
from datetime import datetime

class Task(BaseModel):
    id: str
    title: str
    description: str
    status: Literal["pending", "completed"]
    created_at: datetime
