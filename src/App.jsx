import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";
import Step from "./components/step/Step";
import Textfield from "./components/textfield/Textfield";
import { isDesktop } from "react-device-detect";

const stepsData = [
  {
    imageSrc: "./assets/step_1.svg",
    text: "1. Le rève liber l'expressior",
  },
  {
    imageSrc: "./assets/step_2.svg",
    text: "2. Le sens éclaire le parcours",
  },
  {
    imageSrc: "./assets/step_3.svg",
    text: "3. La différence rend unique",
  },
  {
    imageSrc: "./assets/step_4.svg",
    text: "4. La valeur humaine met en mouvement",
  },
  {
    imageSrc: "./assets/step_5.svg",
    text: "5. La clé exprime le style",
  },
  {
    imageSrc: "./assets/step_6.svg",
    text: "6. Le parcours associe rêve et réalité",
  },
  {
    imageSrc: "./assets/step_7.svg",
    text: "7. Le ciel bleu révèle l'alignement",
  },
];

function App() {
  const [formData, setFormData] = useState({ fullname: "", intent: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = () => {
    let errors = {};
    if (!formData.fullname.length) {
      errors.fullname = "Nom et Prénom sont requises!";
    }
    if (!formData.intent.length) {
      errors.intent = "L'intention est requise!";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    isDesktop && setErrors(validateValues(formData));
    setSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      axios.get("https://api.db-ip.com/v2/free/self").then((response) => {
        const result = response.data.ipAddress
          .split(".")
          .reduce(function (acc, val) {
            return acc + val;
          }, 0);
        alert(result > 100 ? "OK" : "KO");
      });
    }
  }, [errors, submitting]);

  const steps = stepsData.map((step) => {
    return <Step key={step.text} image={step.imageSrc} text={step.text}></Step>;
  });

  return (
    <>
      <div className="w-screen h-screen md:bg-[url('./assets/dream_app_bg.png')] bg-auto bg-no-repeat bg-center">
        <Navbar></Navbar>
        <div className="container flex flex-row">
          <div className="left-side text-white ml-40 pt-20 hidden md:block">
            <h2 className="font-bold text-[30px] mb-[30px]">
              Pour commencer...
            </h2>
            <p className="mb-[50px] w-[75%]">
              Faire votre Shynlei, jouer avec, c&apos;est l&apos;occasion
              d&apos;écouter vos rêves, de les partager et de prendre confiance
              dans votre richesse.
            </p>
            <Textfield
              labelText="Nom et Prénom"
              name="fullname"
              value={formData.fullname}
              handleChange={handleChange}
              error={errors?.fullname}
            ></Textfield>
            <Textfield
              labelText="Mon intention"
              subLabel="L'intention, l'objectif de ce Shynlei"
              name="intent"
              value={formData.intent}
              handleChange={handleChange}
              error={errors?.intent}
            ></Textfield>
          </div>
          <div className="right-side mx-[10px] md:ml-[40px] pt-10">
            <h2 className="font-bold text-[30px] mb-[15px] md:mb-[30px]">
              Vote Shynleï c&apos;est..
            </h2>
            <p className="mb-[20px] md:mb-[50px]">
              7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour
              éclairer le sens, 3 interprétations pour vous aider.
            </p>
            <div className="steps grid md:grid-cols-2 gap-4">{steps}</div>
            <Button onClick={handleSubmit}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
