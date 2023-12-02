export default function (fileExtension: string): string {
  const fileExtensionColorMap: { [key: string]: string } = {
    js: '#f1e05a',
    jsx: '#f1e05a',
    ts: '#2b7489',
    tsx: '#2b7489',
    vue: '#42b883',
    json: '#f1e05a',
    html: '#e34c26',
    css: '#563d7c',
  }

  return fileExtensionColorMap[fileExtension] || '#777777'
}
