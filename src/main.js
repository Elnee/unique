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
      { text: 'Upside Down text', value: 'modUpsideDown' },
      { text: 'Fullwidth', value: 'modFullwidth' }
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

      // Map of upside down symbols
      // NOTE: some chars are missed because they are the same as upside down 
      // or there are no upside down alternatives, enjoy ;)
      let usdMap = new Map();
      usdMap.set('a', '\u0250')
      usdMap.set('b', 'q')
      usdMap.set('c', '\u0254')
      usdMap.set('d', 'p')
      usdMap.set('e', '\u01DD')
      usdMap.set('f', '\u025F')
      usdMap.set('g', '\u0183')
      usdMap.set('h', '\u0265')
      usdMap.set('i', '\u1D09')
      usdMap.set('j', '\u027E')
      usdMap.set('k', '\u029E')
      usdMap.set('m', '\u026F')
      usdMap.set('n', 'u')
      usdMap.set('p', 'd')
      usdMap.set('q', 'b')
      usdMap.set('r', '\u0279')
      usdMap.set('t', '\u0287')
      usdMap.set('u', 'n')
      usdMap.set('v', '\u028C')
      usdMap.set('w', '\u028D')
      usdMap.set('y', '\u028E')
      usdMap.set('A', '\u2200')
      usdMap.set('C', '\u0186')
      usdMap.set('E', '\u018E')
      usdMap.set('F', '\u2132')
      usdMap.set('G', '\u05E4')
      usdMap.set('J', '\u017F')
      usdMap.set('M', 'W')
      usdMap.set('P', '\u0500')
      usdMap.set('T', '\u2534')
      usdMap.set('U', '\u2229')
      usdMap.set('V', '\u039B')
      usdMap.set('W', 'M')
      usdMap.set('Y', '\u2144')
      usdMap.set('1', '\u0196')
      usdMap.set('2', '\u1105')
      usdMap.set('3', '\u0190')
      usdMap.set('4', '\u3123')
      usdMap.set('5', '\u03DB')
      usdMap.set('6', '9')
      usdMap.set('7', '\u3125')
      usdMap.set('9', '6')
      usdMap.set(',', "'")
      usdMap.set('.', '\u02D9')
      usdMap.set('?', '\u00BF')
      usdMap.set('!', '\u00A1')
      usdMap.set('"', ',,')
      usdMap.set('`', ',')
      usdMap.set('(', ')')
      usdMap.set(')', '(')
      usdMap.set('[', ']')
      usdMap.set(']', '[')
      usdMap.set('{', '}')
      usdMap.set('}', '{')
      usdMap.set('<', '>')
      usdMap.set('>', '<')
      usdMap.set('&', '\u214B')
      usdMap.set('_', '\u203E')
      
      // Replace characters with their upside down equialents
      reversed = reversed.split('')
      reversed.forEach((item, index, arr) => {
        if (usdMap.has(item)) arr[index] = usdMap.get(item)
      })

      return reversed.join('')
    },
    modFullwidth: function() {
      let textArr = this.text.split('')
      
      // Create map of fullwidth symbols
      let fwMap = new Map()
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
