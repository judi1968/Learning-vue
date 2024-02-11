<script>
import axios from 'axios';
import '../../assets/ajout.css'

export default {
  methods: {
    async ajouterEmployer() {
      const nom = this.$refs.nom.value;
      const prenom = this.$refs.prenom.value;

      try {
        const response = await axios.post('http://votre-serveur-spring/api/ajouterEmployer', {
          nom,
          prenom
        });
        console.log(response.data); // Afficher la réponse du serveur dans la console
      } catch (error) {
        console.error('Erreur lors de l\'envoi des données:', error);
      }
    }
  }
}
</script>

<template>
  <div class="ajout">
    <div class="container card">
      <form @submit.prevent="ajouterEmployer">
        <center>
          <h1 class="text-uppercase">Ajoute d'employé</h1>
        </center>
        <div class="form-floating mb-3">
          <input ref="nom" type="text" class="form-control" id="floatingNom" placeholder="Nom">
          <label for="floatingNom">Nom</label>
        </div>
        <div class="form-floating">
          <input ref="prenom" type="text" class="form-control" id="floatingPrenom" placeholder="Prénom">
          <label for="floatingPrenom">Prénom</label>
        </div>
        <br>
        <button type="submit" class="w-25 btn btn-success">Ajouter</button>
      </form>
    </div>
  </div>
</template>
