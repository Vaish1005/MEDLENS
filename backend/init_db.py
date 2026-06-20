import sys
import os

PROJECT_ROOT = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "../"
    )
)

sys.path.append(PROJECT_ROOT)


from backend.db.database import engine
from backend.db.models import Base

Base.metadata.create_all(
    bind=engine
)

print(
    "Database Created Successfully"
)