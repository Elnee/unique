import Vue from 'vue'

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
      { text: 'Upsidedown text', value: 'modUpsidedown' },
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
    modUpsidedown: function() {
      let reversed = this.text.split('').reverse().join('')

      // Map of upside down symbols
      let usdMap = new Map();
      usdMap.set("a", "\u0250")
      usdMap.set("b", "q")
      usdMap.set("c", "\u0254")
      usdMap.set("d", "p")
      usdMap.set("e", "\u01DD")
      usdMap.set("f", "\u025F")
      // TODO: Finish the map
      
      // Replace characters with their upside down equialents
      reversed = reversed.split('')
      reversed.forEach((item, index, arr) => {
        if (usdMap.has(item)) arr[index] = usdMap.get(item)
      })

      return reversed.join('')
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
