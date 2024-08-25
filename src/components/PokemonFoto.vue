<template>
<div class = "pokemon-container"></div>
    <img :src="imgSrc" 
        class = "hidden-pokemon"
        alt = "pokemon">
    <img v-if="showPokemon" 
    :src="imgSrc"
        class = "fade-in"
        alt = "pokemon">
</template>

<script>
export default {
  props:{ // passed values  to show or no show image
    pokemonId:{
        type: Number,
        required: true
    },
    showPokemon:{
        type: Boolean,
        required: true,
        default: false
    }
  },
computed:{
    imgSrc(){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
}
}
</script>

<style scoped>
img {
    height: 200px;
    position: absolute;
    right: 37%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
.fade-in {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}


</style>