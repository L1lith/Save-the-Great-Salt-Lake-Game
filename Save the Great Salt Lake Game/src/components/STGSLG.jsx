export default function STGSLG() {
	const doSubmit = (e)=>{
		e.preventDefault()
		alert('hi')
	}
	return <form onSubmit={doSubmit} class="stgslg"><input class="response"></input></form>
}