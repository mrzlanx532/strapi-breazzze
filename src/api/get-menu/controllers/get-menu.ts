interface ICategory {
    [key: string]: any
}

export default {
    getCategoryTree: async (ctx, next) => {
        try {
            const categories = await strapi.entityService.findMany('api::category.category', {
                fields: ['id', 'title', 'link', 'publishedAt'],
                populate: {
                    parent: {
                        fields: ['id']
                    }
                },
                sort: {
                    order: 'asc'
                },
                status: 'published'
            }) as ICategory[]


            const parentCategories = []
            const childCategories = []

            const mapper = {}

            categories.forEach((category) => {

                if (category.parent === null) {
                    delete category.parent

                    parentCategories.push(category)

                    return
                }

                mapper[category.parent.id] ?
                    mapper[category.parent.id].push(category) :
                    mapper[category.parent.id] = [category]

                delete category.parent

                childCategories.push(category)
            })


            parentCategories.forEach(category => {
                if (mapper[category.id]) {
                    category.children = mapper[category.id]
                }
            })

            ctx.body = parentCategories

        } catch (err) {
            ctx.body = err;
        }
    }
};
