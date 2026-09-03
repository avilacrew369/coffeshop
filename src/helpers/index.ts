
export function formatDate(dateStr: string) : string {
    const date = new Date(dateStr)
   return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
    }).format(date)
}

export function formatAmount(amount : number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}


export function nullToEmptyString( arg: unknown ) {
    return arg ?? ''
}
