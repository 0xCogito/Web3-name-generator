const prefixes = [
  "Meta", "Chain", "Block", "Token", "Degen", "Crypto", "DAO", "ZK", "Mint", "W3"
];
const suffixes = [
  "Verse", "Fi", "Labs", "Swap", "Net", "X", "Protocol", "Core", "Node", "Gen"
];

function generateName() {
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const name = prefix + suffix;
  document.getElementById("result").innerText = name;
}
