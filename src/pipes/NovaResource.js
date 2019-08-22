import {Template} from "@pipe-dream/core";
import ModelPipe from '@pipe-dream/laravel-file-factory/src/pipes/ModelPipe'


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
                    ___NAMESPACE_MODEL___: "\\App\\" + model.className() + "::class",
                    ___NOVA_FIELDS_BLOCK___: this.getNovaFieldsForModel(model)
                })
            }
        })
    }

    getNovaFieldsForModel(model) {
        let ID = "Fields\\ID::make()->sortable()";
        let Fields = [ID];
        let attributes = model.attributes;
        console.log(typeof this.hiddenAttributes(model))
        attributes.forEach(attribute => {
            if(this.hiddenAttributes(model).indexOf(attribute.name) !== -1 || attribute.name==="id")
                return;
            Fields.push(`Fields\\${this.getNovaFieldForAttribute(attribute)}::make("${attribute.name}")`)
        })
        return Fields.join(',\n');
    }

    getNovaFieldForAttribute(attribute) {
        const datatypeFieldKeyValuePairs = {
            "boolean": "Boolean",
            "timestamp": "DateTime",
            "string": "Text",
            "text": "Trix"
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
            "Heading": ["title", "heading"],
            "Image": ["image", "img"],
            "Markdown": ["markdown"],
            "Number": ["number"],
            "Password": ["password"],
            "Place": ["city", "place"],
            "Timezone": ["timezone"]
        }

        return this.getObjectKeyFromArrayValue(novaFieldsWithAlias, attribute.name) ||
            datatypeFieldKeyValuePairs[attribute.dataType]
            || "Text"
    }

    getObjectKeyFromArrayValue(obj, searchParam) {
        console.log(searchParam)
        Object.keys(obj).find(key => console.log(obj[key].includes(searchParam)))
        return Object.keys(obj).find(key => obj[key].includes(searchParam));
    }
}
