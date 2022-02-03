function appendCSS(type, name) {
  $("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    class: `chat_${type}`,
    href: `styles/${type}_${name}.css`,
  }).appendTo("head")
}

function decimalColorToRGBA(num) {
  const r = (num >>> 24) & 0xff
  const g = (num >>> 16) & 0xff
  const b = (num >>> 8) & 0xff
  const a = num & 0xff

  return `rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(3)})`
}

function escapeRegExp(string) {
  // Thanks to coolaj86 and Darren Cook (https://stackoverflow.com/a/6969486)
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function escapeHtml(message) {
  return message
    .replace(/&/g, "&amp;")
    .replace(/(<)(?!3)/g, "&lt;")
    .replace(/(>)(?!\()/g, "&gt;")
}

function TwitchAPI(url) {
  return $.getJSON(url + (url.search(/\?/) > -1 ? "&" : "?") + "client_id=" + client_id)
}
