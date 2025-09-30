let text = `
searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn
`

function convert(text) {
    let result = {}
    let section = {}
    let slaveName = ""
    for (let line of text.replace(/;.*\n/gm, "").split(/\r?\n/).filter(arr => arr != "")) {
        if (/^\[/.test(line)) {
            section = {}
            slaveName = line.replace(/\[|\]/g, "")
            result[slaveName] = {}
        }
        else if (slaveName) {
            let [key, val] = line.split("=");
            result[slaveName][key] = val;
        }
        else {
            let [key, val] = line.split("=")
            result[key] = val
        }
    }
    return result
}

console.log(convert(text))
