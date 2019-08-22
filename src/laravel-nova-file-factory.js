import defaultPreferences from './preferences/defaultSchema'
import templates from './templates/compiledTemplates'
import NovaResourcePipe from './pipes/NovaResource'
import collect from "collect.js";

export default class LaravelNovaFileFactory {
    constructor(objectModelCollection) {
        this.omc = objectModelCollection
    }

    static get title() {
        return "Laravel Nova File Factory"
    }

    static templates() {
        return templates
    }

    static version() {
        return require('../package.json').version
    }

    static settings() {
        return []
    }

    static pipes() {
        return [
            NovaResourcePipe
        ]
    }

    static from(objectModelCollection) {
        return new this(objectModelCollection)
    }

    static defaultPreferences() {
        return defaultPreferences
    }

    withPipes(pipes) {
        this.pipes = pipes
        return this
    }

    calculateFiles() {
        return collect(this.pipes.map(pipe => {
            return pipe.with(this.omc).calculateFiles(this.omc)
        }).reduce((pipeFileList, allFiles) => {
            return pipeFileList
        }, [])).sortBy('path').toArray();
    }
}
