<?php
@include("connect.php");


if (
    isset($_POST['ref'], $_POST['nbre_pages'], $_POST['auteur'], $_POST['date_publication'], 
          $_POST['genre'], $_POST['disponibilite'], $_POST['nbre_emprunts'], 
          $_POST['etat'], $_POST['nbre_exemplaire'])
) {
    $ref = $_POST['ref'];
    $nb_pages = $_POST['nbre_pages'];
    $auteur = $_POST['auteur'];
    $date_pub = $_POST['date_publication'];
    $genre = $_POST['genre'];
    $dispo = $_POST['disponibilite'];
    $nb_emprunt = $_POST['nbre_emprunts'];
    $etat = $_POST['etat'];
    $nb_exemplaire = $_POST['nbre_exemplaire'];


    $requete = "INSERT INTO livres (ref, nb_pages, auteur, date_publication, genre, disponibilite, nbre_emprunts, etat, nbre_exemplaire) 
                VALUES ('$ref', '$nb_pages', '$auteur', '$date_pub', '$genre', '$dispo', '$nb_emprunt', '$etat', '$nb_exemplaire')";

    if ($rl = mysqli_query($conn, $requete)) {
        echo "<center><p>Ajout réussi !</p></center>";
    } else {
        echo "<center><p>Erreur lors de l'ajout : " . mysqli_error($conn) . "</p></center>";
    }
} else {
    echo "<center><p>Veuillez remplir tous les champs du formulaire.</p></center>";
}


echo '<center><a href="index.html">Retour</a></center>';
?>
