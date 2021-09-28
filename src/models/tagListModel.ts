import createId from "@/lib/createId";

const localStorageKeyName = 'tagList';


const tagListModel :TagListModel= {
    data:[],
    create(name:string) {

        const names = this.data.map(item => item.name)
        if (name === ' ' || name.indexOf(' ') >= 0) {
            return 'blank'
        }
        if (names.indexOf(name) >= 0) {
            return 'duplicated'
        }
        const id = createId().toString()
        this.data.push({id, name: name})
        this.save()
        return 'success'
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data

    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                this.save()
                return 'success'
            }
        } else {
            return 'notfound'
        }
    },
    remove(id: string) {
        let index = -1
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i
                break
            }
        }
        this.data.splice(index, 1)
        this.save()
        return true
    },
    save() {
        return localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }

}
export {tagListModel};
