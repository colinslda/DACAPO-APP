const SUPABASE_URL = "https://iwwxlqleffyyfffussbd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3d3hscWxlZmZ5eWZmZnVzc2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NDg5OTMsImV4cCI6MjA1NDAyNDk5M30.GOd3bOdPKeSsWOLOmZsWzgs6VnrjnsUpk-jR0MuC0uQ";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function handleAuth() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert("Erreur de connexion !");
    window.location.href = 'app.html';
}

async function handleSignup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return alert("Erreur d'inscription !");
    alert("Compte créé, vérifiez vos emails !");
}
