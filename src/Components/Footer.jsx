"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  return (
    <footer
      className={`text-white py-4 ${isDarkMode ? "bg-dark" : "bg-black"}`}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>{language === "en" ? "About Us" : "معلومات عنا"}</h5>
            <p>
              {language === "en"
                ? "We are a leading construction company providing top-notch services."
                : "نحن شركة إنشاءات رائدة نقدم خدمات عالية الجودة."}
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>{language === "en" ? "Quick Links" : "روابط سريعة"}</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white text-decoration-none">
                  {language === "en" ? "Home" : "الرئيسية"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-decoration-none">
                  {language === "en" ? "About Us" : "معلومات عنا"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white text-decoration-none"
                >
                  {language === "en" ? "Services" : "الخدمات"}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white text-decoration-none"
                >
                  {language === "en" ? "Contact" : "اتصل بنا"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>{language === "en" ? "Contact Us" : "اتصل بنا"}</h5>
            <p>
              📍 {language === "en" ? "Dubai, UAE" : "دبي، الإمارات"} <br />
              📧 info@construction.com <br />
              📞 +971 55 123 4567
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Construction Co.{" "}
          {language === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
        </p>
      </div>
    </footer>
  );
}
