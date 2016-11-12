export class App{
    constructor(){
        this.header = 'This is Header';
        this.content = 'This is content';
    }

    updateContent(){
        this.header = 'This is NEW header...'
        this.content = 'This is NEW content...';
    }
}