export class GameConfig {
    static nbEnemiesInGame = 10

    constructor() {
        console.info('constructor')
    }

    static {
        this.nbEnemiesInGame = 100
        console.info('config', this)
    }
}