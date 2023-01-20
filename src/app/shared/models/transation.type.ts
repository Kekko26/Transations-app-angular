export type Transazione = {
    id:number,
    data: number,
    importo: number,
    positivo:boolean,
    causale: string
}

export type TransazioneNOID = {
    data: number,
    importo: number,
    positivo:boolean,
    causale: string
}