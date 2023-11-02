"""
Rest API Mechine Learning Models
Tuesday 17 Oct 2023
"""

from dotenv import load_dotenv
import uvicorn

load_dotenv()

PORT: int = 4000

if __name__ == "__main__":
    uvicorn.run("app:app", reload=True, port=PORT)
