const fetch = require("node-fetch");
async function readfollowers(link) {
  return new Promise((resolve, reject) => {
    fetch(link)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
async function readlink(link) {
  return new Promise((resolve, reject) => {
    fetch(link)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

async function main() {
  const profiledata = await readlink(
    "https://api.github.com/users/gangadhar5613"
  )
    .then((data) => data.json())
    .then((data) => data.followers_url)
    .then((data) => readfollowers(data))
    .then((data) => data.json())
    .then((data) => data.map((row) => row.login))
    .then((data) => data)
    .catch((err) => console.error(err));
  console.log(profiledata);
}
main();
