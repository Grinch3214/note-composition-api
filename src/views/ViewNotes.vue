<template>
	<div class="notes">

		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea
						v-model="newNote"
						class="textarea"
						placeholder="Add a new note"
						ref="newNoteRef"
					/>
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
						@click="addNote"
						:disabled="!newNote"
						class="button is-link has-background-success"
					>
						Add New Note
					</button>
				</div>
			</div>
		</div>

		<Note 
			v-for="note in notes"
			:key="note.id"
			:note="note"
		/>

	</div>
	
</template>

<script setup>
	// imports
	import { ref } from 'vue'
	import Note from '@/components/Notes/Note.vue'

	// new note
	const newNote = ref('')
	const newNoteRef = ref(null)

	// notes
	const notes = ref([
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
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia nemo facilis consequuntur aliquid itaque ea '
		}
	])

	const addNote = () => {
		let currentDate = new Date().getTime()
		let id = currentDate

		let note = {
			id,
			content: newNote.value
		}

		notes.value.unshift(note)

		newNote.value = ''
		newNoteRef.value.focus()

	}
</script>