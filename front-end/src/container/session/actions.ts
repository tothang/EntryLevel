import {LOAD_SESSION} from './constants'

export function loadSession(short_title:string, status:string) {
	return {
		type: LOAD_SESSION,
		filter: {
			short_title: short_title,
			status: status
		}
	}
}
