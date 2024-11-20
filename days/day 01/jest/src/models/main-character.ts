export class MainCharacter {
    private _currentPosition = {x: 0, y: 0}

    move(direction: string): void {
        if(direction == '') return

        const vector = {x: 0, y: 0}
        switch(direction) {
            case 'right': {
                vector.x = 1
            } break
            case 'left': {
                vector.x = -1
            } break
            case 'top': {
                vector.y = -1
            } break
            case 'down': {
                vector.x = 1
            }
        }

        this.setPosition({
            x: this._currentPosition.x + vector.x,
            y: this._currentPosition.y + vector.y,
        })
    }

    setPosition(position: {x: number, y: number}): void {
        this._currentPosition = {...position}
    }

    get currentPosition() {
        return this._currentPosition
    }
}