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
    text: 'Some placeholder',
    options: [
      { text: 'Crossed text', value: 'modCrossed' },
      { text: 'Upside Down text', value: 'modUpsideDown' },
      { text: 'Fullwidth (bold)', value: 'modFullwidthBold' },
      { text: 'Rounded', value: 'modRounded' }
    ]
  },
  created: function() {
    this[this.currentMod]()
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

      // Replace characters with their fullwidth equialents
      textArr.forEach((item, index, arr) => {
        if (maps.fwMap.has(item)) arr[index] = maps.fwMap.get(item)
      })

      return textArr.join('')
    },
    modRounded: function() {
      let textArr = this.text.split('')

      // Replace characters with their rounded alternatives
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
