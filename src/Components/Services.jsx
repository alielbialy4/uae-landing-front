"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer"
export default function Services() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLang(storedLanguage);
    }
  }, []);

  const translations = {
    en: {
      servicesTitle: "See Our Services",
      servicesDescription:
        "We provide top-quality construction services with modern technology. Our focus is on efficiency, durability, and sustainability.",
      constructionTitle: "Construction",
      constructionSubText:
        "High-quality building solutions with innovative technology.",
      engineeringTitle: "Engineering",
      engineeringSubText: "Structural design and project management services.",
      renovationTitle: "Renovation",
      renovationSubText: "Modernizing spaces with sustainable practices.",
      greenBuildingTitle: "Green Building",
      greenBuildingSubText: "Eco-friendly construction for a better future.",
      learnMore: "Learn More",
    },
    ar: {
      servicesTitle: "شاهد خدماتنا",
      servicesDescription:
        "نحن نقدم خدمات بناء عالية الجودة بأحدث التقنيات. نركز على الكفاءة والمتانة والاستدامة.",
      constructionTitle: "بناء",
      constructionSubText: "حلول بناء عالية الجودة بتقنيات مبتكرة.",
      engineeringTitle: "هندسة",
      engineeringSubText: "تصميم إنشائي وخدمات إدارة المشاريع.",
      renovationTitle: "تجديد",
      renovationSubText: "تحديث المساحات بممارسات مستدامة.",
      greenBuildingTitle: "بناء أخضر",
      greenBuildingSubText: "بناء صديق للبيئة لمستقبل أفضل.",
      learnMore: "اعرف المزيد",
    },
  };

  const currentTranslation = translations[lang] || translations["en"];

  const isArabic = lang === "ar"; // تحديد ما إذا كانت اللغة العربية

  const [Boxes, setBoxes] = useState([
    {
      icon: "fa-solid fa-building",
      title: currentTranslation.constructionTitle,
      subText: currentTranslation.constructionSubText,
      link: "#",
    },
    {
      icon: "fa-solid fa-hard-hat",
      title: currentTranslation.engineeringTitle,
      subText: currentTranslation.engineeringSubText,
      link: "#",
    },
    {
      icon: "fa-solid fa-hammer",
      title: currentTranslation.renovationTitle,
      subText: currentTranslation.renovationSubText,
      link: "#",
    },
    {
      icon: "fa-solid fa-leaf",
      title: currentTranslation.greenBuildingTitle,
      subText: currentTranslation.greenBuildingSubText,
      link: "#",
    },
  ]);

  useEffect(() => {
    setBoxes([
      {
        icon: "fa-solid fa-building",
        title: currentTranslation.constructionTitle,
        subText: currentTranslation.constructionSubText,
        link: "#",
      },
      {
        icon: "fa-solid fa-hard-hat",
        title: currentTranslation.engineeringTitle,
        subText: currentTranslation.engineeringSubText,
        link: "#",
      },
      {
        icon: "fa-solid fa-hammer",
        title: currentTranslation.renovationTitle,
        subText: currentTranslation.renovationSubText,
        link: "#",
      },
      {
        icon: "fa-solid fa-leaf",
        title: currentTranslation.greenBuildingTitle,
        subText: currentTranslation.greenBuildingSubText,
        link: "#",
      },
    ]);
  }, [currentTranslation]);

  const cardBodyStyle = isArabic
    ? { textAlign: "right", direction: "rtl" }
    : { textAlign: "left", direction: "ltr" };

  return (
    <>
      <section>
        <div className="container my-4">
          <div className="row my-5">
            <div
              className="col-12"
              style={isArabic ? { textAlign: "right" } : {}}
            >
              <div className="text-center w-50 mx-auto">
                <h1>{currentTranslation.servicesTitle}</h1>
                <p>{currentTranslation.servicesDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-3">
        <div className="container my-4">
          <div className="row">
            {Boxes.map((ele, index) => (
              <motion.div
                className="col-xl-3 col-md-4 col-12 my-2"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className="card mx-auto shadow-sm border-0"
                  style={{ width: "18rem" }}
                >
                  <motion.div
                    className="card-body text-start"
                    style={cardBodyStyle} // تطبيق الأنماط المشروطة
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.h2
                      style={{
                        color: "#5d8749",
                        ...(isArabic ? { textAlign: "right" } : {}),
                      }}
                      className="my-3"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={ele.icon}></i>
                    </motion.h2>
                    <h5
                      style={isArabic ? { textAlign: "right" } : {}}
                      className="card-title"
                    >
                      {ele.title}
                    </h5>
                    <p
                      style={isArabic ? { textAlign: "right" } : {}}
                      className="card-text"
                    >
                      {ele.subText}
                    </p>
                    <a
                      
                      style={{ color: "#5d8749" }}
                      href={ele.link}
                      className="card-link text-decoration-none"
                    >
                      {currentTranslation.learnMore}
                      <i className="ms-2 fa-solid fa-arrow-right"></i>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
