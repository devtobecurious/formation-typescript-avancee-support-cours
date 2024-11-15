/* eslint-disable @typescript-eslint/no-unused-vars */
interface ShieldOld {
    type: 'Prouesse' | 'Alignement' | 'Other', 
    power?: number,
    defaultValue?: number
}

// ici ce n’est pas la bonne approche : on ne sait pas que si on a Prouesse par exemple, on a un power non undefined.
// function useShield(item: Shield) {
//     if(item.type == 'Prouesse') {
//         return item.power.toFixed()
//     }
// }

interface BetterShield {
    type: 'Prouesse' | 'Alignement',
    power: number
}

interface DefaultShield {
    type: 'Other',
    defaultValue: number
}

type Shield = BetterShield | DefaultShield

function useShield(item: Shield): number {
    if(item.type === 'Other') {
        return item.defaultValue
    } else {
        return item.power
    }
}


