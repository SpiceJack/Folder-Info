const path = require('path')
const fs = require('fs/promises')

const cli_args = process.argv()

const folderPath = cli_args[2] ? path.resolve(cli_args[2]) : path.resolve(process.cwd())

try { 
    
let contents_arr = await fs.readdir(folderPath, {withFileTypes : true})
    const files = (contents_arr.filter((file) => file.isFile)).length
    const folders = (contents_arr.filter((file) => file.isDirectory)).length

}

catch(error) {
    console.error("error: could not read folder: missing-folder")
    process.exitCode = 1
}

console.log(`Folder: ${path.basename(folderPath)}`)
console.log(`Path: ${folderPath}`)
console.log(`Files: ${files}`)
console.log(`Folders: ${folders}`)








