const fetch = require("isomorphic-fetch");

const getLocales = async () => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/jsonapi/configurable_language/configurable_language`
    );

    if (res.status === 200) {
      return ["en", "es"];
    } else {
      return ["en"];
    }
  } catch (error) {
    console.error("There was an error fetching language data.", error);
    console.log("Defaulting locale to ['en']");
    return ["en"];
  }
};

module.exports = getLocales;
