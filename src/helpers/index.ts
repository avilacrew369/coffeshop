
export function formatDate(dateStr: string) : string {
    const date = new Date(dateStr)
   return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
    }).format(date)
}