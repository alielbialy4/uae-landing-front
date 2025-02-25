"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../Assets/pexels-rezwan-1216589.jpg";

export default function HeroSection() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLang(storedLanguage);
    }
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const aboutVariants = {
    hidden: { opacity: 0, x: -50 }, // يبدأ غير مرئي وينزاح قليلاً إلى اليسار
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3, // تأخير بسيط ليبدأ بعد العنوان الرئيسي
      },
    },
  };

  const translations = {
    en: {
      title: "Innovative technologies for modern construction",
      aboutUs: "About Us",
      aboutUsDescription:
        "We are a leading construction company specializing in innovative technologies and modern building practices. Our commitment to quality and sustainability sets us apart. With years of experience in the industry, we provide cutting-edge solutions that enhance efficiency, durability, and environmental responsibility in every project we undertake.",
    },
    ar: {
      title: "تقنيات مبتكرة للبناء الحديث",
      aboutUs: "من نحن",
      aboutUsDescription:
        "نحن شركة إنشاءات رائدة متخصصة في التقنيات المبتكرة وممارسات البناء الحديثة. التزامنا بالجودة والاستدامة يميزنا.",
    },
  };

  const currentTranslation = translations[lang] || translations["en"];

  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <motion.div
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                {lang === "en" ? (
                  <h1>
                    Innovative
                    <br />
                    technologies for
                    <br /> modern construction
                  </h1>
                ) : lang === "ar" ? (
                  <h1>
                    تقنيات
                    <br />
                    مبتكرة
                    <br />
                    لإنشاءات عصرية
                  </h1>
                ) : (
                  <h1>Unsupported Language</h1>
                )}
              </motion.div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <i
                className="fas fa-city fs-1 fs-md-3 fs-sm-5"
                style={{ color: "gold" }}
              ></i>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 my-4">
              <img
                style={{ maxWidth: "100%", height: "auto",borderRadius:"20px" }}
                src={HeroImage.src}
                alt="Modern Construction"
                
              />
            </div>
            <div className="col-xl-6 my-4">
              <motion.div
                className="h-100 d-flex align-items-start justify-content-center flex-column px-4"
                variants={aboutVariants}
                initial="hidden"
                animate="visible"
              >
                <h1>{currentTranslation.aboutUs}</h1>
                <p>{currentTranslation.aboutUsDescription}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
