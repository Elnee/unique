import Vue from 'vue'
import maps from './maps.js'
import './style.sass'

// Application
new Vue({
  el: '#app',
  data: {
    currentMod: 'modCrossed',
    text: 'Write text here...',
    options: [
      { text: 'Crossed text', value: 'modCrossed' },
      { text: 'Upside Down text', value: 'modUpsideDown' },
      { text: 'Circled', value: 'mapmodCircled' },
      { text: 'Circled (neg)', value: 'mapmodCircledNeg' },
      { text: 'Fullwidth', value: 'mapmodFullwidth' },
      { text: 'Math monospace', value: 'mapmodMathMono' },
      { text: 'Math bold', value: 'mapmodMathBold' },
      { text: 'Math bold Fraktur', value: 'mapmodMathBoldFraktur' },
      { text: 'Math bold italic', value: 'mapmodMathBoldItalic' },
      { text: 'Math bold script', value: 'mapmodMathBoldScript' },
      { text: 'Math double-struck', value: 'mapmodMathDoubleStruck' },
      { text: 'Math sans', value: 'mapmodMathSans' },
      { text: 'Math sans bold', value: 'mapmodMathSansBold' },
      { text: 'Rounded', value: 'mapmodRounded' }
    ]
  },
  created: function() {
    this[this.currentMod]()

    // Check user agent for Android Chrome fix
    if (navigator.userAgent.indexOf('Android') != -1) {
      document.querySelector('#app').style.minHeight = 'calc(100vh - 56px)'
    }
  },
  methods: {
    // Modifiers
    modCrossed: function() {
      if (this.text === "") return ""
      if (this.text.length === 1) return this.text + "\u0336"
      else return this.text.split("").join("\u0336")
    },
    modUpsideDown: function() {
      return this.mapTextTo('upsideDown').split('').reverse().join('')
    },
    mapTextTo: function(mapname) {
      let textArr = this.text.split('')

      textArr.forEach((item, index, arr) => {
        if (maps[mapname].has(item)) arr[index] = maps[mapname].get(item)
      })

      return textArr.join('')
    },
    copy: function() {
      let tempInput = document.createElement('input')
      tempInput.type = 'text'
      tempInput.value = this.modifiedText
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('Copy')
      document.body.removeChild(tempInput)
      alert('Copied!')
    }
  },
  computed: {
    modifiedText: function() {
      if (this.currentMod.indexOf('mapmod') != -1) {
        /* Convert select values to appropriate map names
         * For example: mapmodCircledNeg -> circledNeg
         * Just get first character after 'mapmod' (6) prefix
         * and turn it to lower case. Then get the rest of 
         * the line (starts from index 7).
         */
        let mapName = this.currentMod.charAt(6).toLowerCase()
        mapName += this.currentMod.slice(7)
        return this.mapTextTo(mapName)
      }
      return this[this.currentMod]()
    }
  }
})

