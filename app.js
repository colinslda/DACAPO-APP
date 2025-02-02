// Configuration Supabase
const SUPABASE_URL = "https://iwwxlqleffyyfffussbd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3d3hscWxlZmZ5eWZmZnVzc2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NDg5OTMsImV4cCI6MjA1NDAyNDk5M30.GOd3bOdPKeSsWOLOmZsWzgs6VnrjnsUpk-jR0MuC0uQ";

// Création du client Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Si on est sur la page de connexion, gérons le formulaire
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { user, error } = await supabaseClient.auth.signIn({
      email: email,
      password: password
    });

    if (error) {
      document.getElementById('error-message').textContent = error.message;
      console.error('Erreur de connexion:', error);
    } else {
      // Redirection vers la page principale après une connexion réussie
      window.location.href = 'main.html';
    }
  });
}
