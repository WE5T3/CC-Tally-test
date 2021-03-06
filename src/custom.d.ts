type RecordItem = {
    type: string
    tags: string[]
    time: string | null
    date: string | null
    notes: string
    amount: number
}
type RootState = {
    recordList: RecordItem[]
    tagList: Tag[]
    currentTag?: Tag
}
type Tag = {
    id: string
    name: string
    value: string
}


interface Window {

}