module.exports = {
  'audio-mix-ac3': [
    '-f', 'ac3',
    '-c:a', 'ac3',
    '-filter_complex', 'amix=inputs=2:duration=longest'
  ]
}
