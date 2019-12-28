<template>
  <div class="about">
    <!-- как читать параметры роута внутри компонента: $route.params.PARAM_NAME -->
    <h1>This is an about page with {{$route.params.id}}</h1>
    <input v-model="name">
    {{name}}
    <br/>
    {{initials}}
    <hr>
    {{data1}} + {{data2}} = {{unitedList}}
    <hr>
    {{timePassed | timeParse}}
  </div>
</template>
<script>

export default {
  name: 'About',

  data () {
    return {
      name: 'Mikhail',
      data1: [1, 2, 3, 4],
      data2: [],
      timePassed: 1000
    }
  },

  computed: {
    initials () {
      return `${this.name[0].toLocaleUpperCase()}.`
    },
    unitedList () {
      return this.data1.concat(this.data2)
    }
  },

  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter', 'TODO: здесь можно вызвать загрузку данных')
    next()
  },

  watch: {
    // вызов нескольких коллбеков на вотчере
    timePassed: [
      function (a) {
        this.$emit('count', {
          data: a
        })
        console.log('first', a)
      },
      function (b) {
        console.log('second', b)
      }
    ]
  },

  mounted () {
    setTimeout(() => {
      this.data2 = [4, 5, 7, 8]
    }, 2000)

    // программный переход на другой роут
    // setTimeout(() => {
    //   this.$router.push('/')
    // }, 5000)

    setInterval(() => {
      this.timePassed += 1000
    }, 1000)
  }
}
</script>
