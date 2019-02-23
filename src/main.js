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
      { text: 'Fullwidth', value: 'modFullwidth' },
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
      fwMap.set('!', '！')
      fwMap.set('#', '＃')
      fwMap.set('$', '＄')
      fwMap.set('%', '％')
      fwMap.set('&', '＆')
      fwMap.set("'", '＇')
      fwMap.set('(', '（')
      fwMap.set(')', '）')
      fwMap.set('*', '＊')
      fwMap.set('+', '＋')
      fwMap.set(',', '，')
      fwMap.set('-', '－')
      fwMap.set('.', '．')
      fwMap.set('/', '／')
      fwMap.set('0', '０')
      fwMap.set('1', '１')
      fwMap.set('2', '２')
      fwMap.set('3', '３')
      fwMap.set('4', '４')
      fwMap.set('5', '５')
      fwMap.set('6', '６')
      fwMap.set('7', '７')
      fwMap.set('8', '８')
      fwMap.set('9', '９')
      fwMap.set(':', '：')
      fwMap.set(';', '；')
      fwMap.set('=', '＝')
      fwMap.set('?', '？')
      fwMap.set('@', '＠')
      fwMap.set('A', 'Ａ')
      fwMap.set('B', 'Ｂ')
      fwMap.set('C', 'Ｃ')
      fwMap.set('D', 'Ｄ')
      fwMap.set('E', 'Ｅ')
      fwMap.set('F', 'Ｆ')
      fwMap.set('G', 'Ｇ')
      fwMap.set('H', 'Ｈ')
      fwMap.set('I', 'Ｉ')
      fwMap.set('J', 'Ｊ')
      fwMap.set('K', 'Ｋ')
      fwMap.set('L', 'Ｌ')
      fwMap.set('M', 'Ｍ')
      fwMap.set('N', 'Ｎ')
      fwMap.set('O', 'Ｏ')
      fwMap.set('P', 'Ｐ')
      fwMap.set('Q', 'Ｑ')
      fwMap.set('R', 'Ｒ')
      fwMap.set('S', 'Ｓ')
      fwMap.set('T', 'Ｔ')
      fwMap.set('U', 'Ｕ')
      fwMap.set('V', 'Ｖ')
      fwMap.set('W', 'Ｗ')
      fwMap.set('X', 'Ｘ')
      fwMap.set('Y', 'Ｙ')
      fwMap.set('Z', 'Ｚ')
      fwMap.set('[', '［')
      fwMap.set('\\', '＼')
      fwMap.set(']', '］')
      fwMap.set('^', '＾')
      fwMap.set('_', '＿')
      fwMap.set('`', '｀')
      fwMap.set('a', 'ａ')
      fwMap.set('b', 'ｂ')
      fwMap.set('c', 'ｃ')
      fwMap.set('d', 'ｄ')
      fwMap.set('e', 'ｅ')
      fwMap.set('f', 'ｆ')
      fwMap.set('g', 'ｇ')
      fwMap.set('h', 'ｈ')
      fwMap.set('i', 'ｉ')
      fwMap.set('j', 'ｊ')
      fwMap.set('k', 'ｋ')
      fwMap.set('l', 'ｌ')
      fwMap.set('m', 'ｍ')
      fwMap.set('n', 'ｎ')
      fwMap.set('o', 'ｏ')
      fwMap.set('p', 'ｐ')
      fwMap.set('q', 'ｑ')
      fwMap.set('r', 'ｒ')
      fwMap.set('s', 'ｓ')
      fwMap.set('t', 'ｔ')
      fwMap.set('u', 'ｕ')
      fwMap.set('v', 'ｖ')
      fwMap.set('w', 'ｗ')
      fwMap.set('x', 'ｘ')
      fwMap.set('y', 'ｙ')
      fwMap.set('z', 'ｚ')
      fwMap.set('{', '｛')
      fwMap.set('|', '｜')
      fwMap.set('}', '｝')
      fwMap.set('~', '～')

      textArr.forEach((item, index, arr) => {
        if (fwMap.has(item)) arr[index] = fwMap.get(item)
      })

      return textArr.join('')
    },
    modRounded: function() {
      let textArr = this.text.split('')

      let roundedMap = new Map()
      roundedMap.set('A', 'ᗩ')
      roundedMap.set('B', 'ᗷ')
      roundedMap.set('C', 'ᑕ')
      roundedMap.set('D', 'ᗪ')
      roundedMap.set('E', 'E')
      roundedMap.set('F', 'ᖴ')
      roundedMap.set('G', 'G')
      roundedMap.set('H', 'ᕼ')
      roundedMap.set('I', 'I')
      roundedMap.set('J', 'ᒍ')
      roundedMap.set('K', 'K')
      roundedMap.set('L', 'ᒪ')
      roundedMap.set('M', 'ᗰ')
      roundedMap.set('N', 'ᑎ')
      roundedMap.set('O', 'O')
      roundedMap.set('P', 'ᑭ')
      roundedMap.set('Q', 'ᑫ')
      roundedMap.set('R', 'ᖇ')
      roundedMap.set('S', 'ᔕ')
      roundedMap.set('T', 'T')
      roundedMap.set('U', 'ᑌ')
      roundedMap.set('V', 'ᐯ')
      roundedMap.set('W', 'ᗯ')
      roundedMap.set('X', '᙭')
      roundedMap.set('Y', 'Y')
      roundedMap.set('Z', 'ᘔ')
      roundedMap.set('a', 'ᗩ')
      roundedMap.set('b', 'ᗷ')
      roundedMap.set('c', 'ᑕ')
      roundedMap.set('d', 'ᗪ')
      roundedMap.set('e', 'E')
      roundedMap.set('f', 'ᖴ')
      roundedMap.set('g', 'G')
      roundedMap.set('h', 'ᕼ')
      roundedMap.set('i', 'I')
      roundedMap.set('j', 'ᒍ')
      roundedMap.set('k', 'K')
      roundedMap.set('l', 'ᒪ')
      roundedMap.set('m', 'ᗰ')
      roundedMap.set('n', 'ᑎ')
      roundedMap.set('o', 'O')
      roundedMap.set('p', 'ᑭ')
      roundedMap.set('q', 'ᑫ')
      roundedMap.set('r', 'ᖇ')
      roundedMap.set('s', 'ᔕ')
      roundedMap.set('t', 'T')
      roundedMap.set('u', 'ᑌ')
      roundedMap.set('v', 'ᐯ')
      roundedMap.set('w', 'ᗯ')
      roundedMap.set('x', '᙭')
      roundedMap.set('y', 'Y')
      roundedMap.set('z', 'ᘔ')

      textArr.forEach((item, index, arr) => {
        if (roundedMap.has(item)) arr[index] = roundedMap.get(item)
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
