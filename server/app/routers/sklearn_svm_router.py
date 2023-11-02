from fastapi import APIRouter
from joblib import load
from pydantic import BaseModel
import numpy as np
from sklearn.preprocessing import StandardScaler

router = APIRouter()
scaller = StandardScaler()

classifier = load("./machine_learning/sklearn_svm/saved_models/model.joblib")


class Sklearn_SVM(BaseModel):
    pregnancies: int
    glucose: int
    bloodPressure: int
    skinThickness: int
    insulin: int
    bmi: float
    diabetesPedigreeFunction: float
    age: int


@router.get("/api/model/model-diabetes/get")
async def GetApi():
    return "Welcome to Sklearn SVM API to prediction diabetes"

@router.post("/api/model/model-diabetes/post")
async def PostDiabetes(sklearn_svm: Sklearn_SVM):
    pregnancies = sklearn_svm.pregnancies
    glucose = sklearn_svm.glucose
    bloodPressure = sklearn_svm.bloodPressure
    skinThickness = sklearn_svm.skinThickness
    insulin = sklearn_svm.insulin
    bmi = sklearn_svm.bmi
    diabetesPedigreeFunction = sklearn_svm.diabetesPedigreeFunction
    age = sklearn_svm.age
    
    model_pred = (pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age)
    model_pred_numpy = np.array(model_pred)
    model_pred_reshape = model_pred_numpy.reshape(1, -1)
    
    diabetes_pred = classifier.predict(model_pred_reshape)
    
    if diabetes_pred[0] == '1':
        return 'Diabetes'
    else:
        return 'No Diabetes'
    
    
    
