import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { Letter } from "../../../components";

const tools = [
  "python",
  "pandas",
  "SciKit Learn",
  "fastAPI",
  "numpy",
  "matplotlib",
  "TensorFlow",
  "Keras",
  "Javascript",
  "Postman",
  "MongoDB",
  "Strong Programming Skills",
];

const category = [
  "SKLearn Decision Tree",
  "SKLearn Linear Regression",
  "SKLearn Logistic Regression",
  "SKLearn K-means",
  "SKLearn PCA",
  "SKLearn SVM",
  "SKLearn SVR",
  "SKLearn Grid Search",
  "Convolutional Neural Network",
];

function About() {
  const [dropdownTools, setDropdownTools] = useState<boolean>(false);
  const [dropdownCategory, setDropdownCategory] = useState<boolean>(false);

  return (
    <div
      id="about"
      className="min-h-[100vh] flex flex-col justify-center py-20"
    >
      <div className="container grid grid-cols1 md:grid-cols-2 mx-auto">
        <div className="space-y-5 mb-20 md:mb-0">
          <Letter word={" service "} />

          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setDropdownTools(!dropdownTools)}
          >
            {dropdownTools ? (
              <IoMdArrowDropdown className="text-3xl" />
            ) : (
              <IoMdArrowDropup className="text-3xl" />
            )}
            <p className="text-lg font-semibold font-poppins">Tools</p>
          </div>
          {dropdownTools && (
            <ul className="ml-9">
              {tools.map((service, index) => (
                <li key={index} className="capitalize paragraf text-gray-700">
                  {service}
                </li>
              ))}
            </ul>
          )}

          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setDropdownCategory(!dropdownCategory)}
          >
            {dropdownCategory ? (
              <IoMdArrowDropdown className="text-3xl" />
            ) : (
              <IoMdArrowDropup className="text-3xl" />
            )}
            <p className="text-lg font-semibold font-poppins">Projects Model</p>
          </div>
          {dropdownCategory && (
            <ul className="ml-9">
              {category.map((category, index) => (
                <li key={index} className="capitalize paragraf text-gray-700">
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="space-y-5">
          <Letter word={" about "} />
          <Aboutme />
        </div>
      </div>
    </div>
  );
}

const Aboutme = () => {
  return (
    <div className="space-y-5">
      <p className="paragraf">
        Iam machine learning developher based in Indonesia. I have an
        understanding of the theory and implementation of machine learning,
        driven by my interest in data and computing. In the midst of my busy
        schedule, I am a freelance full-stack developer, and you can see my
        porftolio project by the{" "}
        <Link
          to={"https://portfoliohajrul.netlify.app/"}
          className="text-blue-800 font-bold"
          content="blank"
        >
          following link
        </Link>
      </p>
      <p className="paragraf">
        My learning and experience in data processing and programming, makes me
        able to program a learning program without being programmed explicitly.
        I also train a program by determining a pattern. So that I can produce
        solutions from data and labels from data. In data analysis and
        programming, I am able to program machines so that they can identify
        patterns in data. I can also create programs that adapt to new data.
        This enables me to develop machine learning algorithms that can learn
        from a wide range of data.
      </p>
    </div>
  );
};

export default About;
