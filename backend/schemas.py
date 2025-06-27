from pydantic import BaseModel
from typing import Literal, Optional

class TaskCreate(BaseModel):
    title: str
    description: str
    status: Literal["pending", "completed"]

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[Literal["pending", "completed"]] = None
