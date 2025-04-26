function generatePassword() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("password").innerText = "";
    let errors = [];
    let length = parseInt(document.getElementById("length").value);
    if (isNaN(length) || length < 4) {
      document.getElementById("password").innerText = "Minimum length is 4 characters!";
      return;
    }
    if (length > 512) {
      document.getElementById("password").innerText = "Maximum length is 512 characters!";
      return;
    }
    const useLower = document.getElementById("lowercase").checked;
    const useUpper = document.getElementById("uppercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
    if (!useLower && !useUpper && !useNumbers && !useSymbols) {
      errors.push("Select at least one character type.");
    }
    if (errors.length > 0) {
      document.getElementById("password").innerText = errors.join("\n");
      return;
    }
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-{}[]|:;<>?";
    let charset = "";
    if (useLower) charset += lower;
    if (useUpper) charset += upper;
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;
    
    // Generează parola finală
    let finalPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      finalPassword += charset[randomIndex];
    }
    
    // Curăță parola de caractere speciale
    const cleanPassword = finalPassword.replace(/[\n\r\t]/g, "");
    
    // Aici începe animația
    const passwordElement = document.getElementById('password');
    const chars = charset; // Folosim același set de caractere pentru animație
    let iterations = 0;
    const maxIterations = 10; // Numărul de iterații pentru efect
    
    // Umple inițial cu caractere aleatorii de aceeași lungime
    let initialScramble = "";
    for (let i = 0; i < cleanPassword.length; i++) {
      initialScramble += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordElement.innerText = initialScramble;
    
    
    const interval = setInterval(() => {
      iterations++;
      
      let result = "";
      for (let i = 0; i < cleanPassword.length; i++) {
        
        if (iterations / maxIterations > i / cleanPassword.length) {
          result += cleanPassword[i];
        } else {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }
      
      passwordElement.innerText = result;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        passwordElement.innerText = cleanPassword;
        
        
        console.log("Parolă generată:", cleanPassword);
        console.log("Coduri caractere:");
        for (let i = 0; i < cleanPassword.length; i++) {
          console.log(cleanPassword[i], "→", cleanPassword.charCodeAt(i));
        }
      }
    }, 50); 
  }
  
  function copyPassword() {
    const passwordText = document.getElementById("password").innerText;
    if (passwordText && passwordText !== "—" && !passwordText.includes("Select")) {
      navigator.clipboard.writeText(passwordText);
      document.getElementById("feedback").innerText = "Password copied!";
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      if (savedTheme === 'dark') {
        themeToggle.checked = true;
      }
    } else {
      
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
      }
    }
    
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  });