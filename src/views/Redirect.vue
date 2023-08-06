<template>
  <div></div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    const code = to.params.code;
    const redirectTo = `https://urls-kejvin-server-f69fa1281575.herokuapp.com/${code}`;

    window.location.replace(redirectTo);

    next(false);
  },
};
</script>
