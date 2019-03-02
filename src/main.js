import Vue from 'vue'
import maps from './maps.js'
import './style.sass'

// Function to copy text
function copyText(text) {
  let tempInput = document.createElement('input')
  tempInput.type = 'text'
  tempInput.value = text
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('Copy')
  document.body.removeChild(tempInput)
  alert('Copied!')
}

// Application
new Vue({
  el: '#app',
  data: {
    currentMod: 'modCrossed',
    text: 'Write text here...',
    options: [
      { text: 'Crossed text', value: 'modCrossed' },
      { text: 'Upside Down text', value: 'modUpsideDown' },
      { text: 'Fullwidth (bold)', value: 'modFullwidthBold' },
      { text: 'Fullwidth (thin)', value: 'modFullwidthThin' },
      { text: 'Rounded', value: 'modRounded' }
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
      let reversed = this.text.split('').reverse().join('')
      
      // Replace characters with their upside down alternatives
      reversed = reversed.split('')
      reversed.forEach((item, index, arr) => {
        if (maps.usdMap.has(item)) arr[index] = maps.usdMap.get(item)
      })

      return reversed.join('')
    },
    modFullwidthBold: function() {
      let textArr = this.text.split('')

      textArr.forEach((item, index, arr) => {
        if (maps.fwBoldMap.has(item)) arr[index] = maps.fwBoldMap.get(item)
      })

      return textArr.join('')
    },
    modFullwidthThin: function() {
      let textArr = this.text.split('')

      textArr.forEach((item, index, arr) => {
        if (maps.fwThinMap.has(item)) arr[index] = maps.fwThinMap.get(item)
      })

      return textArr.join('')
    },
    modRounded: function() {
      let textArr = this.text.split('')

      textArr.forEach((item, index, arr) => {
        if (maps.roundedMap.has(item)) arr[index] = maps.roundedMap.get(item)
      })

      return textArr.join('')
    },
    copy: function() {
      copyText(this.modifiedText)
    }
  },
  computed: {
    modifiedText: function() {
      return this[this.currentMod]()
    }
  }
})
