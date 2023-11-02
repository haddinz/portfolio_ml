import { useNavigate } from "react-router-dom";
import { dataModels } from "../../../utils/data_models";

function Model() {
  const navigate = useNavigate();
  return (
    <div
      id="model"
      className="min-h-[100vh] flex flex-col justify-center scroll-m-20"
    >
      <div className="grid grid-cols-1 container mx-auto gap-10">
        {dataModels.slice(0, 3).map((data) => (
          <div
            key={data.id}
            className="bg-gray-100 rounded-xl mx-auto w-full h-40 relative overflow-hidden cursor-pointer"
            onClick={() => navigate(data.url)}
          >
            <img
              alt={data.title}
              src={data.img}
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute top-5 left-5 text-gray-100">
              <h2 className="h2">{data.model}</h2>
              <p className="paragraf">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Model;
