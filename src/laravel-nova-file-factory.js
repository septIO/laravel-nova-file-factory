import templates from './templates/compiledTemplates'
import NovaResource from './pipes/NovaResource'
import {BaseFileFactory} from "@pipe-dream/core";
import defaultSchema from "./preferences/defaultSchema";

export default class LaravelNovaFileFactory extends BaseFileFactory {
    constructor(omc) {
        super(omc)
    }

    static get title() {
        return "LaravelNovaFileFactory"
    }

    static templates() {
        return templates
    }

    static version() {
        return require('../package.json').version
    }

    static pipes() {
        return [
            NovaResource
        ]
    }

    static settings() {
        return [
            {
                name: "useManyToManyPackage",
                help: "Use 'https://packagist.org/packages/dillingham/nova-attach-many' for ManyToMany relationships",
                value: false,
                dataType: "boolean",

            }
        ]
    }

    static defaultPreferences() {
        return defaultSchema;
    }
}
