<template>
  <div>
    <h1>Redirecting...</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    const code = to.params.code; // Get the code from the route parameter
    const externalURL = `https://urls-kejvin-server-f69fa1281575.herokuapp.com/api/url/${code}`;

    // Redirect the user to the external URL
    window.location.href = externalURL;

    // Since this is a redirect, there's no need to render the component
    next(false);
  },
};
</script>
