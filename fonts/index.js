import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

const poppins = Poppins({
    weight : ['500','700'],
    style : 'normal',
    subsets : ['latin']
})
const eina = localFont({
    src : [
        {
            path : './eina03/eina-03-bold.woff2',
            weight : '700',
            style : 'normal'
        }
    ]
})
export {eina, poppins}
