import {extendTheme, theme as base} from '@chakra-ui/react'

const theme = extendTheme({
    // colors: {
    //     brand: {

    //     }
    // },
    fonts: {
        heading: `Comic Neue, ${base.fonts?.heading}`,
        body: `Comic Neue, ${base.fonts?.heading}`,
    }
});

export default theme;