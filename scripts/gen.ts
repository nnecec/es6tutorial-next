import { writeFile, copyFile, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const docsDir = path.resolve('./docs')
const targetDir = path.resolve('./pages/zh')

const rewriteImagesPath = async (filepath: string): Promise<string> => {
  try {
    const content = await readFile(filepath, 'utf-8')
    const newContent = content.replace(/\(images/g, '(/images')

    // 返回新的内容
    return newContent
  } catch (error) {
    console.error(`读取文件或替换内容时发生错误: ${error}`)
    throw error
  }
}

const copyDocs = async () => {
  const dir = await readdir(docsDir)

  for (const file of dir) {
    if (path.extname(file) === '.md') {
      await writeFile(path.resolve(targetDir, file), await rewriteImagesPath(path.resolve(docsDir, file)))
    }
  }
  await writeFile(path.resolve(targetDir, 'index.md'), await rewriteImagesPath(path.resolve('./README.md')))
}

const genPagesMeta = async () => {
  const summary = await readFile('./sidebar.md', 'utf-8')
  let order = 1
  const map = summary.split('\n').reduce(
    (map, line) => {
      const match = line.match(/\[(.*?)\]\(#(.*?)\)/)
      if (!match) return map
      const name = match[1]

      const matchf = match[2].match(/\/?([^/]+)$/)
      if (!matchf) return map
      const filename = matchf[1]
      if (filename === 'README') {
        map.index = `${String(order++).padStart(2, '0')} ${name}`
        return map
      }
      map[filename] = `${String(order++).padStart(2, '0')} ${name}`
      return map
    },
    {} as Record<string, string | { display: 'hidden' }>,
  )

  const files = await readdir(docsDir)

  for (const file of files) {
    const filename = file.slice(0, -3)
    if (!map[filename]) {
      map[filename] = {
        display: 'hidden',
      }
    }
  }

  await writeFile(path.resolve(targetDir, '_meta.js'), `export default ${JSON.stringify(map, null, 2)}`)
}

const main = async () => {
  await copyDocs()
  await genPagesMeta()
}

main()
