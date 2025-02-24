"use client"; // لأننا نستخدم useState و onClick

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
    }

    // تحديد اتجاه الكتابة
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
  }, [darkMode, language]);

  // تغيير اللغة
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary`} // تم إزالة أنماط السمة من هنا
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          Construction Co.
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                {language === "en" ? "Home" : "الرئيسية"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                {language === "en" ? "About Us" : "معلومات عنا"}
              </Link>
            </li>

            {/* Services (Dropdown) */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link className="nav-link dropdown-toggle" href="#">
                {language === "en" ? "Services" : "الخدمات"}
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/services/general-construction"
                  >
                    {language === "en"
                      ? "General Construction"
                      : "البناء العام"}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/renovation">
                    {language === "en"
                      ? "Renovation & Restoration"
                      : "التجديد والترميم"}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/architecture">
                    {language === "en"
                      ? "Architectural Design"
                      : "التصميم المعماري"}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/landscaping">
                    {language === "en" ? "Landscaping" : "تنسيق الحدائق"}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/services/project-management"
                  >
                    {language === "en"
                      ? "Project Management"
                      : "إدارة المشاريع"}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                {language === "en" ? "Blog" : "المدونة"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                {language === "en" ? "Contact Us" : "اتصل بنا"}
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-3">
            <button
              className="btn border language-button"
              onClick={toggleLanguage}
            >
              {language === "en" ? "عربي" : "English"}
            </button>

            <button
              className="btn btn-outline-light"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
