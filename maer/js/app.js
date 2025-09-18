import players from "./data.js";

let htmlOutput = ""

const playersOutput = document.getElementById("playersOutput")

const playersFunction = (data) => {
  let yt = data.yt ? "" : "hidden"
  let twitch = data.twitch ? "" : "hidden"
  let discord = data.discord ? "" : "hidden"
  let role = data.role ? data.role : "Žádná"

  htmlOutput += `
  <div class="my-8 p-6 bg-gray-800 bg-opacity-90 text-white rounded-2xl border-4 animate-border w-64 flex flex-col items-center relative group overflow-hidden">
    <img src="${data.head}" alt="" class="w-32 mb-6 rounded-xl">
    <p class="text-2xl text-center font-semibold">${data.name}</p>
    <p class="my-4">Role: ${role}</p>
    <p class="text-lg text-center my-auto">${data.desc}</p>

    <!-- overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-500 flex flex-row flex-wrap items-center ease-in-out">
      <div class="opacity-0 group-hover:opacity-100 transition duration-500 flex gap-4 text-white text-lg font-bold flex flex-row flex-wrap justify-center mx-auto ease-in-out">
        <a href="${data.yt || ''}" class="${yt} opacity-30 hover:opacity-60 transition duration-300"><i class="fa-brands fa-youtube text-4xl"></i></a>
        <a href="${data.twitch || ''}" class="${twitch} opacity-30 hover:opacity-60 transition duration-300"><i class="fa-brands fa-twitch text-4xl"></i></a>
        <a href="${data.discord || ''}" class="${discord} opacity-30 hover:opacity-60 transition duration-300"><i class="fa-brands fa-discord text-4xl"></i></a>
      </div>
    </div>
  </div>`
}

players.map(playersFunction)


playersOutput.innerHTML = htmlOutput