<?php
// Démarrage de la session
session_start();
require 'connexion.php';

// Si le formulaire est soumis
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Préparer la requête SQL
    $sql = "SELECT * FROM users WHERE username = '$username' AND mot_de_passe = '$password'";

    // Exécuter la requête
    $result = $db->query($sql);

    // Vérifier si l'utilisateur existe
    if ($result->num_rows == 1) {
        // Démarrer une session
        session_start();

        // Stocker les informations de l'utilisateur dans la session
        $row = $result->fetch_assoc();
        $_SESSION['id'] = $row['id'];
        $_SESSION['username'] = $row['username'];

        // Rediriger vers la page d'accueil
        header('Location: index.php');
        exit();
    } else {
        // Afficher un message d'erreur
        $message = "Email ou mot de passe incorrect";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login et Inscription</title>
</head>
<body>
    <!-- Formulaire de connexion -->
    <h2>Connexion</h2>
    <form method="POST" action="">
        <input type="text" name="username" placeholder="Nom d'utilisateur" required>
        <input type="password" name="password" placeholder="Mot de passe" required>
        <button type="submit" name="login">Se connecter</button>
    </form>
</body>
</html>
