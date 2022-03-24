import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.cyan.darken1, // #E53935
            secondary: colors.cyan.lighten4, // #FFCDD2
            accent: colors.cyan.base, // #3F51B5
          },
        },
      },    
});