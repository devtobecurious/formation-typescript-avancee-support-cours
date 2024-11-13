import { GameConfig } from './models/game-config'
import { Weapon } from './models/weapon'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Aller plus loin en POO
  </div>
`

console.info(GameConfig.nbEnemiesInGame)

const weapon = new Weapon()
weapon.reload = true

const weapon2 = new Weapon()
weapon.reload = false

Weapon.compare(weapon, weapon2)
