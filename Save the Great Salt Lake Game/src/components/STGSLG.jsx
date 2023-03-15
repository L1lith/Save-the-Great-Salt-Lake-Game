import "../styles/STGSLG.scss"
import {createSignal} from 'solid-js'

export default function STGSLG() {
	const [history, setHistory] = createSignal([])
	let input
	const [disabled, setDisabled] = createSignal(false)
	const doSubmit = async (e)=>{
		e.preventDefault()
		if (disabled()) return
		setDisabled(true)
		setHistory(history().concat([await processInput(input.value)]))
		input.value = ""
		setDisabled(false)
	}
	const processInput = async (val) => {
		return val
	}
	return <form onSubmit={doSubmit} class="stgslg"><div class="history">{history().map(value => (<span class="event">{value}</span>))}</div><input ref={input} class="response"></input></form>
}