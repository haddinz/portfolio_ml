import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import APIClient from "../../../utils/APIClient";
import { Input } from "../../../components";
import Layout from "../screen/layout";

function Model_Diabetes() {
  const [predict, setPredict] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [pregnancies, setPregnancies] = useState<number>(0);
  const [glucose, setGlucose] = useState<number>();
  const [bloodPressure, setBloodPressure] = useState<number>();
  const [skinThickness, setSkinThickness] = useState<number>();
  const [insulin, setInsulin] = useState<number>();
  const [bmi, setBmi] = useState<number>();
  const [diabetesPedigreeFunction, setDiabetesPsdigreeFunction] =
    useState<number>();
  const [age, setAge] = useState<number>();

  const [datasetsView, setDatasetsView] = useState<string>("");

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await APIClient.post("/api/model/model-diabetes/post", {
        pregnancies,
        glucose,
        bloodPressure,
        skinThickness,
        insulin,
        bmi,
        diabetesPedigreeFunction,
        age,
      });
      setPredict(!predict);
      setDatasetsView(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log("Something Wrong About:", error);
    }
  };
  return (
    <Layout>
      <div className="w-full h-[100vh] flex flex-col justify-center">
        <div className="bg-gray-950 w-11/12 rounded-xl mx-auto p-6 mb-8 text-gray-100">
          <h2 className="h2">SKLearn SVM</h2>
          <p className="paragraf mb-6">Datasets Diabetes Prediction</p>
          <div className="h-40 overflow-hidden rounded-xl">
            <img
              alt="flower_iris.jpg"
              src="../../images/diabetes.jpg"
              className="object-cover object-left w-full h-full"
            />
          </div>
        </div>

        <div className="mx-auto mb-10">
          <button
            onClick={() => setPredict(!predict)}
            className="px-8 py-5 bg-blue-700 rounded-md button"
          >
            Predict Daiabetes
          </button>
        </div>

        <div className="paragraf font-semibold text-gray-950 mx-auto">
          {datasetsView ? datasetsView : "No Prediction Result"}
        </div>

        {predict && (
          <div className="absolute top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-gray-100 bg-opacity-30">
            <form
              onSubmit={submitHandler}
              className="flex flex-col justify-center items-center min-h-[70%] w-[70%] space-y-4 bg-gray-950 rounded-xl relative py-5"
            >
              <RxCross2
                className="text-gray-100 absolute top-5 right-5 text-3xl cursor-pointer"
                onClick={() => setPredict(!predict)}
              />

              <Input id="pregnancies" setState={setPregnancies} />
              <Input id="glucose" setState={setGlucose} />
              <Input id="bloodPressure" setState={setBloodPressure} />
              <Input id="skinThickness" setState={setSkinThickness} />
              <Input id="insulin" setState={setInsulin} />
              <Input id="bmi" setState={setBmi} />
              <Input
                id="diabetesPedigreeFunction"
                setState={setDiabetesPsdigreeFunction}
              />
              <Input id="age" setState={setAge} />
              <button
                type="submit"
                className="py-5 w-48 bg-blue-700 rounded-md button "
              >
                {loading ? "loading..." : "submit"}
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Model_Diabetes;
