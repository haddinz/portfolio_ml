from fastapi import APIRouter
from pydantic import BaseModel
from joblib import load

router = APIRouter()

model = load("./machine_learning/decision_tree/saved_models/model.joblib")

class Decison_Tree(BaseModel):
    sepalLengthCm: float
    sepalWidthCm: float
    petalLengthCm: float
    petalWidthCm: float


@router.get("/api/model/model-iris/get")
async def GetApi():
    return f"Prediction Decision Tree Iris FLowers Machine Learning"

@router.post("/api/model/model-iris/post")
async def PostingApi(decison_Tree: Decison_Tree):
    sepalLengthCm = decison_Tree.sepalLengthCm 
    sepalWidthCm = decison_Tree.sepalWidthCm
    petalLengthCm = decison_Tree.petalLengthCm
    petalWidthCm = decison_Tree.petalWidthCm

    y_pred = model.predict([[sepalLengthCm, sepalWidthCm, petalLengthCm, petalWidthCm]])
    return f"Prediction results for iris flower types is : {str(y_pred[0])}"
