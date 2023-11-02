from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import decision_tree_router, sklearn_svm_router, clasification_room_router

app = FastAPI(
    title="API - Machine Learning",
    version="1.0.0",
)

origins = [
    "http://localhost:3000",
    "https://www.youtube.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
async def hello():
    return {"message": "Welcome to my python API machine learning"}


app.include_router(decision_tree_router.router)
app.include_router(sklearn_svm_router.router)
app.include_router(clasification_room_router.router)
