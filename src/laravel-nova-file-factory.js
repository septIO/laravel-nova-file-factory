import defaultPreferences from './preferences/defaultSchema'
import templates from './templates/compiledTemplates'
import NovaResourcePipe from './pipes/NovaResource'
import {BaseFileFactory} from "@pipe-dream/core";

export default class LaravelNovaFileFactory extends BaseFileFactory {
    constructor(objectModelCollection) {
        super(objectModelCollection)
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
            NovaResourcePipe
        ]
    }

    static defaultPreferences() {
        return defaultPreferences
    }
}
