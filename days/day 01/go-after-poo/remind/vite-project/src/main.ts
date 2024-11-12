import { Urukai } from './models/urukai'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Aller plus loin en POO
  </div>
`
const uruk = new Urukai()
console.info(uruk.myName)