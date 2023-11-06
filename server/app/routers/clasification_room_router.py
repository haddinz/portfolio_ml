from fastapi import APIRouter, UploadFile
from joblib import load
from pathlib import Path
from keras.preprocessing import image

import numpy as np

router = APIRouter()

model = load("./machine_learning/clasification_room/saved_models/model.joblib")

DIR_UPLOAD = Path("../server/app") / "image"


@router.get("/api/model/clasification_room/get")
async def GetApi():
    return f"Clasification room for messy or clean"


@router.post("/api/model/clasification_room/post")
async def PostApi(image_upload: UploadFile):
    data = await image_upload.read()
    save_to = DIR_UPLOAD / image_upload.filename  
    with open(save_to, "wb") as file:
        file.write(data)
    
    path = save_to
    img = image.load_img(path, target_size=(150, 150))

    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])

    classes = model.predict(images, batch_size=10)

    print(classes)
        
    if classes==0:
        return "clean"
    else:
        return "messy"
