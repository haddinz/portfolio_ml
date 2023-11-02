import { useState } from "react";
import APIClient from "../../../utils/APIClient";
import Layout from "../screen/layout";

function Model_Room() {
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadFile, setUploadFile] = useState<File>();
  const [datasetsView, setDatasetsView] = useState<string>("");

  const uploadFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFile(e.target.files?.[0]);
  };

  const submitUploadFileHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image_upload", uploadFile ?? "");

      const { data } = await APIClient.post(
        "/api/model/clasification_room/post", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      setDatasetsView(data);
      setLoading(false);
      console.log("image uploaded successfully");
    } catch (error) {
      console.log("Upload Image get Error :", error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="w-full h-[100vh] flex flex-col justify-center">
        <div className="bg-gray-950 text-gray-100 w-11/12 rounded-xl mx-auto p-6 mb-8">
          <h2 className="h2">Convolutional Neural Network</h2>
          <p className="paragraf mb-6">Classification Room Clean or Messy</p>
          <div className="h-40 overflow-hidden rounded-xl">
            <img
              alt="flower_iris.jpg"
              src="../../images/room.jpg"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        <form
          className="w-full flex justify-center items-center flex-col space-y-5 mb-6"
          onSubmit={submitUploadFileHandler}
        >
          <input
            required
            type="file"
            onChange={uploadFileHandler}
            accept="image/*"
            className="p-3 bg-gray-950 text-gray-100 rounded paragraf"
          />
          {uploadFile && (
            <button
              type="submit"
              className="py-5 w-48 bg-blue-700 rounded-md button "
            >
              {loading ? "loading..." : "submit"}
            </button>
          )}
        </form>

        <div className="paragraf font-semibold text-gray-950 mx-auto">
          {datasetsView ? datasetsView : "No Prediction Result"}
        </div>
      </div>
    </Layout>
  );
}

export default Model_Room;
