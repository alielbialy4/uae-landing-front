"use client";

import { useState, useEffect } from "react";

export default function Projects() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLang(storedLanguage);
    }
  }, []);

  const translations = {
    en: {
      title: "Our Achievements",
      description:
        "Over the years, we have successfully delivered outstanding projects, ensuring quality, innovation, and client satisfaction.",
      projectsCompleted: "Successful projects completed worldwide",
      satisfiedClients: "Satisfied clients across various industries",
      skilledProfessionals: "Skilled professionals in our global network",
    },
    ar: {
      title: "إنجازاتنا",
      description:
        "على مر السنين، نجحنا في تقديم مشاريع متميزة، مع ضمان الجودة والابتكار ورضا العملاء.",
      projectsCompleted: "مشاريع ناجحة تم إنجازها في جميع أنحاء العالم",
      satisfiedClients: "عملاء راضون في مختلف الصناعات",
      skilledProfessionals: "محترفون ماهرون في شبكتنا العالمية",
    },
  };

  const currentTranslation = translations[lang] || translations["en"];

  return (
    <>
      <section className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 my-4 text-center">
              <h1>{currentTranslation.title}</h1>
              <p>{currentTranslation.description}</p>
            </div>
            <div className="col-xl-4 col-md-6 my-4 text-center">
              <div className="p-4 shadow-sm">
                <h1>150+</h1>
                <p>{currentTranslation.projectsCompleted}</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 my-4 text-center">
              <div className="p-4 shadow-sm">
                <h1>200+</h1>
                <p>{currentTranslation.satisfiedClients}</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 my-4 text-center">
              <div className="p-4 shadow-sm">
                <h1>300+</h1>
                <p>{currentTranslation.skilledProfessionals}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
