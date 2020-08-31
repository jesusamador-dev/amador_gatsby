import { useState, useEffect } from 'react'
import { format, setGlobalDateI18n } from 'fecha'

setGlobalDateI18n({
    monthNamesShort: [`Ene`, `Feb`, `Mar`, `Abr`, `May`, `Jun`, `Jul`, `Ago`, `Sep`, `Oct`, `Nov`, `Dec`],
    monthNames: [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Novimbre`, `Dicimbre`],
    amPm: [`am`, `pm`],
})

const useDate = (published) => {
    const [date, setDate] = useState(null)

    useEffect(() => {
        setDate(format(new Date(published), `MMMM D, YYYY`))
    }, [date])

    return date
}

export default useDate