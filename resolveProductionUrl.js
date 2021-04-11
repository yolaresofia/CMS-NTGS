export default function resolveProductionUrl(document) {
    return `https://ntgsevents.netlify.app/${document._type}/?preview=true`
  }