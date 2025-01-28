import cyrillicToTranslit from 'cyrillic-to-translit-js'

export default {
    beforeCreate(event) {
        const { data } = event.params;

        if (data.is_autogenerate_link) {
            const _cyrillicToTranslit = new (cyrillicToTranslit as any)()

            event.params.data.link = _cyrillicToTranslit.transform(data.title.trim().toLowerCase(), '-');
        }
    },

    beforeUpdate(event) {
        const { data } = event.params;

        if (data.is_autogenerate_link) {
            const _cyrillicToTranslit = new (cyrillicToTranslit as any)()

            event.params.data.link = _cyrillicToTranslit.transform(data.title.trim().toLowerCase(), '-');
        }
    }
};