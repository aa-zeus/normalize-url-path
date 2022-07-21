export default (path: string, stripTrailing = true) => {
  if (path === '/') return '/'

  if (path.length <= 1) return path

  const seqs = path.split(/\/+/)

  if (stripTrailing !== false && seqs[seqs.length - 1] === '') {
    seqs.pop()
  }

  return seqs.join('/')
}
