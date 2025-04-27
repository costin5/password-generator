/**
 * Generates a random password based on user preferences
 * Controls the character types and animates the result
 */
function generatePassword() {
  // Clear previous feedback
  document.getElementById("feedback").innerText = "";
  document.getElementById("password").innerText = "";
  
  // Get password length and validate
  const length = parseInt(document.getElementById("length").value);
  if (isNaN(length) || length < 4) {
    document.getElementById("password").innerText = "Minimum length is 4 characters!";
    return;
  }
  if (length > 512) {
    document.getElementById("password").innerText = "Maximum length is 512 characters!";
    return;
  }
  
  // Get character type preferences
  const useLower = document.getElementById("lowercase").checked;
  const useUpper = document.getElementById("uppercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;
  
  // Validate at least one character type is selected
  if (!useLower && !useUpper && !useNumbers && !useSymbols) {
    document.getElementById("password").innerText = "Select at least one character type.";
    return;
  }
  
  // Define character sets
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=-{}[]|:;<>?";
  
  // Build character set based on selections
  let charset = "";
  if (useLower) charset += lower;
  if (useUpper) charset += upper;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;
  
  // Generate final password
  let finalPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    finalPassword += charset[randomIndex];
  }
  
  // Clean password from special control characters
  const cleanPassword = finalPassword.replace(/[\n\r\t]/g, "");
  
  // Start animation
  animatePasswordGeneration(cleanPassword, charset);
}

/**
 * Animates the password generation with a matrix-like effect
 * @param {string} password - The final password to display
 * @param {string} charset - Character set used for scrambling
 */
function animatePasswordGeneration(password, charset) {
  const passwordElement = document.getElementById('password');
  const maxIterations = 10; // Number of iterations for effect
  let iterations = 0;
  
  // Fill initially with random characters of the same length
  let initialScramble = "";
  for (let i = 0; i < password.length; i++) {
    initialScramble += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  passwordElement.innerText = initialScramble;
  
  // Set up animation interval
  const interval = setInterval(() => {
    iterations++;
    
    let result = "";
    for (let i = 0; i < password.length; i++) {
      // Progressively reveal the actual password
      if (iterations / maxIterations > i / password.length) {
        result += password[i];
      } else {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }
    }
    
    passwordElement.innerText = result;
    
    // End animation when complete
    if (iterations >= maxIterations) {
      clearInterval(interval);
      passwordElement.innerText = password;
      
      // Log password details to console (for debugging)
      console.log("Password generated:", password);
      console.log("Character codes:");
      for (let i = 0; i < password.length; i++) {
        console.log(password[i], "→", password.charCodeAt(i));
      }
    }
  }, 50);
}

/**
 * Copies the generated password to clipboard
 */
function copyPassword() {
  const passwordText = document.getElementById("password").innerText;
  if (passwordText && passwordText !== "—" && !passwordText.includes("Select")) {
    navigator.clipboard.writeText(passwordText);
    document.getElementById("feedback").innerText = "Password copied!";
  }
}

/**
 * Initializes the application when DOM is loaded
 * Sets up theme preferences and event listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
});

/**
 * Initializes theme based on user preferences
 */
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
  } else {
    // Use system preference if no saved theme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
    }
  }
  
  // Set up theme toggle listener
  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}
