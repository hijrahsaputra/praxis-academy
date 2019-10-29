<template>
  <div id="app">
    <TopMenu />
    <Breadcrumb />
    <Form />
  </div>
</template>
<script>
import Form from './components/Form.vue'
import TopMenu from './components/TopMenu'
import Breadcrumb from './components/Breadcrumb'

export default {
  name: 'app',
  components: {
    Form,
    TopMenu,
    Breadcrumb
  }
}
</script>