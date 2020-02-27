import {Template} from "@pipe-dream/core";
import ModelPipe from '@pipe-dream/laravel-file-factory/src/pipes/ModelPipe'
import BasePipe from "@pipe-dream/laravel-file-factory/src/pipes/BasePipe";


export default class NovaResource extends ModelPipe {

    static get title() {
        return "NovaResource"
    }

    calculateFiles(omc) {
        return [...this.NovaResources()]
    }

    NovaResources() {
        return this.omc.modelsIncludingUser().map(model => {
            return {
                path: "App/Nova/" + model.className() + ".php",
                content: Template.for('NovaResource.php').replace({
                    ___MODEL___: model.className(),
                    ___NAMESPACE_MODEL___: `\\${this.modelNamespace()}\\${model.className()}::class`,
                    ___NOVA_FIELDS_BLOCK___: this.getNovaFieldsForModel(model)
                })
            }
        })
    }

    getNovaFieldsForModel(model) {
        let ID = "Fields\\ID::make()->sortable()";
        let Fields = [ID];
        let attributes = model.attributes;

        let relations = [];
        model.relationships.belongsTo.forEach(rel => {
            let str = `Fields\\BelongsTo::make("${rel.name}")`
            relations.push(str)
        })
        model.relationships.belongsToMany.forEach(rel => {
            let str = `Fields\\BelongsToMany::make("${rel.name}")`
            relations.push(str)
        })
        model.relationships.hasOne.forEach(rel => {
            let str = `Fields\\HasOne::make("${rel.name}")`
            relations.push(str)
        })
        model.relationships.hasMany.forEach(rel => {
            let str = `Fields\\HasMany::make("${rel.name}")`
            relations.push(str)
        })

        attributes.forEach(attribute => {
            if(this.hiddenAttributes(model).indexOf(attribute.name) !== -1 || attribute.name==="id" || !attribute.properties.fillable || attribute.properties.foreign)
                return;
            Fields.push(`Fields\\${this.getNovaFieldForAttribute(attribute)}::make("${attribute.name}")`)
        })
        let ret = [...Fields, ...relations].join(',\n')
        return ret;
    }

    getNovaFieldForAttribute(attribute) {
        const datatypeFieldKeyValuePairs = {
            "boolean": "Boolean",
            "timestamp": "DateTime",
            "string": "Text",
            "text": "Trix",
            "integer": "Number"
        }
        const novaFieldsWithAlias = {
            "Avatar": ["avatar"],
            "Boolean": ["boolean", "bool"],
            "Code": ["code"],
            "Country": ["country"],
            "Currency": ["currency"],
            "Date": ["date"],
            "DateTime": ["timestamp", "datetime"],
            "File": ["file"],
            "Gravatar": ["gravatar"],
            "Image": ["image", "img"],
            "Markdown": ["markdown"],
            "Number": ["number"],
            "Password": ["password"],
            "Place": ["city", "place"],
            "Timezone": ["timezone"]
        }
        let t = this.getObjectKeyFromArrayValue(novaFieldsWithAlias, attribute.name) ||
            datatypeFieldKeyValuePairs[attribute.properties.dataType]
            || "Text"
        //console.log(`${attribute.name}: ${attribute.properties.dataType} casts to ${t}`)
        return t
    }

    getObjectKeyFromArrayValue(obj, searchParam) {
        Object.keys(obj).find(key => console.log(obj[key].includes(searchParam)))
        return Object.keys(obj).find(key => obj[key].includes(searchParam));
    }
}
