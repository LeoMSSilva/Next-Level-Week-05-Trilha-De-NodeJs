document.querySelector("#start_chat").addEventListener("click", (event) => {
	const socket = io();

	const chat_help = document.querySelector("#chat_help");
	chat_help.style.display = "none";

	const chat_in_support = document.querySelector("#chat_in_support");
	chat_in_support.style.display = "block";

	const email = document.querySelector("#email").value;
	const text = document.querySelector("#txt_help").value;

	socket.on("connect", () => {
		const params = {
			email,
			text,
		};
		socket.emit("client_first_access", params, (call, e) => {
			e ? console.log(e) : console.log(call);
		});
	});
});
