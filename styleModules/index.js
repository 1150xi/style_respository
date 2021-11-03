const COMPONENTS = [];

export default {
    install (vue){
        COMPONENTS.forEach(component => {
            vue.component(component.name, component)
        })
    }
}