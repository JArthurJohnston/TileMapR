const Storage = {
  save: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
  },

  get: (key) => {
    const data = localStorage.getItem(key)
    if(data) {
      return JSON.parse(data)
    }
    return null
  }
}

export const Data = {
  BRUSH_COLOR: 'paintbrush-color',
  BACKGROUND_COLOR: 'background-color',
  SHOW_GRID: 'show-grid',
  PIXELS: 'pixels'
}

export default Storage