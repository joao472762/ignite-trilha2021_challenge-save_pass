import {extendTheme} from 'native-base'

export  const Theme = extendTheme({
    colors: {
        blue: {
            700: '#1859d2',
            500: '#1967FB',

            
        },
        gray: {
            700:'#3D434D',
            600: '#888D97',
            300: '#e3e4e5',
            200: '#EBF2FF',
            100: '#F2F3F5',
            
            
        },
        danger: {
            
            500:'#E83F5B',
        },
        yellow: {
            500: '#FFCC00',
            400: '#ecbd01'
        }
    },
    fontConfig: {
        
        Rubik: {
            400:{normal: 'Rubik_400Regular'},
            500:{normal: 'Rubik_500Medium'},
            700:{normal: 'Rubik_700Bold'}
        }

    },

    fonts: {
        heading: 'Rubik',
        body: 'Rubik',
        mono: 'Rubik'
        
    },
    sizes: {
        14:56
    }


    
})
