
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.toggle("light", currentTheme === "light");
  if (themeToggle) themeToggle.textContent = currentTheme === "light" ? "🌙" : "☀️";

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeToggle.textContent = isLight ? "🌙" : "☀️";
    });
  }
});


    // Локалізація
    const translations = {
      uk: {
        "siteTitle": "Шавурський Олег",
        "navHome": "Головна",
        "navBio": "Біографія",
        "navAchievements": "Досягнення",
        "navContacts": "Контакти",
        "achievementsTitle": "Мої досягнення",
        "achievement1Title": "Переможець хакатону 'КіберБандера 2023'",
        "achievement1Text": "Розробив алгоритм, який зламує будь-який урядковий сайт за 3.14 секунди (але використовував тільки для добрих справ).",
        "achievement2Title": "Запустив власний NFT-проект 'Чорнобайври'",
        "achievement2Text": "Продав 0 з 10 000 токенів, але це не зламало мій дух. 'Метаверс ще не готовий до мого генія', — сказав я.",
        "achievement3Title": "Навчив нейромережу писати вірші про сало",
        "achievement3Text": "GPT-4 плаче від заздрості, коли бачить мої рядки: 'Сало в шоколаді — це як козак у Балаклаві'.",
        "achievement4Title": "Написав код без багів з першого разу",
        "achievement4Text": "Це сталося лише один раз у 3:47 ночі, і ніхто, крім мого кота, не повірить.",
        "randomFact": "💡 Факт: Якщо ви читаєте цей текст, ви вже на 37% крутіші за середньостатистичного відвідувача сайтів про сало.",
        "langToggle": "Česky",
        "themeDark": "🌙",
        "themeLight": "🌞"
      },
      cs: {
        "siteTitle": "Shchavurskyi Oleh",
        "navHome": "Domů",
        "navBio": "Biografie",
        "navAchievements": "Úspěchy",
        "navContacts": "Kontakty",
        "achievementsTitle": "Moje úspěchy",
        "achievement1Title": "Vítěz hackathonu 'CyberBandera 2023'",
        "achievement1Text": "Vytvořil algoritmus, který hackne jakýkoli vládní web za 3.14 sekundy (ale použil jsem ho jen pro dobré účely).",
        "achievement2Title": "Spustil jsem vlastní NFT projekt 'Černobajvry'",
        "achievement2Text": "Prodal jsem 0 z 10 000 tokenů, ale to mě nezlomilo. 'Metaverse ještě není připraven na můj génius,' řekl jsem.",
        "achievement3Title": "Naučil jsem neuronovou síť psát básně o sádle",
        "achievement3Text": "GPT-4 pláče závistí, když vidí mé verše: 'Sádlo v čokoládě je jako kozák v Balaklavě'.",
        "achievement4Title": "Napsal jsem kód bez chyb na první pokus",
        "achievement4Text": "Stalo se to jen jednou v 3:47 ráno a nikdo kromě mé kočky mi to neuvěří.",
        "randomFact": "💡 Fakt: Pokud čtete tento text, jste již o 37% lepší než průměrný návštěvník webů o sádle.",
        "langToggle": "Українська",
        "themeDark": "🌙",
        "themeLight": "🌞"
      }
    };

    // Стан додатку
    let currentLang = localStorage.getItem('lang') || 'uk';
    let isDarkMode = localStorage.getItem('theme') !== 'light';

    // Ініціалізація
    function initApp() {
      // Тема
      if (!isDarkMode) {
        document.body.classList.add('light');
        document.getElementById('theme-toggle').textContent = translations[currentLang].themeLight;
      } else {
        document.getElementById('theme-toggle').textContent = translations[currentLang].themeDark;
      }

      // Мова
      updateTexts();
      setupObservers();
    }

    // Оновлення тексту
    function updateTexts() {
      const langData = translations[currentLang];
      for (const key in langData) {
        const element = document.getElementById(key.toLowerCase()) || document.querySelector(`[id^="${key.toLowerCase()}"]`);
        if (element) element.textContent = langData[key];
      }
      document.getElementById('lang-toggle').textContent = langData.langToggle;
    }

    // Спостерігач для анімацій
    function setupObservers() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.achievement-card').forEach(card => {
        observer.observe(card);
      });
    }

    // Перемикач теми
    document.getElementById('theme-toggle').addEventListener('click', () => {
      document.body.classList.toggle('light');
      isDarkMode = !document.body.classList.contains('light');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      document.getElementById('theme-toggle').textContent = 
        isDarkMode ? translations[currentLang].themeDark : translations[currentLang].themeLight;
    });

    // Перемикач мови
    document.getElementById('lang-toggle').addEventListener('click', () => {
      currentLang = currentLang === 'uk' ? 'cs' : 'uk';
      localStorage.setItem('lang', currentLang);
      updateTexts();
      
      // Оновлюємо текст кнопки теми
      document.getElementById('theme-toggle').textContent = 
        isDarkMode ? translations[currentLang].themeDark : translations[currentLang].themeLight;
    });

    // Запуск додатку
    document.addEventListener('DOMContentLoaded', initApp);
