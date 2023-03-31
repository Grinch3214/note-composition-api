import { defineStore } from "pinia"

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				{
					id: 1,
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia nemo facilis consequuntur aliquid itaque ea dolor non ipsum quo dignissimos nam, perferendis deleniti dolorem neque temporibus animi velit iste!'
				},
				{
					id: 2,
					content: 'Molestias officia nemo facilis consequuntur aliquid itaque ea dolor non ipsum quo dignissimos nam, perferendis deleniti dolorem neque temporibus animi velit iste!'
				},
				{
					id: 3,
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia nemo facilis consequuntur aliquid itaque ea game'
				}
			]
		}
	},
	actions: {
		addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let id = currentDate

			let note = {
				id,
				content: newNoteContent
			}

			this.notes.unshift(note)
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter(note => { return note.id !== idToDelete })
		}
	}
})