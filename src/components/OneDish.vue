<template>
    <div class="dishName-and-dishPrice">
       <div class="dishName sans medium light">{{dishName}}</div>
       <div class="dishPrice sans medium light">{{dishPrice}} <span class="euro small">€</span></div>
     </div>
</template>

<script>
export default {
    name:"OneDish",
    props:['dishName', 'dishPrice']
}
</script>

<style>
</style>
