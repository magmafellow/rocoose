


export function truncatePhrase(phrase: string, range: number) {
  if(phrase.length <= range) {
    return phrase
  }
  else {
    let string = '';
    for (let i = 0; i < range; i++) {
      string += phrase[i]
    }
    return string + '...'
  }
}
