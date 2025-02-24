"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // استيراد framer-motion

export default function HeroSection() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLang(storedLanguage);
    }
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 }, // يبدأ غير مرئي وينزاح قليلاً للأسفل
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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
    </>
  );
}
