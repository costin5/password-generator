/* ===== Variables and Themes ===== */
:root {
  --background-color: #f1f1f1;
  --text-color: #333;
  --container-bg: white;
  --output-bg: #eee;
  --button-bg: #007bff;
  --button-hover: #0056b3;
  --button-text: white;
  --box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --background-color: #222;
  --text-color: #f1f1f1;
  --container-bg: #333;
  --output-bg: #444;
  --button-bg: #0056b3;
  --button-hover: #007bff;
  --button-text: white;
  --box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

/* ===== Base Elements ===== */
html {
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  background: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

/* ===== Header and Navigation ===== */
header {
  width: 100%;
  background-color: var(--container-bg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  border-radius: 0 0 12px 12px;
  margin-bottom: 20px;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s;
}

.logo a:hover {
  color: var(--button-hover);
}

.header-nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.header-nav a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;
}

.header-nav a:hover {
  color: var(--button-hover);
}

/* ===== Main Layout ===== */
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  background: var(--container-bg);
  padding: 20px;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 600px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.info-section {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 2rem;
  background: var(--container-bg);
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  text-align: center;
}

.info-section ul {
  list-style-position: inside;
  text-align: left;
  padding-left: 0;
  margin-top: 1rem;
}

.info-section li {
  margin-bottom: 0.5rem;
}

/* ===== Footer ===== */
footer {
  width: 100%;
  text-align: center;
  padding: 1rem;
  background-color: var(--container-bg);
  box-shadow: var(--box-shadow);
  border-radius: 12px;
  margin-top: 20px;
}

/* ===== Links ===== */
footer a,
.info-section a {
  color: rgb(18, 76, 211);
  text-decoration: none;
  transition: color 0.3s;
}

footer a:hover,
.info-section a:hover {
  color: var(--button-hover);
  text-decoration: underline;
}

/* ===== Form Elements ===== */
label {
  display: block;
  margin-top: 10px;
}

input[type="number"] {
  width: 60px;
  padding: 5px;
  background-color: var(--output-bg);
  color: var(--text-color);
  border: 1px solid #ccc;
  border-radius: 4px;
}

.output {
  margin-top: 15px;
  padding: 10px;
  background: var(--output-bg);
  font-family: monospace;
  text-align: left;
  word-break: break-all;
  white-space: nowrap;
  overflow-x: auto;
  max-width: 100%;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background: var(--button-hover);
}

.feedback {
  text-align: center;
  margin-top: 10px;
  color: green;
}

/* ===== Theme Switch ===== */
.theme-switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 15px;
}

.theme-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 0 10px;
}

.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #007bff;
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.theme-icon {
  font-size: 18px;
}

/* ===== Animations ===== */
.typing-animation {
  border-right: 2px solid var(--text-color);
  animation: cursor-blink 0.7s infinite;
}

@keyframes cursor-blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: var(--text-color); }
}


/* ===== Media Queries ===== */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }

  .header-left {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .header-nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    padding: 0.5rem 0;
  }

  .header-nav a {
    padding: 0.5rem;
  }

  .theme-switch-container {
    margin: 0.8rem 0;
    width: 100%;
    justify-content: center;
  }

  /* Adjusting container sizes for mobile */
  .container, .info-section {
    padding: 15px;
    width: 90%;
  }

  body {
    padding: 10px;
  }

  /* Prevent horizontal scroll */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  /* Make the header sticky on mobile */
  header {
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 100%;
    z-index: 1000;
    border-radius: 0 0 8px 8px;
    margin-left: 0;
    margin-right: 0;
    padding: 0.5rem;
  }

  /* Better font sizes for mobile */
  h2 {
    font-size: 1.5rem;
  }
  
  p, li {
    font-size: 0.95rem;
  }
}

/* Additional fixes for very small screens */
@media (max-width: 480px) {
  .header-nav {
    gap: 0.5rem;
  }
  
  .header-nav a {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
  
  .info-section {
    padding: 1rem;
  }
}

/* Fix for all screen sizes */
header {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

main {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* Ensure all elements respect the box-sizing */
* {
  box-sizing: border-box;
}

