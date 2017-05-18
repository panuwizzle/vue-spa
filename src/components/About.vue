<template>
  <div id="about">count {{ count }} - About us Dolor voluptatibus eum est laborum quam laborum! Perferendis totam fugiat fuga vel voluptate Possimus facere reiciendis nihil commodi doloribus. Labore at minus ipsum reprehenderit assumenda provident Quibusdam dignissimos consequuntur maiores.</div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
