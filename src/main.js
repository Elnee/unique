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
    currentMod: 'modCrossedText',
    text: 'Some placeholder'
  },
  created: function() {
    this[this.currentMod]()
  },
  methods: {
    modCrossedText: function() {
      if (this.text === "") return "";
      if (this.text.length === 1) return this.text + "\u0336";
      else return this.text.split("").join("\u0336");
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
